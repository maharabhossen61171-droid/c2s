export interface UserRepository {
  findById(id: string): Promise<unknown | null>;
  findByEmail(email: string): Promise<unknown | null>;
  create(payload: Record<string, unknown>): Promise<unknown>;
}
