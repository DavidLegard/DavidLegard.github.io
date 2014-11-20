module TriangoView where

import String as S


type Position = {
         number : Int, 
         x : Int, 
         y : Int
     }


thepath = path [ 
              (0,0),
              (200,270),
              (200,0),
              (0,270),
              (100,0),
              (200,270),
              (0,170),
              (200,0),
              (0,0),
              (200,170),
              (0,270),
              (0,0),
              (100,220),
              (200,0),
              (200,170),
              (55,122),
              (0,170),
              (145,122)
          ] --,(300,400),(150,400),(0,400)]
-----------
board = traced defaultLine thepath


redsrc = "/redCircle.gif"
redCircle = image 30 30 redsrc

bluesrc = "/blueCircle.gif"
blueCircle = image 30 30 bluesrc

whitesrc = "/whiteCircle.gif"
whiteCircle = image 30 30 whitesrc

lgsrc = "/lightGreenCircle.gif"
lightGreenCircle = image 30 30 lgsrc

-- blacksrc = "/lightGreenCircle.gif"
blackCircle = image 30 30 lgsrc


showPositions : String -> String
showPositions bp = bp -- |> toList |> map (\p -> buildCircle p)
--------------------
{-getColor : Char -> Color
getColor c = case c of
                 '0' -> white
                 'H' -> blue
                 'C' -> red
                 'W' -> green -- this shows up when somebody has won
                 _ -> black-}
------------------------
beige : Color
beige = rgb 225 205 190


positions : [Position]
positions =  [(1,0,270),(2,100,220),(3,200,270),(4,0,170),(5,55,122),(6,100,135)
             ,(7,145,122),(8,200,170),(9,0,0),(10,100,0),(11,200,0)] |> positionise


positionise : [(Int,Int,Int)] -> [Position]
positionise bps = map (\p -> { number = alpha p, x = beta p, y = gamma p}) bps


getCircles : String -> Form
getCircles bp = bp |> S.toList |> zip positions |> map (circleise) |> group

-- in collage 500 700 (map (\c -> toForm c.ymage |> move (toFloat (c.x - 250), toFloat (350 - c.y))) cc)


circleise : (Position,Char) -> Form
circleise (p,c) =
          {- let col = getColor c
           in filled col (circle 15) |> move (toFloat p.x,toFloat p.y)-}
          let ymage = case c of
             'H' -> blueCircle
             'C' -> redCircle
             '0' -> whiteCircle
             'W' -> lightGreenCircle
             'B' -> blackCircle

          in toForm ymage |> move (toFloat p.x,toFloat p.y)


background = filled beige (rect 240 310) |> move (100,135)


alpha (a,_,_) = a
beta(_,b,_) = b
gamma(_,_,c) = c

-- circles = getCircles "12121212100"
-- group [circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8,circle9,circle10,circle11]

--- allElements = [ background, circles, board ]


--- drawboard = collage 500 700 allElements

-- circles = [circle9]

--- main =  drawboard