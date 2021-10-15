import { UserState } from './user/type'

export interface RootState {
  user: UserState;
  counter: number
}