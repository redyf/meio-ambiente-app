import { ParkCard } from './park-card.tsx'
import { mockParks } from '../data/data.js'

export function ParkList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Parques Nacionais Próximos</h1>
      <p className="text-center text-gray-600 mb-8">Clique em "Mostrar mapa" em cada parque para visualizar a sua localização.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockParks.map(park => (
          <ParkCard key={park.id} park={park} />
        ))}
      </div>
    </div>
  )
}

