export interface ContractRepository {
  findById(id: string): Promise<unknown | null>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  listMilestones(contractId: string): Promise<unknown[]>;
}
