// game logic
class game {
  constructor(){
    //should build the board
    // we hard coded it, refactor later
    this.board=[[9,9,9,9,9]
                [9,0,0,0,9],
                [9,0,0,0,9],
                [9,0,0,0,9]
                [9,9,9,9,9]]; /// 999 is the border
                              /// 111 for X
                              /// 222 for O


  }

//// logic ///
changeValue (x,y,who){
  // who can be 1 or 2
  this.board[x][y]=who;
}

checkFull (counter){
  if(counter>8) return "full";
  return "notFull";
}
///////// Check functions ///////////////

// shouldCheck(counter){
//   if (counter>4) {
//     return true ;
//   }                   /// later
//   return false ;
// }

checkVertical(x,y){
  //moving the y
  if(this.board[x][y]==this.board[x][y+1]
    && this.board[x][y-1]==this.board[x][y] && this.board[x][y]!== 0)
    return this.board[x][y] ; /// return the number of the winner
    return 0;
}

 checkHorizontal(x,y){
    //moving the x
    if(this.board[x][y]==this.board[x+1][y]
      && this.board[x-1][y]==this.board[x][y] && this.board[x][y]!== 0)
      return this.board[x][y] ; /// return the number of the winner
      return 0;
}

 checkDiagnolLeft(x,y){
   //moving x,y diagno left
   if(this.board[x][y]==this.board[x-1][y+1]
     && this.board[x+1][y-1]==this.board[x][y] && this.board[x][y]!== 0)
     return this.board[x][y] ; /// return the number of the winner
     return 0;

}

 checkDiagonalRight(x,y){
   if(this.board[x][y]==this.board[x+1][y+1]
     && this.board[x-1][y-1]==this.board[x][y] && this.board[x][y]!== 0)
     return this.board[x][y] ; /// return the number of the winner
     return 0;
}

checkWinner() {
  // 0 when still can go , 1 is winner
  //                       2 is winner
   //                      3  is tie

}

}
