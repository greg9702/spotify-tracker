import axios from "axios";
import { stringify } from "querystring";

export * as SpotifyClient from "./";

console.log("INDEX EXECUTED");

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
let token = "token";

async function refreshToken() {
  console.log("TOKEN REFRESHING...");
  try {
    const resp = await axios.post(
      "https://accounts.spotify.com/api/token",
      stringify({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
        },
      }
    );
    token = resp.data.access_token;
    console.log("TOKEN REFRESHED", token);
  } catch (err) {
    console.log(err);
  }
}

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401 && error.config && !error.config.__isRetryRequest) {
      await refreshToken();
      error.config.headers["Authorization"] = "Bearer " + token;
      error.config.__isRetryRequest = true;
      return axios(error.config);
    }
    if (status === 401 && error.config.__isRetryRequest) {
      throw "Max retries for token reached";
    }
    return error.response;
  }
);

export async function searchTrack(): Promise<any> {
  console.log("SEARCH INVOKED");
  try {
    const resp = await axios.get(
      "https://api.spotify.com/v1/search?query=track%3AWilk%20Chodnikowy&type=track",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    return resp.data.tracks.items;
  } catch (err: any) {
    console.log(err.message);
  }
}
