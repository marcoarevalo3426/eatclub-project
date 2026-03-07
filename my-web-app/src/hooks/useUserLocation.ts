import { useEffect, useState } from "react"

export const useUserLocation = () => {

  const [location, setLocation] = useState<{
    lat: number
    lon: number
  } | null>(null)

  useEffect(() => {

    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(position => {

      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })

    })

  }, [])

  return location
}