export interface Client {
  search(query: string): Promise<void>;
}
