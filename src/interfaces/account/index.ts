import { RecipeInterface } from 'interfaces/recipe';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccountInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  user_id: string;
  tenant_id: string;
  recipe?: RecipeInterface[];
  user?: UserInterface;
  _count?: {
    recipe?: number;
  };
}

export interface AccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  user_id?: string;
  tenant_id?: string;
}
