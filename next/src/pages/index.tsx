import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { Client, ClientApiResponse, parseClientFromApi } from '../utils/clientParsers';

const Index: NextPage = () => {
    const [clients, setClients] = useState<Client[]>([]);

    async function onRegister(formData: Record<string, any>) {
        try {
            // I don't treat any data because the API doesn't use it.
            // but for explanation only, here I would treat and maybe make a validation on `formData`.
            // I would guarantee the correct schema of `formData`.
            await request<void>('POST', '/clients', formData)
        } catch (err) {
            // used to send log
            console.log(err);
        }
    }

    useEffect(() => {
      request<{ clients: ClientApiResponse[] }>("GET", "/clients")
        .then((response) => {
          const allClients = response.body?.clients || [];
          const parsedClients = allClients.map(client => parseClientFromApi(client));
          setClients(parsedClients);
        })
        .catch((err) => {
          // used to send log
          console.log(err);
        });
    }, []);

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister} />
        </>
    );
};

export default Index;
