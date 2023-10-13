export class Playlist {
  private _id: string;
  private _version: string; // timestamp
  private _serializedContent: string;

  constructor(id: string, version: string, serializedContent: string) {
    this._id = id;
    this._version = version;
    this._serializedContent = serializedContent;
  }

  updateContent(serializedContent: string) {
    this._version = Date.now().toString();
    this._serializedContent = serializedContent;
  }

  get id(): string {
    return this._id;
  }
}
