'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, MapPin, Clock } from 'lucide-react'
import { MapView } from '../../../components/map-view'

interface ParkEvent {
  name: string
  date: string
}

interface Trail {
  name: string
  difficulty: string
  length: string
}

interface Park {
  id: number
  name: string
  description: string
  location: string
  image: string
  events: ParkEvent[]
  trails: Trail[]
  workingHours: string
}

const mockParks: Park[] = [
  {
    id: 1,
    name: "Yellowstone National Park",
    description: "America's first national park, known for its geothermal features and diverse wildlife.",
    location: "Wyoming, Montana, Idaho",
    image: "/placeholder.svg?height=300&width=400",
    events: [
      { name: "Ranger-led Hike", date: "June 15, 2023" },
      { name: "Wildlife Photography Workshop", date: "July 2, 2023" }
    ],
    trails: [
      { name: "Old Faithful Geyser Loop", difficulty: "Easy", length: "1.6 miles" },
      { name: "Grand Prismatic Spring Overlook Trail", difficulty: "Moderate", length: "1.2 miles" }
    ],
    workingHours: "Open 24 hours"
  },
  {
    id: 2,
    name: "Yosemite National Park",
    description: "Famous for its giant sequoia trees, waterfalls, and granite cliffs like El Capitan and Half Dome.",
    location: "California",
    image: "/placeholder.svg?height=300&width=400",
    events: [
      { name: "Stargazing Night", date: "June 20, 2023" },
      { name: "Rock Climbing Clinic", date: "July 10, 2023" }
    ],
    trails: [
      { name: "Mist Trail", difficulty: "Strenuous", length: "3 miles" },
      { name: "Lower Yosemite Fall Trail", difficulty: "Easy", length: "1 mile" }
    ],
    workingHours: "Open 24 hours"
  },
  {
    id: 3,
    name: "Grand Canyon National Park",
    description: "Home to much of the immense Grand Canyon, with its layered bands of red rock.",
    location: "Arizona",
    image: "/placeholder.svg?height=300&width=400",
    events: [
      { name: "Geology Talk", date: "June 25, 2023" },
      { name: "Sunset Photography Tour", date: "July 5, 2023" }
    ],
    trails: [
      { name: "Bright Angel Trail", difficulty: "Strenuous", length: "12 miles" },
      { name: "South Kaibab Trail", difficulty: "Strenuous", length: "7 miles" }
    ],
    workingHours: "Open 24 hours"
  }
]

export default function ParkPage({ params }: { params: { id: string } }) {
  const [park, setPark] = useState<Park | null>(null)

  useEffect(() => {
    const parkId = parseInt(params.id)
    const foundPark = mockParks.find(p => p.id === parkId)
    setPark(foundPark || null)
  }, [params.id])

  if (!park) {
    return <div className="container mx-auto px-4 py-8">Park not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <a href="/" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to all parks
      </a>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={park.image} alt={park.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{park.name}</h1>
          <p className="text-gray-600 mb-6">{park.description}</p>
          <div className="flex items-center text-gray-500 mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{park.location}</span>
          </div>
          <div className="flex items-center text-gray-500 mb-6">
            <Clock className="w-5 h-5 mr-2" />
            <span>{park.workingHours}</span>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
            <ul className="list-disc list-inside">
              {park.events.map((event, index) => (
                <li key={index} className="mb-1">
                  {event.name} - {event.date}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Popular Trails</h2>
            <ul className="list-disc list-inside">
              {park.trails.map((trail, index) => (
                <li key={index} className="mb-1">
                  {trail.name} - {trail.difficulty}, {trail.length}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Park Location</h2>
            <MapView parkName={park.name} location={park.location} />
          </div>
        </div>
      </div>
    </div>
  )
}

