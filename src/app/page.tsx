"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Board from "./board/page";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
const inter = Inter({ subsets: ["latin"] });

// function CreateNewBoard() {
//   if(localStorage.getItem('boardsCollection') === null) {
//     localStorage.setItem('boardsCollection', {"boardsCollection":[]})
//   }
// }

function CreateBoard() {
  const objs = {
    1: "1", // uuid??
    2: "sample",
  }; // {'boardsCollection':[{id:1, title:test}, {},{}]}
  const objJson = JSON.stringify(objs);
  localStorage.setItem("boardsCollection", objJson);
  const item = localStorage.getItem("boardsCollection");
  console.log(item);
  return (
    <ul>
      {Object.keys(objs).map((key) => {
        return <li key={key}>{objs[key]}</li>;
      })}
    </ul>
  );
}

export default function Home() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      {/* <Board /> */}
      <h1>Winny</h1>
      {/* <Button onClick={()=>CreateNewBoard()}>Create a New Board</Button> */}
      <form onSubmit={handleSubmit(CreateBoard)}>
        <h5>Create Your Board</h5>
        <input defaultValue="test" {...register("example")} />
        {/* <Button onClick={() => CreateBoard()}>Create Board</Button> */}
        <input type="submit" />
      </form>
    </div>
  );
}
