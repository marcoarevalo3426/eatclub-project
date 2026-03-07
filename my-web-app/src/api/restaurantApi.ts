import type { ApiResponse, Restaurant } from "../types/Restaurant"

const API_URL = import.meta.env.VITE_API_URL

export const fetchRestaurants = async (): Promise<Restaurant[]> => {

  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Failed to fetch restaurants")
  }

  const data: ApiResponse = await response.json()

  return data.restaurants
}