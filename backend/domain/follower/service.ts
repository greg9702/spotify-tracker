import { followerService } from ".";
import { Playlist } from "../playlist/playlist";
import { User } from "../user/user";
import { Follower } from "./follower";
import { FollowerRepository } from "./repository";

export interface FollowerService {
  followPlaylist(user: User, playlist: Playlist): Promise<void>;
  unfollowPlaylist(user: User, playlist: Playlist): Promise<void>;
}

export class service implements FollowerService {
  private _followerRepository: FollowerRepository;

  constructor(followerRepository: FollowerRepository) {
    this._followerRepository = followerRepository;
  }

  async followPlaylist(user: User, playlist: Playlist): Promise<void> {
    const todayTs = Date.now().toString();
    const follower = new Follower(todayTs, playlist.id, user.email);

    await this._followerRepository.save(follower);

    return null;
  }

  async unfollowPlaylist(user: User, playlist: Playlist): Promise<void> {
    await this._followerRepository.remove(user.email, playlist.id);

    return null;
  }
}
