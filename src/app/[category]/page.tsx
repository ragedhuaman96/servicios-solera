"use client"

import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";
import { title } from "process";
import { useEffect, useRef } from "react";
import ServiceCard from "./components/ServiceForm";
import { useServicesContext } from "@/context-api/context";

export type Service = {
    id: number | string;
    title: string;
    description: string;
    category: number | string;
}

export default function Page() {
    const { services, getServices } = useServicesContext()
    const { data } = services
    console.log('SERVICE DESDE EL STATE', data)
    const cardRef = useRef(null)
    const _data = [
        {
            id: 1,
            title: "Llamar ambulancia",
            description: "Se llama a los medicos",
            category: 2
        },
        {
            id: 2,
            title: "Limpiar el baño",
            description: "Se llama a los medicos wiuussnfldfnsdssdddddddddddd",
            category: 1
        },
        {
            id: 3,
            title: "Lavar el auto",
            description: "Se llama a los medicos",
            category: 3
        }
    ]

    useEffect(() => {
        getServices()
    }, [])
  
  function editCard(card:Service){
    console.log('CARD A EDITAR', card)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-[3fr_1fr] grid-rows-1">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        data?.map((service: Service)=>(
                            <Card
                                height="250px"
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                // body={(<div className="truncate">{}</div>)}
                                footer={(<div className='flex gap-2'>
                                    <Button onClick={()=>editCard(service)}>Editar</Button>
                                    <Button onClick={()=>editCard(service)}>Eliminar</Button>
                                </div>)}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <ServiceCard />
            </div>
        </div>
    </main>
  );
}
