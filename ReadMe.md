## GAME  ##

The board is an irregular rectangle, with 11 board positions connected by lines. Each player has 5 pieces. The first player to make two lines of three pieces wins. Thus the two lines must share one common point.

![Board](/board.gif "Figure 1")

## PLAY ##

**First Phase**

The board is empty at the start of play. Starting with the human player, the players take turn in planting their pieces on the board (Blue pieces for the human player, Red for the computer) by clicking on a vacant (White) position.

Illegal moves (in both phases) will be highlighted as follows: the piece clicked on will briefly turn black in color and the move will be refused.
    
It is possible for the game to be won in the first phase, but if all 10 pieces have been planted and neither side has won, the game moves into the second phase.

A winning position is highlighted by that player's pieces changing color to light green (see figure above)

**Second Phase**

In this phase, players move one of their pieces into the one vacant position, travelling only directly along the lines without jumping any other pieces. (Note: there is no line going vertically down the center of the board, so pieces cannot move between those positions.)
    
This phase begins with the human player, who clicks on the piece they want to move. The computer then responds, and this process continues until one side has won. (See TO-DO).

## STRATEGY ##

The computer plays well, though not flawlessly. There is no AI involved, the computer follows set rules for its responses.
    
In the first phase, it is important to watch out for your opponent's move as well as building your own position. Being too aggressive early on can doom your game as early as the third move.

![Board2](/board2.gif "Figure 2")

In the case of the game above, the human player (Blue) is already doomed. The computer has created an 'open triangle' which is impossible to defend against.
    
The same holds true for second-phase play. The irregular nature of the board makes it quite difficult to see upcoming traps, and it is not uncommon for players to have no idea of how they were beaten.

## TO-DO ##

1. Implement a tied match, after 40 or more moves have been played
2. Pretty up the board
3. Make the pieces slide along the board, not jump from one location to another.
4. As a training aid, alert the human player to a fatal move by changing the pieces briefly to light-blue color and refusing the move.

