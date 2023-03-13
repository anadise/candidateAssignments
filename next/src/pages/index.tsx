import type { NextPage } from 'next';
import { useState, useEffect, useMemo } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IClient } from '../types/client';

const Index: NextPage = () => {
    const [clients, setClients] = useState<IClient[]>([])
    const [highlightId, setHighlightId] = useState<string | null>(null)

    const reformatedClients = useMemo(() => {
        return clients.map(({ firstName, lastName, ...rest }) => ({
            ...rest,
            fullName: `${firstName} ${lastName}`
        }))
    }, [clients])
    
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const data = await request("GET", "/clients")
                setClients(data.body.clients)
            } catch (error) {
                console.log(error)
            }
        }

        fetchClients()
    }, [])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search)
        const id = urlSearchParams.get('highlight')
        console.log(id)
        setHighlightId(id)
      }, [])

    const onRegister = () => {}

    return (
        <>
            <ClientTable clients={reformatedClients} onRegister={onRegister} />
        </>
    );
};

export default Index;
