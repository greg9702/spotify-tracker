import { ApiHandler } from "sst/node/api";
import { SpotifyClient } from "@spotify-tracker/spotify/src";

export const handler = ApiHandler(async (_evt) => {
  const tracks = await SpotifyClient.searchTrack();
  return {
    statusCode: 200,
    body: JSON.stringify({ tracks: tracks }),
  };
});
