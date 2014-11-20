module Triango where

import Color
import Mouse
import Random (float,range)
import TriangoModule as M 
import TriangoView (..)
type Position = {number : Int, x : Int, y : Int}

clickPositionsSignal : Signal (Int,Int)
clickPositionsSignal = sampleOn Mouse.clicks Mouse.position
click2 = sampleOn (delay 50 Mouse.clicks) Mouse.position


-- isLocationSignal : Signal (Int,Int)
-- isLocationSignal = keepIf isABoardPosition (250,350) (merge clickPositionsSignal click2)


whichLocationSignal : Signal (Int,Int,Int)
whichLocationSignal = whichBoardPosition <~ (merge clickPositionsSignal click2) -- isLocationSignal
          

isABoardPosition : (Int,Int) -> Bool
isABoardPosition (x,y) = any (\p -> closeEnough p.x p.y x y) positions


whichBoardPosition : (Int,Int) -> (Int,Int,Int)
whichBoardPosition (x,y) = 
                let pz = filter (\p -> closeEnough p.x p.y x y) positions |> chooseLocation
                in (pz.number,x,y)


chooseLocation : [Position] -> Position
chooseLocation pp =
                  case pp of
                      [] -> {number =0, x = 0, y = 0}
                      _ -> head pp


closeEnough : Int -> Int -> Int -> Int -> Bool
closeEnough px py x y = 
               let x2 = x - 250
                   y2 = 350 - y
               in ((x2-px)^2)+((y2-py)^2) < 225


viewBoard = foldp adjustBoard M.blankboard whichLocationSignal


-- adjustBoard : Signal Int -> ActiveBoard -> Signal ActiveBoard
adjustBoard sig bpv = 
               let pz = alpha sig
                   
               in 
                  if | bpv.nextPlayer == "H" -> M.playHumanMove pz bpv
                     | otherwise -> M.playComputerMove bpv

            
view brd = collage 500 700 [ background, board, (getCircles brd.pieces)] -- , asText (brd.value,brd.nextPlayer) |> toForm -- for Testing purposes only


main : Signal Element
main = view <~ viewBoard


--------
alpha (a,_,_) = a
beta (_,b,_) = b
gamma (_,_,c) = c