export type IClientType = {
    id: string;
    avatar: string;
    email: any;
    firstName: string;
    lastName: string;
    supportTier: 'standard' | 'gold' | 'platinum';
    hourlyRate: number;
}

export type IShowClientType = {
    id: string;
    avatar: string;
    email: string;
    fullName: string;
    supportTier: 'standard' | 'gold' | 'platinum';
    hourlyRate: number;
}