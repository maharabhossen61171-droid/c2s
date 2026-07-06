export interface ContractRepository {
  findById(id: string): Promise<unknown | null>;
  create(payload: any): Promise<unknown>;
  listMilestones(contractId: string): Promise<unknown[]>;
}
