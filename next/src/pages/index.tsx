import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { request } from "../utils/frontEnd";
import ClientTable from "../components/tables/client";
import {
  Client,
  ClientApiResponse,
  parseClientFromApi,
} from "../utils/Clients";

const Index: NextPage = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    request<{ clients: ClientApiResponse[] }>("GET", "/clients")
      .then((response) => {
        const allClients = response.body?.clients || [];
        const parsedClients = allClients.map((client) =>
          parseClientFromApi(client)
        );
        setClients(parsedClients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function handleRegister(formData: Record<string, any>) {
    try {
      await request<void>("POST", "/clients", formData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ClientTable clients={clients} onRegister={handleRegister} />
    </>
  );
};

export default Index;
