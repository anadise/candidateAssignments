import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IClient } from '../types/client';

const Index: NextPage = () => {
    const [clients, setClients] = useState<IClient[]>([])
    
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const data = await request("GET", "/clients")
                setClients(data.body)
            } catch (error) {
                console.log(error)
            }
        }

        fetchClients()
    }, [])

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister} />
        </>
    );
};

export default Index;
