import { ParkCard } from './park-card'

const mockParks = [
  {
    id: 1,
    name: "Parque da Cidade Joventino Silva",
    description: "O maior parque urbano da cidade de Salvador, com áreas verdes e equipamentos de lazer.",
    location: "Itaigara, Salvador, BA",
    image: "/placeholder.svg?height=300&width=400",
    events: [
      { name: "Aula de Yoga ao ar livre", date: "15 de Junho, 2023" },
      { name: "Feira de Artesanato", date: "2 de Julho, 2023" }
    ],
    trails: [
      { name: "Pista de Cooper", difficulty: "Fácil", length: "2.5 km" },
      { name: "Trilha das Árvores", difficulty: "Moderada", length: "1.8 km" }
    ],
    workingHours: "5h às 22h"
  },
  {
    id: 2,
    name: "Parque de Pituaçu",
    description: "Área de preservação ambiental com lago artificial e ciclovias, ideal para atividades ao ar livre.",
    location: "Pituaçu, Salvador, BA",
    image: "/placeholder.svg?height=300&width=400",
    events: [
      { name: "Passeio de Bicicleta", date: "20 de Junho, 2023" },
      { name: "Observação de Aves", date: "10 de Julho, 2023" }
    ],
    trails: [
      { name: "Ciclovia do Lago", difficulty: "Fácil", length: "5 km" },
      { name: "Trilha da Mata", difficulty: "Moderada", length: "3 km" }
    ],
    workingHours: "6h às 18h"
  },
  {
    id: 3,
    name: "Jardim Botânico de Salvador",
    description: "Área de conservação com espécies nativas da Mata Atlântica e espaços educativos.",
    location: "São Marcos, Salvador, BA",
    image: "/placeholder.svg?height=300&width=400",
    events: [
      { name: "Workshop de Plantas Medicinais", date: "25 de Junho, 2023" },
      { name: "Visita Guiada", date: "5 de Julho, 2023" }
    ],
    trails: [
      { name: "Trilha das Bromélias", difficulty: "Fácil", length: "800m" },
      { name: "Trilha da Biodiversidade", difficulty: "Moderada", length: "1.2 km" }
    ],
    workingHours: "8h às 17h"
  }
]

export function ParkList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nearby National Parks</h1>
      <p className="text-center text-gray-600 mb-8">Click "Show map" in each park card to view its location.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockParks.map(park => (
          <ParkCard key={park.id} park={park} />
        ))}
      </div>
    </div>
  )
}

