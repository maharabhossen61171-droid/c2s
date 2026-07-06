export interface ProposalRepository {
  findById(id: string): Promise<unknown | null>;
  create(payload: any): Promise<unknown>;
  update(id: string, payload: any): Promise<unknown>;
}
