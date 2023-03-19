import type { NextPage } from 'next';
import { useState, useEffect, useMemo } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IClient } from '../types/client';

const Index: NextPage = () => {
    const [clients, setClients] = useState<IClient[]>([]) // Original Client data from server response
    /**
     * higlightId: is from URL query parameter "highlight" for prehighlighted the row of clients table
     */
    const [highlightId, setHighlightId] = useState<string | null>(null)

    /**
     * Format original data: IClient[] -> reformatedClients: ITransformedClient[]
     */
    const reformatedClients = useMemo(() => {
        return clients.map(({ firstName, lastName, ...rest }) => ({
            ...rest,
            fullName: `${firstName} ${lastName}`
        }))
    }, [clients])

    /**
     * Add a new client once click submit button in RegisterClientFormModal
     * @param client any
     */
    const onRegister = (client: any) => {
        const registerClient = async () => {
            try {
                await request("POST", "/clients", { ...client })
            } catch (error) {
                console.log(error)
            }
        }
        registerClient()
    }

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const data = await request("GET", "/clients") // Call an api endpoint to fetch client data1
                setClients(data.body.clients)
            } catch (error) {
                console.log(error)
            }
        }

        fetchClients()
    }, [])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search) // Get url query params
        const id = urlSearchParams.get('highlight') // Get a query param <highlight> from query params
        setHighlightId(id)
      }, [])


    return (
        <>
            <ClientTable clients={reformatedClients} onRegister={onRegister} highlightId={highlightId} />
        </>
    );
};

export default Index;
