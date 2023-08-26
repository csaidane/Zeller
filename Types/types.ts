export interface User {
    id: string
    name: string
    role: string
}

//This enum would replace the string type if the component library allowed it
export enum UserRole{
    Admin= 'Admin',
    Manager = 'Manager'
}