module TriangoModule where

import String as S
import Library as L
import Maybe as M

type BoardPosition = String

{-type MatchProgress = { player : Char
                     , position : BoardPosition
                     , completed : Bool
                     , whoplayedfirst : String
                     }-}
type Lyne = (Int,Int,Int)

-- these are the values taken from the library --
type BoardValue = { bpoz : BoardPosition, score : Float, description : String}


type BoardPower = [BoardValue]

--------- this is the Game State which gets updated by the Signal
type ActiveBoard = {pieces : String,value : Float, nextPlayer : String, oldBoard : String}

blankboard  : ActiveBoard
blankboard = {pieces = "00000000000", value = 0.5, nextPlayer = "H", oldBoard = "00000000000"}
-----------------------
-- startMatch : MatchProgress
-- startMatch = {player = 'A', position = newboard, completed = False, whoplayedfirst = "C"}


-- playMove : Int -> String -> BoardPosition -> (BoardPosition,Float)
--playMove n s bp = playHumanMove n s bp |> checkForWinner |> continueOn

playHumanMove  : Int -> ActiveBoard -> ActiveBoard
playHumanMove n brd = playTheHumanMove n brd |> checkForWinner


playTheHumanMove : Int -> ActiveBoard -> ActiveBoard
playTheHumanMove n bpv =
              let bp = bpv.pieces
                  s = bpv.nextPlayer

              in 
                    if | isIllegalMove n s bp ->  {bpv | pieces <- (rejigBoard n "B" bp),value <- 0.5,nextPlayer <- "I",oldBoard <- bp}
                       | isFirstPhase bp -> { bpv | pieces <- (rejigBoard n s bp),value <- 0.5,nextPlayer <- "A",oldBoard <- bp}
                       | otherwise -> { bpv | pieces <- (moveFrom s n (theEmptySpot bp) bp),value <- 0.5,nextPlayer <- "A",oldBoard <- bp} 


playComputerMove : ActiveBoard -> ActiveBoard
playComputerMove bpv =
              let bp = bpv.pieces
                  np = bpv.nextPlayer
                  ob = bpv.oldBoard
                  
              in 
               if | np =="I" -> {bpv | pieces <- ob,nextPlayer <- "H"} -- roll back an illegal Human move
                  | someoneHasWon bp -> {bpv | value <- 0.0}
                  | otherwise -> playTheComputerMove bpv |> checkForWinner



rejigBoard : Int -> String -> BoardPosition -> BoardPosition
rejigBoard n s bp = case n of
             0 -> s ++ S.right 10 bp
             11 -> S.left 10 bp ++ s
             _ -> S.left (n-1) bp ++ s ++ S.right (11-n) bp


moveFrom : String -> Int -> Int -> BoardPosition -> BoardPosition
moveFrom s f t bp = bp |> rejigBoard f "0" |> rejigBoard t s


newChar : Char -> Char
newChar c = case c of
       'H' -> 'C'
       'C' -> 'H'
       _  -> c

replaceOnes : BoardPosition -> BoardPosition
replaceOnes bp = S.map (\c -> if c == 'H' then 'W' else c) bp
replaceTwos bp = S.map (\c -> if c == 'C' then 'W' else c) bp


{-
HERE IS THE LOGIC CODE FOR DECIDING ON 
    ILLEGAL MOVES BY THE HUMAN, 
    WINS
    COMPUTER MOVES  ETC
-}

checkForWinner : ActiveBoard -> ActiveBoard
checkForWinner bpv =
                  let bp = bpv.pieces
                      
                  in
                   if | isHomeWin bp -> {bpv | pieces <- replaceOnes bp}
                      | isAwayWin bp -> {bpv | pieces <- replaceTwos bp}
                      | otherwise -> bpv


someoneHasWon : BoardPosition -> Bool
someoneHasWon bp = S.contains "W" bp


isHomeWin : BoardPosition -> Bool
isHomeWin bp = (length (containsFullLines bp 'H')) > 1
isAwayWin bp = (length (containsFullLines bp 'C')) > 1


