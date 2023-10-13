import { inMemoryRepo } from "./repository";

console.log("PLAYLIST INDEX");
const playlistRepository = new inMemoryRepo();

export { playlistRepository };
