import { Entity } from '@/types';

export type Job = Entity & {
  orgId: string;
  position: string;
  info: string;
  location: string;
  department: string;
};
