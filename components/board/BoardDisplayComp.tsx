"use client";
import React from "react";
import Board from "./BoardComp";
import CreateNewBoard from "./CreateNewBoardComp";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function BoardDisplayComp() {
  return (
    <div>
      <HomeIcon />
      <Grid container spacing={2} className="">
        <Grid xs={4}>
          <CreateNewBoard />
        </Grid>
        <Grid xs={4}>
          <Board />
        </Grid>
        <Grid xs={4}>
          <Board />
        </Grid>
      </Grid>
    </div>
  );
}
