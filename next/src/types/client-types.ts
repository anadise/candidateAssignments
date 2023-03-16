export type IClients = {
  id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
};

export type ClientTableHeaderRow = {
  title: string;
  classes?: string;
};
