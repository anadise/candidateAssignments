import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import clients from './api/clients';
import { useRouter } from 'next/router';

type clients_type = {
  id: string;
  avatar: string;
  email: string;
  fullName: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}[];

const Index: NextPage = () => {
  function onRegister(): void {
    throw new Error('Function not implemented.');
  }
  const [clients, setClients] = useState<clients_type>([]);

  // ------------------ Fetching query from URL ------------------
  const router = useRouter();
  let { highlight } = router.query;
  // ------------------ Fetching query from URL ------------------

  // ------------------ Fetching data from API ------------------
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/clients').then((res) => res.json());
      setClients(result.clients);
    };

    fetchData();
  }, []);
  // ------------------ Fetching data from API ------------------

  return (
    <>
      {clients && (
        <ClientTable
          clients={clients}
          onRegister={onRegister}
          highlight={highlight as string}
        />
      )}
    </>
  );
};

export default Index;
