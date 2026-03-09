import { useState, useMemo } from "react"
import { useRestaurants } from "../hooks/useRestaurants"
import RestaurantCard from "../components/RestaurantCard"
import { useDebounce } from "use-debounce"
import type { Deal } from "../types/Restaurant"
import { searchBar } from "../styles/restaurant-list-styles"
import { topMenu } from "../styles/eatclub-common-styles"

export default function RestaurantList() {

  const { data: restaurants, isLoading } = useRestaurants()
  const [search, setSearch] = useState("")
  const [debouncedSearch] = useDebounce(search, 300)
  const filteredRestaurants = useMemo(() => {

    if (!restaurants) return []
    const lower = debouncedSearch.toLowerCase()

    const filtered = restaurants.filter(r =>
      r.name.toLowerCase().includes(lower) ||
      r.cuisines.join(" ").toLowerCase().includes(lower)
    )

    return filtered.sort((a, b) => {
      const maxA = Math.max(...a.deals.map(d => Number(d.discount)))
      const maxB = Math.max(...b.deals.map(d => Number(d.discount)))
      return maxB - maxA
    })

  }, [restaurants, debouncedSearch])

  const getBestDeal = (deals: Deal[]) => {

    return deals.reduce((best, current) => {
      return Number(current.discount) > Number(best.discount)
        ? current
        : best
    })
  }

  const getDealTimeText = (deals: Deal) => {
    // @ts-ignore
    if (!deals.start || !deals.end) {
      return "Anytime today"
    }

    const now = new Date()
    
    const today = new Date()
    // @ts-ignore
    const [hours, minutes] = deals.end.replace(/am|pm/i, "").split(":")
    // @ts-ignore
    const isPM = deals.end.toLowerCase().includes("pm")

    let endHour = Number(hours)
    if (isPM && endHour !== 12) endHour += 12
    if (!isPM && endHour === 12) endHour = 0

    today.setHours(endHour)
    today.setMinutes(Number(minutes))

    if (now < today) {
      // @ts-ignore
      return `Arrive before ${deals.end}`
    }

    return "Expired"
  }

  if (isLoading) return <div>Loading restaurants...</div>

  return (
    <>
      <div className="container">
        <div css={topMenu}>
          <div className="accountIcon"><a href="#"><img src="src/assets/account-icon.png" width="20"></img></a></div>
          <div className="eatClubLogo"><a href="#"><img src="src/assets/eatclub-logo.png" width="25"></img></a></div>
          <div className="filtersIcon"><a href="#"><img src="src/assets/filters-icon.png" width="25"></img></a></div>
        </div>
      </div>
      <div css={searchBar}>
          <div className="searchIcon"><img src="src/assets/search-icon.png" width="20"></img></div>
          <input
            placeholder="e.g. chinese, pizza"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
        </div>

      <div className="container">
      {filteredRestaurants.map(r => {

        const bestDeal = getBestDeal(r.deals)

        return (
          <RestaurantCard
            key={r.objectId}
            restaurant={r}
            bestDiscount={bestDeal.discount}
            dealTime={getDealTimeText(bestDeal)}
            dineIn={bestDeal.dineIn}
          />
        )
      })}
      </div>
    </>
  )
}