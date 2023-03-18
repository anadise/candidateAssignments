import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';

const Index: NextPage = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        request("get", "/clients").then((res) => {
            if (res.status == 200) {
                console.log(res.body.clients)
                res.body.clients.map((e) => {
                    e.fullName = e.firstName + " " + e.lastName

                    return e
                })

                setClients(res.body.clients)
            }
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
