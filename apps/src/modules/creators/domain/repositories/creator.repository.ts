export interface CreatorRepository {
  findById(id: string): Promise<unknown | null>;
  findByUserId(userId: string): Promise<unknown | null>;
  search(filters: Record<string, unknown>): Promise<unknown[]>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  updateByUserId(userId: string, payload: Record<string, unknown>): Promise<unknown>;
}
