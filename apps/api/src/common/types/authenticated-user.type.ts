export interface AuthenticatedUser {
  id: string;
  email: string;
  permissions: string[];
  tenantId?: string | null;
}
