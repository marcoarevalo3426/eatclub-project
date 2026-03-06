import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import type { Restaurant, ApiResponse } from "../types/Restaurant"

const API_URL = import.meta.env.VITE_API_URL

export default function RestaurantDetails() {

  const { objectId } = useParams()
  const navigate = useNavigate()

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {

    const fetchRestaurant = async () => {

      const res = await fetch(API_URL)
      const data: ApiResponse = await res.json()

      const foundRestaurant = data.restaurants.find(
        r => r.objectId === objectId
      )

      if (!foundRestaurant) return

      // Sort deals by highest discount
      const sortedDeals = [...foundRestaurant.deals].sort(
        (a, b) => Number(b.discount) - Number(a.discount)
      )

      setRestaurant({
        ...foundRestaurant,
        deals: sortedDeals
      })
    }

    fetchRestaurant()

  }, [objectId])

  if (!restaurant) return <div>Loading...</div>

  return (
    <div>

      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <h1>{restaurant.name}</h1>

      <img
        src={restaurant.imageLink}
        width="300"
      />

      <p>{restaurant.address1}, {restaurant.suburb}</p>

      <p>Open: {restaurant.open} - {restaurant.close}</p>

      <h2>Deals</h2>

      {restaurant.deals.map(deal => (

        <div key={deal.objectId}>

          <p>Discount: {deal.discount}%</p>
          <p>Dine In: {deal.dineIn}</p>
          <p>Qty Left: {deal.qtyLeft}</p>

        </div>

      ))}

    </div>
  )
}