export * as Follow from "./";

export type Follower = {
  Id: string;
  Username: string;
  CreatedAt: Date;
};

export type FollowingItem = {
  Id: string;
  PlaylistId: string;
  PlaylistName: string;
  CreatedAt: string;
};
