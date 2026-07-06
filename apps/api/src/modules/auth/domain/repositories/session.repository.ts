export interface SessionRepository {
  create(payload: any): Promise<unknown>;
  findById(id: string): Promise<unknown | null>;
  revoke(id: string): Promise<void>;
}
