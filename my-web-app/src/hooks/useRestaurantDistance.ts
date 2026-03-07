import { useMemo } from "react"
import { calculateDistance } from "../utils/distanceUtils"
import { useUserLocation } from "./useUserLocation"
import { useRestaurantCoordinates } from "./useRestaurantCoordinates"

export const useRestaurantDistance = (address: string) => {

  const userLocation = useUserLocation()
  const restaurantCoords = useRestaurantCoordinates(address)

  return useMemo(() => {

    if (!userLocation || !restaurantCoords) return null

    const km = calculateDistance(
      userLocation.lat,
      userLocation.lon,
      restaurantCoords.lat,
      restaurantCoords.lon
    )

    return km.toFixed(1)

  }, [userLocation, restaurantCoords])
}