// Creating types //
export interface ClientData {
    id: string;
    avatar: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    supportTier: "standard" | "gold" | "platinum";
    hourlyRate: number;
    birthday: string;
    sex: string;
}

export interface RegisterNewClient {
    avatar: string;
    email: string;
    firstName: string;
    lastName: string;
    supportTier: "standard" | "gold" | "platinum";
    hourlyRate: number;
    birthday: string;
    sex: string;
}
