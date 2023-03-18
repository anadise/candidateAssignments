import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { useSearchParams } from "react-router-dom";

const Index: NextPage = () => {
    const [clients, setClients] = useState([])
    const [activeClient, setActiveClient] = useState("")
    const router = useRouter()

    useEffect(() => {
        request("get", "/clients").then((res) => {
            if (res.status == 200) {
                res.body.clients.map((e) => {
                    e.fullName = e.firstName + " " + e.lastName

                    return e
                })

                setClients(res.body.clients)
            }
        })
    }, [])

    useEffect(() => {
        const { highlight } = router.query

        setActiveClient(highlight ?? "")
    }, [router.query])

    function onRegister() {

    }

    return (
        <>
            <ClientTable activeClient={activeClient} clients={clients} onRegister={onRegister} />
        </>
    );
};

export default Index;