containsFullLines : BoardPosition -> Char -> [Lyne]
containsFullLines bp c = filter (\l -> hasALine bp c l) lynes
-- why no worky? filter (\l -> all (==c) [bp !! ((alpha l) - 1),bp !! ((beta l) - 1),bp !! ((gamma l) - 1)])

hasALine : BoardPosition -> Char -> Lyne -> Bool
hasALine bp c lyne =
            let p1 = (alpha lyne) - 1
                p2 = (beta lyne) - 1
                p3 = (gamma lyne) - 1
            in bp !! p1 == c && bp !! p2 == c && bp !! p3 == c

isIllegalMove : Int -> String -> BoardPosition -> Bool
isIllegalMove n s bp =
                if | n==0 -> True -- this detects if he has clicked outside the board
                   | isFirstPhase bp -> isIllegalFirstPhaseMove n s bp
                   | otherwise -> isIllegalSecondPhaseMove n s bp


isFirstPhase : BoardPosition -> Bool
isFirstPhase bp = emptySpots bp > 1


emptySpots : BoardPosition -> Int
emptySpots bp = S.indexes "0" bp |> length   


isIllegalFirstPhaseMove : Int -> String -> BoardPosition -> Bool
isIllegalFirstPhaseMove n s bp = (bp !! (n-1)) /= '0'


-- ROUTINE BELOW NOT COMPLETE, NEED INFO ABOUT IS HE BLOCKED OR NOT
isIllegalSecondPhaseMove : Int -> String -> BoardPosition -> Bool
isIllegalSecondPhaseMove n s bp = 
                            let sc = s |> S.toList |> head
                                em = theEmptySpot bp

                            in
                             if | (bp !! (n-1)) /= sc && not (isBlocked bp sc) -> True -- for the moment
                                | not (isLegalMove n em) -> True
                                | otherwise -> False

{-==============================
HERE IS THE COMPUTER MOVE CODE
==============================-}

playTheComputerMove : ActiveBoard -> ActiveBoard
playTheComputerMove bpv =
                let bp = bpv.pieces
                    possmvs = possibleMoves 'C' bp
                    bvs = map (boardize) (chooseBoardPower bp)
                    orderedMoves = map (\p -> getScore bvs p) possmvs |> sortBy .score
                    
                in getBestMove bpv orderedMoves


-- getBestMove bp omoves = head omoves -- for the moment
getBestMove : ActiveBoard -> [BoardValue] -> ActiveBoard
getBestMove bpv omoves = 
               let bestChoice = head omoves
                   -- s = fst mp
                   -- desc = getDescription s omoves amoves
                   -- sdesc = "<" ++ s ++ ">: "
                   amoves = reject (\m -> m.score > bestChoice.score) omoves
                   topamove = head amoves
                in
                 if | length omoves == 0 -> {bpv | value <-0.5,nextPlayer <- "H"}
                    | length amoves == 1 -> {bpv | pieces <- bestChoice.bpoz,value <- bestChoice.score,nextPlayer <- "H"}
                    | otherwise -> {bpv | pieces <-topamove.bpoz,value <- topamove.score,nextPlayer <- "H"} -- could randomise this
         


possibleMoves : Char -> BoardPosition -> [BoardPosition]
possibleMoves c bp =
     if | isFirstPhase bp -> pepperTheDots c bp
        | otherwise -> moveThePieces c bp


pepperTheDots : Char -> BoardPosition -> [BoardPosition]
pepperTheDots c bp = map (\p -> ynsertIfBlank p c bp) pozzies |> reject (\p->p==bp)  


moveThePieces : Char -> BoardPosition -> [BoardPosition]
moveThePieces c bp = 
                 let emptyspot = theEmptySpot bp
                     moves = map (\p -> moveIfMe c p emptyspot bp) pozzies |> reject (\p -> p==bp)
                 in 
                     if length moves > 0 then moves else [bp]


