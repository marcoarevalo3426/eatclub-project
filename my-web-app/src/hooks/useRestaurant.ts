import { useQueryClient } from "@tanstack/react-query"
import type { Restaurant } from "../types/Restaurant"

export const useRestaurant = (objectId: string | undefined) => {

  const queryClient = useQueryClient()

  const restaurants =
    queryClient.getQueryData<Restaurant[]>(["restaurants"])

  return restaurants?.find(r => r.objectId === objectId)

}