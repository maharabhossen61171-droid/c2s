export interface SessionRepository {
  create(payload: Record<string, unknown>): Promise<unknown>;
  findById(id: string): Promise<unknown | null>;
  revoke(id: string): Promise<void>;
}
