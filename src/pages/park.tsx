'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, MapPin, Clock } from 'lucide-react'
import { MapView } from '../components/map-view.tsx'
import { Form, useLoaderData } from "react-router-dom";
import { mockParks } from '../data/data.js';

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

export async function loader({ params }) {
  return { params };
}

export function ParkPage() {
  const { params } = useLoaderData();
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
        Voltar
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
            <h2 className="text-xl font-semibold mb-2">Eventos próximos</h2>
            <ul className="list-disc list-inside">
              {park.events.map((event, index) => (
                <li key={index} className="mb-1">
                  {event.name} - {event.date}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Trilhas populares</h2>
            <ul className="list-disc list-inside">
              {park.trails.map((trail, index) => (
                <li key={index} className="mb-1">
                  {trail.name} - {trail.difficulty}, {trail.length}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Localização</h2>
            <MapView parkName={park.name} location={park.location} />
          </div>
        </div>
      </div>
    </div>
  )
}

