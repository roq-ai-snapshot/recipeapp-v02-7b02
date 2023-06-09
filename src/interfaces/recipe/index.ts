import { LikeInterface } from 'interfaces/like';
import { ReviewInterface } from 'interfaces/review';
import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface RecipeInterface {
  id?: string;
  name: string;
  difficulty_level: number;
  description: string;
  image?: string;
  account_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  like?: LikeInterface[];
  review?: ReviewInterface[];
  account?: AccountInterface;
  _count?: {
    like?: number;
    review?: number;
  };
}

export interface RecipeGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  account_id?: string;
}
