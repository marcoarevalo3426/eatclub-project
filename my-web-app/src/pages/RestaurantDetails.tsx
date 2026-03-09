import { useParams} from "react-router-dom"
import { useMemo} from "react"
import { useRestaurants } from "../hooks/useRestaurants"
import { useRestaurantDistance } from "../hooks/useRestaurantDistance"
import { topMenu, midNav, cardTitleSection, iconTextContent, cardDealsDiscountSection, cardDetailsContent, cardDetailsContainer, smallBadge} from "../styles/eatclub-common-styles"
import type { Restaurant } from "../types/Restaurant"
import RestaurantImage from "../components/RestaurantImage"

export default function RestaurantDetails() {

  const { objectId } = useParams()
  const { data: restaurants, isLoading } = useRestaurants()
  const restaurant = useMemo<Restaurant | undefined>(() => {
    if (!restaurants || !objectId) return undefined
    return restaurants.find(r => r.objectId === objectId)

  }, [restaurants, objectId])

  const address = restaurant
    ? `${restaurant.address1}, ${restaurant.suburb}`
    : ""
  const distance = useRestaurantDistance(address)

  const sortedDeals = useMemo(() => {
    if (!restaurant) return []
    return [...restaurant.deals].sort(
      (a, b) => Number(b.discount) - Number(a.discount)
    )
  }, [restaurant])

  if (isLoading) return <div>Loading restaurant...</div>
  if (!restaurant) return <div>Restaurant not found</div>



  return (
    <>
    <div className="container">
        <div css={topMenu}>
          <div className="accountIcon"><a href="#"><img src="src/assets/account-icon.png" width="20"></img></a></div>
          <div className="eatClubLogo"><a href="#"><img src="src/assets/eatclub-logo.png" width="25"></img></a></div>
          <div className="filtersIcon"><a href="#"><img src="src/assets/filters-icon.png" width="25"></img></a></div>
        </div>
    </div>

    {/* IMAGE */}
    <div css={cardDetailsContainer}>
      <p css={smallBadge}><img src="src/assets/badge-star.png" width="10" height="10"></img> New</p>
      <RestaurantImage restaurant={restaurant} />
    </div>

    <div>
      <ul css={midNav}>
        <li><a href="#"><img src="src/assets/nav-menu.png" width="33"></img></a></li>
        <li><a href="#"><img src="src/assets/nav-callus.png" width="35"></img></a></li>
        <li><a href="#"><img src="src/assets/nav-location.png" width="47"></img></a></li>
        <li><a href="#"><img src="src/assets/nav-favorite.png" width="47"></img></a></li>
      </ul>
    </div>

    <div css={cardDetailsContent}>
      <div css={cardTitleSection}>
        <h1 className="cardTitle">{restaurant.name}</h1>
        <div className="cardTitleBottomContent">
          <p>Pizza</p>
          <p>Casual Dining</p>
          <p>Vegetarian</p>
          <p>$</p>
        </div>
      </div>

      {/* OPERATING HOURS */}
      <div css={iconTextContent} className="detailsOperatingHoursDistance">
        <p><img src="src/assets/clock-icon.png" width="25"></img></p>
        <p>Hours: {restaurant.open} - {restaurant.close}</p>
      </div>

      {/* DISTANCE AND ADDRESS */}
      <div  css={iconTextContent} className="detailsOperatingHoursDistance">
        <p><img src="src/assets/location-icon.png" width="23"></img></p>
        <p>
          {address}
        {distance && ` • ${distance}km Away`}
        </p>
      </div>

      {/* DEALS */}
      <div>
        {sortedDeals.map(deal => (
          <div key={deal.objectId} css={cardDealsDiscountSection}>

            <div className="cardDealsAmountAvailabilitySection">
              <div css={iconTextContent} className="cardDealsAmount">
                <p><img src="src/assets/thunder-icon.png" width="20"></img></p>
                <p>{deal.discount}% OFF
                {deal.dineIn === "true"}</p>
              </div>
              
              <div className="cardDealsAvailability">
                {deal.start && deal.end && (
                  <p>Available: {deal.start} - {deal.end}</p>
                )}
              </div>
              <p className="cardDealsLeft">{deal.qtyLeft} Deals Left</p>
            </div>

            <div className="cardDealsRedeemSection">
              <a href="#" className="cardDealsRedeemBtn">Redeem</a>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  )
}