theEmptySpot : BoardPosition -> Int
theEmptySpot bp = 1 + (findFirst "0" bp)


moveIfMe : Char -> Int -> Int -> BoardPosition -> BoardPosition
moveIfMe s p emptyspot bp = 
            let st = S.cons s ""
            in
             if (bp !! (p-1)) == s && isLegalMove p emptyspot then moveFrom st p emptyspot bp else bp
     -- where scode = if s == "H" then '1' else '2'


isLegalMove : Int -> Int -> Bool
isLegalMove fr tw = 
               let nbs = neighbours tw
               in 
                   any (\n -> n==fr) nbs


-- to be consistent this needs s to be a Char -- how about S.left (n-1) bp ++ (cons s S.dropLeft n bp)
ynsert : Int -> Char -> BoardPosition -> BoardPosition
ynsert n s bp = 
          let st = S.cons s ""
          in S.left (n-1) bp ++ st ++ S.dropLeft n bp
         
--
ynsertIfBlank : Int -> Char -> BoardPosition -> BoardPosition
ynsertIfBlank n s bp = if bp !! (n-1) == '0' then ynsert n s bp else bp


chooseBoardPower : BoardPosition -> [(String, Float,String)]
-- in here I could reflect, opposite and boardize
chooseBoardPower bp =     
                    if  | emptySpots bp == 11 -> L.oneplays 
                        | emptySpots bp == 10 -> L.twoplays |> addReflectAndReverseBoard
                        | emptySpots bp == 9 -> L.threeplays |> addReflectedBoard
                        | emptySpots bp == 8 -> L.fourplays  |> addReflectAndReverseBoard
                        | emptySpots bp == 7 -> L.fiveplays |> addReflectedBoard
                        | emptySpots bp == 6 -> L.sixplays |> addReflectAndReverseBoard
                        | emptySpots bp == 5 -> L.sevenplays|> addReflectedBoard
                        | emptySpots bp == 4 -> L.eightplays |> addReflectAndReverseBoard
                        | emptySpots bp == 3 -> L.nineplays|> addReflectedBoard
                        | otherwise -> L.tenPlays |> addReflectAndReverseBoard


addReflectAndReverseBoard : [(String,Float,String)] -> [(String, Float,String)]
addReflectAndReverseBoard bp = bp |> addReflectedBoard |> addReversedBoard


addReflectedBoard : [(String,Float,String)] -> [(String, Float,String)]
addReflectedBoard sfs = sfs ++ map (reflectBoard) sfs

reflectBoard : (String,Float,String) -> (String, Float,String) 
reflectBoard b = (reflectTheBoard (alpha b),beta b,gamma b)


reflectTheBoard : BoardPosition -> BoardPosition
reflectTheBoard bp = 
         let newtop = S.left 3 bp |> S.reverse
             newbot = S.right 3 bp |> S.reverse
             newmid = S.right 8 bp |> S.left 5 |> S.reverse
         in newtop ++ newmid ++ newbot


addReversedBoard : [(String,Float,String)] -> [(String, Float,String)]
addReversedBoard sfs = sfs ++ oppositePlays sfs


oppositeBoard : BoardPosition -> BoardPosition
oppositeBoard bp = bp |> S.toList |> map (newChar) |> S.fromList


oppositePlays : [(String,Float,String)] -> [(String,Float,String)]
oppositePlays sfs = map (oppositePlay) sfs


oppositePlay : (String,Float,String) -> (String,Float,String) 
oppositePlay (s,f,d) = (oppositeBoard s, 1.0 - f,replaceString d)


replaceString : String -> String
replaceString s = s -- |> S.map " H " " HM " |> S.replace " A " " H " |> S.map " HM " " A "

boardizeAll : [(String,Float,String)] -> [BoardValue]
boardizeAll sfs = map (boardize) sfs

boardize : (String,Float,String) -> BoardValue
boardize (bpoz, v, d) = BoardValue bpoz v ("From Boards: " ++ d)

