import { useNavigate } from "react-router-dom"
import type { Restaurant } from "../types/Restaurant"
import { useRestaurantDistance } from "../hooks/useRestaurantDistance"
import fallbackImage from "../assets/restaurant-placeholder.png"
import { restaurantCard, discountBadge, favIconButton } from "../styles/restaurant-card-styles"

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

  const restaurantAddress = `${restaurant.address1}, ${restaurant.suburb}`

  const distance = useRestaurantDistance(restaurantAddress)

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    e.currentTarget.src = fallbackImage
  }

  return (
    <>
      <div
        onClick={() => navigate(`/restaurant/${restaurant.objectId}`)}
        css={restaurantCard}
      >
      <div className="cardImageContentContainer">
        <img
          src={restaurant.imageLink}
          alt={restaurant.name}
          width="200"
          onError={handleImageError}
          className="cardImage"
        />
        <div css={discountBadge}>
          <p className="discountAmount">{bestDiscount}% off {dineIn === "true" && " - Dine In"}</p>
          <p className="discountTimeBeforeExpiry">{dealTime}</p>
        </div>
      </div>
        <div className="cardTitleFavIconHolder">
          <h2 className="cardTitle">{restaurant.name}</h2>
          <a href="" css={favIconButton}><img src="/src/assets/fav-inactive.png"></img></a>
        </div>

        <p className="cardDistance">
          {distance && `${distance} km Away, `} {restaurant.suburb}
        </p>

        <p className="cardCuisine">{restaurant.cuisines.join(", ")}</p>

        <div className="cardBottomContent">
          <p>Dine In</p>
          <p>Takeaway</p>
          <p>Order Online</p>
        </div>

      </div>
    </>
  )
}