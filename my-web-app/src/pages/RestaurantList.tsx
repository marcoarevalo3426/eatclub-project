import React, { useEffect, useState } from "react"
import RestaurantCard from "../components/RestaurantCard"
import type { Restaurant, ApiResponse } from "../types/Restaurant"

const API_URL = import.meta.env.VITE_API_URL

const RestaurantList: React.FC = () => {

  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [filtered, setFiltered] = useState<Restaurant[]>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await fetch(API_URL)
      const data: ApiResponse = await res.json()

      const sorted = [...data.restaurants].sort((a, b) => {
        const maxA = Math.max(...a.deals.map(d => Number(d.discount)))
        const maxB = Math.max(...b.deals.map(d => Number(d.discount)))
        return maxB - maxA
      })

      setRestaurants(sorted)
      setFiltered(sorted)
    }

    fetchRestaurants()
  }, [])

  useEffect(() => {

    const lower = search.toLowerCase()

    const result = restaurants.filter(r =>
      r.name.toLowerCase().includes(lower) ||
      r.cuisines.join(" ").toLowerCase().includes(lower)
    )

    setFiltered(result)

  }, [search, restaurants])

  return (
    <div>

      <h1>Restaurant List</h1>

      <input
        type="text"
        placeholder="Search by name or cuisine"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>

        {filtered.map(r => (
          <RestaurantCard key={r.objectId} restaurant={r} />
        ))}

      </div>

    </div>
  )
}

export default RestaurantList