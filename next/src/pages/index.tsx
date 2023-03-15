import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import clients from './api/clients';
import { useRouter } from 'next/router';
import RegisterModal from '../components/modals/RegisterModal';

// Defining types for clients
type clients_type = {
  id: string;
  avatar: string;
  email: string;
  fullName: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}[];

const Index: NextPage = () => {
  // Array of clients and state setter
  const [clients, setClients] = useState<clients_type>([]);
  // Registration modal state variable (to open and close modal)
  const [registerModal, setRegisterModal] = useState(false);

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
      {registerModal && (
        <RegisterModal open={registerModal} setOpen={setRegisterModal} />
      )}
      {clients && (
        <ClientTable
          clients={clients}
          registerModal={registerModal}
          setRegisterModal={setRegisterModal}
          highlight={highlight as string}
        />
      )}
    </>
  );
};

export default Index;
