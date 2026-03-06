import { useNavigate } from "react-router-dom"
import type { Restaurant } from "../types/Restaurant"

interface Props {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/restaurant/${restaurant.objectId}`)}
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "10px",
        cursor: "pointer"
      }}
    >

      <h2>{restaurant.name}</h2>

      <p>{restaurant.address1}, {restaurant.suburb}</p>

      <p>{restaurant.cuisines.join(", ")}</p>
    </div>
  )
}

export default RestaurantCard