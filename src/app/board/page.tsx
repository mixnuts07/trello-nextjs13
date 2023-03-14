import React from "react";
import BoardComp from "components/board/BoardComp";
import CreateNewBoardComp from "components/board/CreateNewBoardComp";

function Board() {
  return (
    <div>
      <CreateNewBoardComp />
      <BoardComp />
    </div>
  );
}

export default Board;
