export interface IClient {
  id: string;
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: "female" | "male";
  birthday: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}

export interface ITransFormedClient {
  id: string;
  avatar: string;
  email: string;
  fullName: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}