import React from "react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { request } from "../utils/frontEnd";
import ClientTable from "../components/tables/client";

const Index: NextPage = () => {
    const[clients,setClients]=useState<any>()
    const[name,setName]=useState<string[]>()
  useEffect(() => {
   let getData=async()=>{
    let data= await request("GET","/clients")
    setClients(data.body.clients);
        setName(name?.concat(data.body.clients.firstName))
    }
    getData()
  }, []);


  const onRegister:any=async(item:any)=>{
await request("POST","/clients",{item})
  }
  return (
    <>
      <ClientTable clients={clients} onRegister={onRegister} />
    </>
  );
};

export default Index;



