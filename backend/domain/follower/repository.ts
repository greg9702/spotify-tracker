import { Follower } from "./follower";

export interface FollowerRepository {
  save(follower: Follower): Promise<void>;
  remove(userEmail: string, playlistId: string): Promise<void>;
}

export class repository {
  private _tableName: string;

  constructor(tableName: string) {
    this._tableName = tableName;
  }

  save(follower: Follower): Promise<void> {
    return null;
  }

  remove(userEmail: string, playlistId: string): Promise<void> {
    return null;
  }
}
