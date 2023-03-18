function CreateBoard() {
  const obj = {
    id: 1,
    name: "test",
  };
  const objJson = JSON.stringify(obj);
  const item = localStorage.setItem("board", objJson);
  return <div>CreateBoard</div>;
}

export default CreateBoard;
