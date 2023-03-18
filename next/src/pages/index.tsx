import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import Modal from '../examples/modals';

const Index: NextPage = () => {
    const [clients, setClients] = useState([])
    const [show, setShow] = useState(false)
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
        setShow(true)
    }

    function onSubmit(data) {
        console.log(data.entries())

        setShow(false)
        request("post", "/clients", data).then((res) => {
            if (res.status == 200) {
                alert("User is registered successfully!")
            } else {
                alert("Registeration failed!")
            }
        })
    }

    return (
        <>
            <ClientTable activeClient={activeClient} clients={clients} onRegister={onRegister} />
            {show && <Modal setShow={setShow} onSubmit={onSubmit} />}
        </>
    );
};

export default Index;