pozzies : [Int]
pozzies = [1 .. 11]

-- THE GETSCORE ROUTINE and its sub-functions
getScore : BoardPower -> BoardPosition -> BoardValue
getScore bvs bp =
      let bps = map (\v -> v.bpoz) bvs
          bv = filter (\b -> b.bpoz == bp) bvs
          e1 = emptyTwoLine bp 'H' |> length
          e2 = emptyTwoLine bp 'C' |> length
          e3 = e1 + e2
          mp2 = possibleMoves 'H' bp
        
      in
       if | isHomeWin bp -> {bpoz = bp,score = 1.0, description= "Home Win"}
          | isAwayWin bp -> {bpoz = bp, score = 0.0, description = "Away Win"}    
          -- | any (\p -> isAwayWin p) mp2 -> {bpoz = bp, score = 0.01, description = "Future Away Win"}
          | any (\p -> isHomeWin p) mp2 -> {bpoz = bp, score = 0.995 , description = "Future Home Win"}
          | length bv > 0 -> head bv -- we have a match in the Boards, take it from there
          | isFirstPhase bp && isHomeFulcrum bp -> {bpoz = bp, score = 0.98, description = "Home Fulcrum"}
          | isFirstPhase bp && isAwayFulcrum bp -> {bpoz = bp, score = 0.02, description = "Away Fulcrum"}    
          -- | isFirstPhase bp && any (\p -> isAwayFulcrum p) mp2 = {bpoz = bp 0.03 "Future Away Fulcrum"
          | isFirstPhase bp && any (\p -> isHomeFulcrum p) mp2 -> {bpoz = bp, score = 0.97, description = "Future Home Fulcrum"}      
          | isOpenTriangle bp 'H' -> {bpoz = bp, score = 0.93, description = "Open Home Triangle"}
          | isOpenTriangle bp 'C' -> {bpoz = bp, score = 0.07, description = "Open Away Triangle"}
          | isBlocked bp 'H' -> {bpoz = bp, score = 0.08, description = "Home piece blocked"}
          | isBlocked bp 'C' -> {bpoz = bp, score = 0.92, description = "Away piece blocked"}
          | e1 > 2 -> {bpoz = bp, score = 0.91, description = "empty Home Twos"}
          | e2 > 2 -> {bpoz = bp, score = 0.09, description = "empty Away Twos"}
          | e3 > 0 -> {bpoz = bp, score = (toFloat(20+20*e1) / (toFloat(20+20*e2) + toFloat(20+20*e1))), description = "Empty Two Lines"}
          | length bv == 0 -> {bpoz = bp, score = 0.9, description =  "Random"}
          | otherwise -> head bv


emptyTwoLine : BoardPosition -> Char -> [Lyne]
emptyTwoLine bp c = filter (\l -> blankTwo bp l c) lynes


blankTwo : BoardPosition -> Lyne -> Char -> Bool
blankTwo bp l c =
            let p1 = bp !! ((alpha l) - 1)
                p2 = bp !! ((beta l) - 1)
                p3 = bp !! ((gamma l) - 1)
            in 
             if | p1 == c && p2==c && p3=='0' -> True
                | p1 == c && p2=='0' && p3==c -> True
                | p1 == '0' && p2==c && p3==c -> True
                | otherwise -> False


-- a Fulcrum = one full line and 2+ emptyTwos
isHomeFulcrum : BoardPosition -> Bool
isHomeFulcrum bp = isFulcrum bp 'H'
isAwayFulcrum bp = isFulcrum bp 'C'


isFulcrum : BoardPosition -> Char -> Bool
isFulcrum bp c = 
             let fullLines = containsFullLines bp c |> length
                 emptyTwos = emptyTwoLine bp c |> length
             in fullLines == 1 && emptyTwos > 1


isOpenTriangle : BoardPosition -> Char -> Bool
isOpenTriangle bp c = 
                  let howManyOpenTriangles = filter(\t -> canFindOpenTriangle t bp c) openTriangles |> length
                  in howManyOpenTriangles > 0

canFindOpenTriangle : (Lyne,Lyne) -> BoardPosition -> Char -> Bool
canFindOpenTriangle t bp c = 
                    let tr = fst t -- the triangle
                        bl = snd t -- tho blacking points
                        p1 = bp !! ((alpha tr) - 1)
                        p2 = bp !! ((beta tr) - 1)
                        p3 = bp !! ((gamma tr) - 1)
                        b1 = bp !! ((alpha bl) - 1)
                        b2 = bp !! ((beta bl) - 1)
                        b3 = bp !! ((gamma bl) - 1)
                    in
                        all (\p -> p==c) [p1,p2,p3] && all (\b -> b=='0') [b1,b2,b3]



isBlocked : BoardPosition -> Char -> Bool
isBlocked bp c =
       if | bp !! 0 == c && itIsBlocked bp 1 c -> True
          | bp !! 2 == c && itIsBlocked bp 3 c -> True
          | bp !! 9 == c && itIsBlocked bp 10 c -> True
          | otherwise -> False


itIsBlocked : BoardPosition -> Int -> Char -> Bool
itIsBlocked bp n c = 
    let naybos = neighbours n
        fofs = map (\n -> loveThyNeighbour bp c n) naybos
    in occurrences "Neutral" fofs < 2 && occurrences "Friend" fofs == 0


occurrences : String -> [String] -> Int
occurrences b bb = bb |> filter(\i -> i==b) |> length


loveThyNeighbour : BoardPosition -> Char -> Int -> String
loveThyNeighbour bp c n =
          let fof =  bp !! (n-1)
              oppo = newChar c
          in 
          case fof of
             c -> "Friend"
             oppo -> "Enemy"
             _ -> "Neutral"

--- some helper functions here -----------
(!!) : String -> Int -> Char
xs !! n  = xs |> S.toList |> drop n |> head
---------------
reject : (a -> Bool) -> [a] -> [a]
reject fn ll = filter (not << fn) ll
-----------------
alpha (a,_,_) = a
beta (_,b,_) = b
gamma (_,_,c) = c


findFirst : String -> String -> Int
findFirst s ss = 
      if | S.contains s ss -> S.indices s ss |> head
         | otherwise -> 98

findLast : String -> String -> Int
findLast s ss = 
            if | S.contains s ss -> S.indices s ss |> last
               | otherwise -> 98

--- some definitions ------------
lynes : [Lyne]
lynes = [(2,3,4)
        ,(1,2,8)
        ,(1,6,11)
        ,(1,5,10)
        ,(1,4,9)
        ,(3,8,11)
        ,(3,7,10)
        ,(3,6,9)
        ,(2,5,9)
        ,(2,7,11)
        ,(4,6,7)
        ,(4,5,11)
        ,(5,6,8)
        ,(7,8,9)
        ,(9,10,11)
        ]


openTriangles : [(Lyne,Lyne)]
-- note that enither of these are actual lines, 
-- The first is the apices of the triangle
-- the secord the blocking points for the associated triangle
openTriangles = [((1,9,11),(4,6,10))
                ,((1,8,9),(2,4,7))
                ,((2,9,11),(5,7,10))
                ,((3,9,11),(6,8,10))
                ,((3,4,11),(2,5,8))
                ]  
----------------------------------------------
neighbours : Int -> [Int]
neighbours n = case n of
           1 -> [2,4,5,6]
           2 -> [1,3,4,5,7,8]
           3 -> [2,6,7,8]
           4 -> [1,2,5,6,9]
           5 -> [1,2,4,6,9,10,11]
           6 -> [1,3,4,5,7,8,9,11]
           7 -> [2,3,6,8,9,10,11]
           8 -> [2,3,6,7,11]
           9 -> [4,5,6,7,10]
           10 -> [5,7,9,11]
           11 -> [5,6,7,8,10]
