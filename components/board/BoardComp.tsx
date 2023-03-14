"use client";
import { Button, Grid } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import boards from "const/boards";

export default function BoardComp() {
  const router = useRouter();
  return (
    <Grid container spacing={2}>
      {boards.map((board) => {
        return (
          // TODO keyのコンパイルエラー解消
          <Grid item xs={8} key={board.id}>
            <Button
              variant="contained"
              onClick={() => router.push(`/list/${board.id}`)}
            >
              {board.name}
            </Button>
          </Grid>
        );
      })}
    </Grid>
    // <Button variant="contained" onClick={() => router.push("/it")}>
    //   IT
    // </Button>
  );
}
