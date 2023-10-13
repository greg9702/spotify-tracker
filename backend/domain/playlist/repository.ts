import { Playlist } from "./playlist";

export interface PlaylistRepository {
  getById(id: string): Promise<Playlist>;
  save(playlist: Playlist): Promise<void>;
}

export class inMemoryRepo {
  private _data: Map<string, Playlist>;

  constructor() {
    this._data = new Map<string, Playlist>();
  }

  async getById(id: string): Promise<Playlist> {
    return this._data.get(id);
  }

  save(playlist: Playlist): Promise<void> {
    this._data.set(playlist.id, playlist);
    return null;
  }
}
