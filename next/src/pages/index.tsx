import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';

const Index: NextPage = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        axios.get('/api/clients').then((res) => {
            setClients(res.data.clients)
        })
    }, [])

    function onRegister() {

    }

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister} />
        </>
    );
};

export default Index;
