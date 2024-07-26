import type { NextApiRequest, NextApiResponse } from 'next';
import { getLocalServices } from '../../utils';

// Simula una base de datos de usuarios
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

// Handler para la ruta API
export default function GET (req: NextApiRequest, res: NextApiResponse) {
  // Puedes manejar diferentes métodos HTTP aquí
  console.log('TOY AQUIII')
  if (req.method === 'GET') {
    let data = getLocalServices()
    
    if(data.length == 0){
        data = _data
    }

    return new Response(JSON.stringify(data));

    // return data
  }

//   return new Response(JSON.stringify(data));

//   await new Promise((resolve) => setTimeout(resolve, 500));
  
//   // Devolver una respuesta después del retraso
//   return new Response(JSON.stringify({ message: 'This is a fake API response' }), {
//     headers: { 'Content-Type': 'application/json' },
//   });
}