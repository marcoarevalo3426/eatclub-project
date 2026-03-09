import { useNavigate } from "react-router-dom"
import { useRestaurantDistance } from "../hooks/useRestaurantDistance"
import { restaurantCard, discountBadge, favIconButton } from "../styles/restaurant-card-styles"
import type { CardProps } from "../types/Restaurant"
import RestaurantImage from "../components/RestaurantImage"

export default function RestaurantCard({
  restaurant,
  bestDiscount,
  dealTime,
  dineIn
}: CardProps) {

  const navigate = useNavigate()
  const restaurantAddress = `${restaurant.address1}, ${restaurant.suburb}`
  const distance = useRestaurantDistance(restaurantAddress)

  return (
    <>
      <div
        onClick={() => navigate(`/${restaurant.objectId}`)}
        css={restaurantCard}
      >
      <div className="cardImageContentContainer">
        {/* IMAGE */}
        <RestaurantImage restaurant={restaurant} />

        {/* IMAGE BADGE */}
        <div css={discountBadge}>
          <p className="discountAmount">{bestDiscount}% off {dineIn === "true" && " - Dine In"}</p>
          <p className="discountTimeBeforeExpiry">{dealTime}</p>
        </div>
      </div>

        {/* RESTAURANT NAME */}
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