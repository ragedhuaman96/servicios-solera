import { useServicesContext } from '@/context-api/context';
import Link from 'next/link'
import { FC } from 'react'
import { filterServices } from '../../../context-api/actions';

interface NavLinkProps {
    id: number;
    name: string;
}

interface NavbarProps {
    data?: any[]
}

const NavLink: FC<NavLinkProps> = ({ id, name }) => {
    const {setCategory, category, filterServices} = useServicesContext()

    const handleChange=()=>{
        setCategory(id)
        filterServices(id)
    }
    return(
        <div 
            onClick={handleChange}
            className={`cursor-pointer text-gray-700 hover:text-gray-900 ${id == category && 'font-bold'}`}
        >
          {name}
        </div>
    )
}

const NavBar: FC<NavbarProps> = ({ data }) => {
  return (
    <div>
        <div className="p-6 flex gap-4 bg-gray-200">
            <NavLink id={-1} name="Todos" />
            {data?.map((opt, index)=>(
                    <NavLink key={index} id={opt.id} name={opt.name} />
                ))
            }
        </div>
    </div>
  )
}
export default NavBar