import BoardComp from "components/board/BoardComp";
import { number } from "zod";

// zod
type BoardType = {
  id: Number;
  name: String;
};
const boards: BoardType[] = [
  {
    id: 1,
    name: "IT",
  },
  {
    id: 2,
    name: "IT2",
  },
];

export default boards;
