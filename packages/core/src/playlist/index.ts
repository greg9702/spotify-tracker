export * as Playlist from "./";

export type Playlist = {
  Id: string;
  SpotifyId: string;
  Version: string;
  Content: string;
  ContentHash: string;
  CreatedAt: Date;
};
