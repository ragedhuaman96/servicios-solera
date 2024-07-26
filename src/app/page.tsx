"use client"

import Button from "@/components/Button";
import Card from "@/app/components/Card";
import { useEffect, useState } from "react";
import { useServicesContext } from "@/context-api/context";
import NavBar from "@/app/components/Navbar";
import ServiceCard from "./components/ServiceForm";
import CardsLayout from "./components/CardsLayout";

export type Service = {
  id: number | string;
  title: string;
  description: string;
  category: number | string;
}

export default function Page() {
  const { getServices, getCategories, categories, filtered, deleteService, setService, services } = useServicesContext()
  const [loading, setLoading] = useState<boolean>(true)

  console.log('SERVICES', services)

  function getAllData() {
    Promise.all([
      getServices(),
      getCategories()
    ]).then(() =>
      setLoading(false)
    )
  }
  useEffect(() => {
    getAllData()
  }, [])

  return (
    <main>
      {
        loading
        ? (
          <div className="h-[100vh] w-full flex items-center justify-center">
            Cargando ...
          </div>
        )
        : (
            <>
              <NavBar data={categories} />
              <div className="grid grid-cols-[3fr_1fr] grid-rows-1 p-4 gap-4">
                <div>
                  <CardsLayout />
                </div>
                <div>
                  <ServiceCard />
                </div>
              </div>
            </>
          )
      }
    </main>
  );
}
