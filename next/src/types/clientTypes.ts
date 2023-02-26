export interface ClientType {
  id: string;
  avatar: string;
  email: string;
  fullName: string;
  supportTier: "standard" | "gold" | "platinum";
  hourlyRate: number;
  isHighlighted?: boolean;
  [key: string]: unknown;
}
