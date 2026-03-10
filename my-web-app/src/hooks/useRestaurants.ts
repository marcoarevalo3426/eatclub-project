import { useQuery } from "@tanstack/react-query"
import { fetchRestaurants } from "../api/restaurantApi"
import type { Restaurant } from "../types/Restaurant"

export const useRestaurants = () => {

  return useQuery<Restaurant[]>({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurants,
    staleTime: 1000 * 60 * 5 /* Cache restaurants for 5 minutes. */
  })

}