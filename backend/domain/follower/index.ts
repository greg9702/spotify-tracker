import { repository } from "./repository";
import { service } from "./service";

console.log("FOLLOWER INDEX");
const followerRepository = new repository("tracker");
const followerService = new service(followerRepository);

export { followerService };
