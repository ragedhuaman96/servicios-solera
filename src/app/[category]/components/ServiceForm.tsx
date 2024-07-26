'use client'
import Card from '@/components/Card'
import { FC, useState } from 'react'
import { Service } from '../page'
import Button from '@/components/Button'

interface ServiceFormProps {
  data: Service
}

const ServiceForm: FC<ServiceFormProps> = ({ data }) => {
  const [service, setService] = useState<Service>(data)

  const handleChange =(e)=>{
    setService(prev=>({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="title">Nombre</label>
            <input
                className='rounded-md p-2 border border-gray-300'
                name='title'
                type="text"
                value={service.title}
                onChange={handleChange}  
            />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="title">Description</label>
            <textarea
                className='rounded-md p-2 border border-gray-300'
                name='description'
                value={service.description}
                onChange={handleChange}  
            />
        </div>
    </div>
  )
}

const ServiceCard: FC<{}> = ({ data, service }) => {
    const _data = {
        id: 1,
        title: "Llamar ambulancia",
        description: "Se llama a los medicos",
        category: 2
    }

    return (
      <div>
          <Card 
              title = "Servicio"
              body = {(
                  <ServiceForm
                    data={_data}
                  />
              )}
              footer= {(
                <div className='flex gap-2'>
                    <Button variant='success'>Guardar</Button>
                    <Button variant='error'>Cancelar</Button>
                </div>
              )}
          />
      </div>
    )
}

export default ServiceCard