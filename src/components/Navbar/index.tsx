import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {
    data?: any[]
}

const NavBar: FC<NavbarProps> = ({ data }) => {
  
  return (
    <div>
        <div className="p-6 flex gap-4 bg-gray-300">
            <Link href="/#" className="text-gray-700 hover:text-gray-900 active:font-semibold">Todos</Link>
            {
                [
                    {
                        id:1,
                        name:"Autos"
                    },
                    {
                        id:2,
                        name:"Salud"
                    },
                    {
                        id:3,
                        name:"Hogar"
                    },
                ].map((opt, index)=>(
                    <Link href={`/${opt.id}`} className="text-gray-700 hover:text-gray-900 active:font-semibold">{opt.name}</Link>
                ))
            }
        </div>
    </div>
  )
}
export default NavBar