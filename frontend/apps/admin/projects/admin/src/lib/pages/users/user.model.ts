export interface UserModel {
    firstName: string;
    lastName: string
    email: string;
    userName: string;
    password?: string;
    role?: string;
    groupId: string;
}