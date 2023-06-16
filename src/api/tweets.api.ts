import { IUserCard } from '@/types/IUserCard';

const BASE_URL = 'https://6489896e5fa58521caafc81d.mockapi.io/api';

export const getTweetsApi = async (): Promise<IUserCard[]> => {
  const result = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });

  if (!result.ok) throw new Error('Bad request.');

  return await result.json();
};
