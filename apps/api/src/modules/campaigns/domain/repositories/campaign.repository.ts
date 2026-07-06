export interface CampaignRepository {
  findById(id: string): Promise<unknown | null>;
  list(filters: any): Promise<unknown[]>;
  create(payload: any): Promise<unknown>;
  update(id: string, payload: any): Promise<unknown>;
}
