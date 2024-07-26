import Button from '@/components/Button'
import Card from '@/app/components/Card'
import { useServicesContext } from '@/context-api/context'
import React from 'react'
import { Service } from '../page'

const CardsLayout = () => {
    const { filtered, deleteService, setService} = useServicesContext()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
        {
          filtered?.map((service: Service) => (
            <Card
              height="300px"
              key={service.id}
              title={service.title}
              description={service.description}
              footer={(<div className='flex gap-2'>
                <Button onClick={() => setService(service)}>Editar</Button>
                <Button onClick={() => deleteService(service.id)}>Eliminar</Button>
              </div>)}
            />
          ))
        }
      </div>
    )
}

export default CardsLayout