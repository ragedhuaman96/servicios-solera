'use client'
import Card from '@/app/components/Card'
import { FC, useState } from 'react'
import Button from '@/components/Button'
import { useServicesContext } from '@/context-api/context'
import { Service } from '../page'

interface ServiceFormProps {
  data: Service;
  categories: any[]
}

const ServiceForm: FC<ServiceFormProps> = ({ categories, data }) => {
  const { setService, service } = useServicesContext()

  const handleChange =(e:any)=>{
    setService({
        ...service,
        [e.target.name]: e.target.value
    })

    console.log('SERVICE QUE SE ACTUALIZA', service)
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
        <div className='flex flex-col gap-2'>
            <label htmlFor="title">Category</label>
            <select name="category" onChange={handleChange} className='p-3 rounded-md border border-gray-300' value={service.category}>
              <option value="">Ninguno</option>
              {
                categories.map((e, index)=>(
                  <option key={index} value={e.id} className='p-4'>
                    {e.name}
                  </option>
                ))
              }
            </select>
        </div>
    </div>
  )
}

const ServiceCard: FC<{}> = () => {
    const { categories, updateService, service, resetService } = useServicesContext()

    const editService=()=>{
      updateService(service)
    }

    return (
      <div>
          <Card 
              title = "Servicio"
              body = {(
                  <ServiceForm
                    categories={categories}
                    data={service}
                  />
              )}
              footer= {(
                <div className='flex gap-2'>
                    <Button onClick={editService} variant='success'>Grabar</Button>
                    <Button onClick={resetService} variant='error'>Cancelar</Button>
                </div>
              )}
          />
      </div>
    )
}

export default ServiceCard