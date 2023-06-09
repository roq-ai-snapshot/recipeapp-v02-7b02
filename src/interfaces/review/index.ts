import { UserInterface } from 'interfaces/user';
import { RecipeInterface } from 'interfaces/recipe';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  user_id: string;
  recipe_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  user?: UserInterface;
  recipe?: RecipeInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  recipe_id?: string;
}
