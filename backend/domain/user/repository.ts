import { User } from "./user";

export interface UserRepository {
  getByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}

export class inMemoryRepo {
  private _data: Map<string, User>;

  constructor() {
    this._data = new Map<string, User>();
  }

  async getByEmail(email: string): Promise<User> {
    return this._data.get(email);
  }

  async save(user: User): Promise<void> {
    this._data.set(user.email, user);
    console.log("ADDED user", this._data);
    return;
  }
}
