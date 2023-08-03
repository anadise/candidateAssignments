export interface IClient {
    id: string;
    avatar: string;
    email: string;
    fullName: string;
    supportTier: string;
    hourlyRate: number;
}

export interface IClientRaw {
    id: string;
    avatar: string;
    email: string;
    firstName: string;
    lastName: string;
    sex: string;
    supportTier: string;
    hourlyRate: number;
}
