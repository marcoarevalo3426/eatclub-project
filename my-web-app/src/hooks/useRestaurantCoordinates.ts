import { useEffect, useState } from "react"

type Coordinates = {
  lat: number
  lon: number
}

const coordinateCache: Record<string, Coordinates> = {}

export const useRestaurantCoordinates = (address: string) => {

  const [coords, setCoords] = useState<Coordinates | null>(null)

  useEffect(() => {

    if (!address) return

    // Return cached coordinates if already fetched
    if (coordinateCache[address]) {
      setCoords(coordinateCache[address])
      return
    }

    const controller = new AbortController()

    const fetchCoordinates = async () => {

      try {

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
          {
            headers: {
              "User-Agent": "Restaurant Demo App (contact: marco.arevalo3426@gmail.com)"
            },
            signal: controller.signal
          }
        )

        const data = await response.json()

        if (!data.length) return

        const result = {
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon)
        }

        coordinateCache[address] = result
        setCoords(result)

      } catch (err) {
        if ((err as any).name !== "AbortError") {
          console.error("Geocoding error:", err)
        }
      }

    }

    // Debounce requests (1 second delay)
    const debounceTimer = setTimeout(fetchCoordinates, 3000)

    return () => {
      clearTimeout(debounceTimer)
      controller.abort()
    }

  }, [address])

  return coords
}