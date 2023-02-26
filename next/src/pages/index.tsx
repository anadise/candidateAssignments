import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { request } from "../utils/frontEnd";
import ClientTable from "../components/tables/client";
import { useRouter } from "next/router";
import Modal from "./../examples/modals";
import { ClientType } from "../types/clientTypes";

const Index: NextPage = () => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [openModal, setModal] = useState<boolean>(false);
  const { query } = useRouter();

  useEffect(() => {
    const fetchClients = async () => {
      const {
        body: { clients },
      } = await request("GET", "/clients");
      const { highlight } = query;
      const formatedClients = clients?.map(
        ({ firstName, lastName, ...item }: ClientType) => ({
          ...item,
          fullName: `${firstName} ${lastName}`,
          isHighlighted: highlight == item.id,
        })
      );
      setClients(formatedClients);
    };
    fetchClients();
  }, []);

  const onRegister = async (data: Object) => {
    const res = await request("POST", "/clients", data as ClientType);
    setModal(false);
    console.log("res", res);
  };
  return (
    <>
      <ClientTable
        clients={clients}
        onRegister={onRegister}
        openRegistrationModal={setModal}
      />
      <Modal open={openModal} setOpen={setModal} onRegister={onRegister} />
    </>
  );
};

export default Index;
