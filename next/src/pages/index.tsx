import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import RegisterModal from '../examples/modals';
import { IClientType, IShowClientType } from '../utils/type';


const Index: NextPage = () => {
    const [clients, setClients] = useState<IShowClientType[] | []>([]);
    const [id, setId] = useState<string | ''>('');
    const [showModal, setShowModal] = useState<boolean | null>(false);

    useEffect(() => {
        request("get", "/clients")
            .then(res => {
                const newClients: IShowClientType[] = [];
                res.body.clients.map((client: IClientType ) => {
                    newClients.push({
                        id: client.id,
                        avatar: client.avatar,
                        email: client.email,
                        fullName: client.firstName + " " + client.lastName,
                        supportTier: client.supportTier,
                        hourlyRate: client.hourlyRate,
                    });
                })
                setClients(newClients);
                const params = new URLSearchParams(window.location.search) 
                const id = params.get('id') 
                setId(id || '');
            })
    }, [])

    const onRegister = () => {
        setShowModal(true)
    }

    const onSubmit = (value: IClientType) => {
        request("post", "/clients", value)
            .then(res => {
                setShowModal(false);
            })
    }
    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister} id={id} />
            {
                showModal && <RegisterModal onSubmit={onSubmit} />
            }

        </>
    );
};

export default Index;
