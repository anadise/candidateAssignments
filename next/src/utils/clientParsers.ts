export type ClientApiResponse = {
  id: string;
  avatar: string;
  birthday: string | Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}

export type Client = {
  id: string;
  avatar: string;
  email: string;
  fullName: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}

export const parseClientFromApi = (client: ClientApiResponse): Client => {
  const { id, avatar, supportTier, hourlyRate, firstName, lastName, email } = client;
  const fullName = `${firstName} ${lastName}`;
  return { id, fullName, avatar, supportTier, hourlyRate, email };
}