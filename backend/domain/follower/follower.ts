export class Follower {
  private _followingDate: string; // timestamp
  private _playlistId: string;
  private _userEmail: string;

  constructor(followingDate: string, playlistId: string, userEmail: string) {
    this._followingDate = followingDate;
    this._playlistId = playlistId;
    this._userEmail = userEmail;
  }
}
