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

const one=1;
const two=2;
const three=3;

checkVertical(x,y){
  //moving the y
  const tile1=this.board[x][one];

  if(tile1===this.board[x][two]
    && tile1===this.board[x][three]
    && tile1!==0)  return tile1;
    else return 0;

}

 checkHorizontal(x,y){
    //moving the x
      const tile1=this.board[one][y];
    if(tile1===this.board[two][y]
      && tile1===this.board[three][y]
      && tile1!==0)  return tile1;
      else return 0;
}

 checkDiagnolLeft(x,y){
   //moving x,y diagno left
   if(x!==y) return 0;

  const tile1=this.board[one][one];
 if(tile1===this.board[two][two]
   && tile1===this.board[three][three]
   && tile1!==0)  return tile1;
   else return 0;

}

 checkDiagonalRight(x,y){

  const tile1=this.board[three][one];
 if(tile1===this.board[two][two]
   && tile1===this.board[one][three]
   && tile1!==0)  return tile1;
   else return 0;
}

checkWinner() {
  // 0 when still can go , 1 is winner
  //                       2 is winner
   //                      3  is tie

}

}
