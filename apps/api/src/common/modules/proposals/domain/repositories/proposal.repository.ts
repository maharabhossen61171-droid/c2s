export interface ProposalRepository {
  findById(id: string): Promise<unknown | null>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  update(id: string, payload: Record<string, unknown>): Promise<unknown>;
}
