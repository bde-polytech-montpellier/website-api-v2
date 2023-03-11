import { Role } from '@prisma/client';

export interface LoginValidatedDto {
  id: string;
  name: string;
  email: string;
  role: Role;
  access_token: string;
}
