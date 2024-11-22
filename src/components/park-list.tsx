import { ParkCard } from './park-card.tsx'

const mockParks = [
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

