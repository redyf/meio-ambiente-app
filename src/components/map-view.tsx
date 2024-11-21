import React from "react";

interface MapViewProps {
  parkName: string;
  location: string;
}

export function MapView({ parkName, location }: MapViewProps) {
  return (
    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <h3 className="font-semibold mb-2">{parkName}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-sm text-gray-400 mt-2">Map placeholder</p>
      </div>
    </div>
  );
}
