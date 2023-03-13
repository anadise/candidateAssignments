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