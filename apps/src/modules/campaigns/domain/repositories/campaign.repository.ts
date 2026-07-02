export interface CampaignRepository {
  findById(id: string): Promise<unknown | null>;
  list(filters: Record<string, unknown>): Promise<unknown[]>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  update(id: string, payload: Record<string, unknown>): Promise<unknown>;
}
