import { useEffect, useState } from "react";
import fallbackImage from "../assets/restaurant-placeholder.png";
import type { Restaurant } from "../types/Restaurant"

type RestaurantImageProps = {
  restaurant: Restaurant;
};

const RestaurantImage = ({ restaurant }: RestaurantImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>(restaurant.imageLink);

  useEffect(() => {
    
    const img = new Image();
    img.src = restaurant.imageLink;

    img.onload = () => setImageUrl(restaurant.imageLink);
    img.onerror = () => setImageUrl(fallbackImage);

  }, [restaurant.imageLink]);

  return (
    <div style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        width: "100%"
      }}
      >
    </div>
  );
};

export default RestaurantImage;