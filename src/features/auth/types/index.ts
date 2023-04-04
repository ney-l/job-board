import { Entity } from '@/types';

export type AuthUser = Entity & {
  email: string;
  orgId: string;
};

export type LoginData = {
  email: string;
  password: string;
};
