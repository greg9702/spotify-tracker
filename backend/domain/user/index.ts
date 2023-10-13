import { inMemoryRepo } from "./repository";
import { Table } from "sst/node/table";

console.log("USER INDEX");
console.log("NAME: ", Table.Notes.tableName);
const userRepository = new inMemoryRepo();

export { userRepository };
