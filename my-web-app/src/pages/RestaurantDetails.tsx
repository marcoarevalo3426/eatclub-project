import { useParams, useNavigate } from "react-router-dom"
import { useMemo } from "react"
import { useRestaurants } from "../hooks/useRestaurants"
import type { Restaurant } from "../types/Restaurant"

export default function RestaurantDetails() {

  const { objectId } = useParams()
  const navigate = useNavigate()
  const { data: restaurants, isLoading } = useRestaurants()

  const restaurant = useMemo<Restaurant | undefined>(() => {
    if (!restaurants || !objectId) return undefined
    return restaurants.find(r => r.objectId === objectId)
  }, [restaurants, objectId])

  const sortedDeals = useMemo(() => {
    if (!restaurant) return []
    return [...restaurant.deals].sort(
      (a, b) => Number(b.discount) - Number(a.discount)
    )
  }, [restaurant])

  if (isLoading) return <div>Loading restaurant...</div>
  if (!restaurant) return <div>Restaurant not found</div>

  return (
    <div>

      <h1>{restaurant.name}</h1>

      <img
        src={restaurant.imageLink}
        alt={restaurant.name}
        width="300"
      />

      <p>
        {restaurant.address1}, {restaurant.suburb}
      </p>

      <p>
        Hours: {restaurant.open} - {restaurant.close}
      </p>

      <h2>Deals</h2>

      {sortedDeals.map(deal => (
        <div key={deal.objectId}>
          <strong>{deal.discount}% OFF</strong>
          <p>Dine In: {deal.dineIn}</p>
          <p>Qty Left: {deal.qtyLeft}</p>
        </div>
      ))}

    </div>
  )
}