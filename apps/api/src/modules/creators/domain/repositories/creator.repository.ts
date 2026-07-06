export interface CreatorRepository {
  findById(id: string): Promise<unknown | null>;
  findByUserId(userId: string): Promise<unknown | null>;
  search(filters: any): Promise<unknown[]>;
  create(payload: any): Promise<unknown>;
  updateByUserId(userId: string, payload: any): Promise<unknown>;
}
