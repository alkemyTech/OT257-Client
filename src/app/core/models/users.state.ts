import { User } from "./user.model";

export interface UsersState {
    deletedUser: any;
    loading: boolean;
    users: User[];
}

