import { useNavigate } from "react-router-dom"
import type { Restaurant } from "../types/Restaurant"

interface Props {
  restaurant: Restaurant
  bestDiscount: string
  dealTime: string
  dineIn: string
}

export default function RestaurantCard({
  restaurant,
  bestDiscount,
  dealTime,
  dineIn
}: Props) {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/restaurant/${restaurant.objectId}`)}
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        margin: "10px",
        cursor: "pointer"
      }}
    >

      <img src={restaurant.imageLink} width="200" />

      <h2>{restaurant.name}</h2>

      <p>
        {restaurant.address1}, {restaurant.suburb}
      </p>

      <p>{restaurant.cuisines.join(", ")}</p>

      <h3>
        {bestDiscount}% OFF
        {dineIn === "true" && " - Dine In"}
      </h3>

      <p>{dealTime}</p>

    </div>
  )
}