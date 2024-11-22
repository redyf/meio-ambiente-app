import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, MapPin } from "lucide-react";
import { MapView } from "./map-view.tsx";
import React from "react";

interface ParkEvent {
  name: string;
  date: string;
}

interface Trail {
  name: string;
  difficulty: string;
  length: string;
}

interface Park {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
  events: ParkEvent[];
  trails: Trail[];
  workingHours: string;
}

export function ParkCard({ park }: { park: Park }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <a
        href={`/park/${park.id}`}
        className="block hover:opacity-75 transition-opacity"
      >
        <img
          src={park.image}
          alt={park.name}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-4">
        <a href={`/park/${park.id}`} className="block hover:underline">
          <h2 className="text-xl font-bold mb-2">{park.name}</h2>
        </a>
        <p className="text-gray-600 mb-4">{park.description}</p>
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{park.location}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span>{park.workingHours}</span>
        </div>
        <button
          className="flex items-center text-blue-500 hover:text-blue-700"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>
        {isExpanded && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Upcoming Events:</h3>
            <ul className="list-disc list-inside mb-4">
              {park.events.map((event, index) => (
                <li key={index}>
                  {event.name} - {event.date}
                </li>
              ))}
            </ul>
            <h3 className="font-semibold mb-2">Popular Trails:</h3>
            <ul className="list-disc list-inside">
              {park.trails.map((trail, index) => (
                <li key={index}>
                  {trail.name} - {trail.difficulty}, {trail.length}
                </li>
              ))}
            </ul>
            <button
              className="flex items-center text-green-500 hover:text-green-700 mt-4"
              onClick={() => setShowMap(!showMap)}
            >
              {showMap ? "Hide map" : "Show map"}
              <MapPin className="w-4 h-4 ml-1" />
            </button>
            {showMap && (
              <div className="mt-4">
                <MapView parkName={park.name} location={park.location} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
