export interface Deal {
  objectId: string
  discount: string
  dineIn: string
  lightning: string
  qtyLeft: string
}

export interface Restaurant {
  objectId: string
  name: string
  address1: string
  suburb: string
  cuisines: string[]
  imageLink: string
  open: string
  close: string
  deals: Deal[]
}

export interface ApiResponse {
  restaurants: Restaurant[]
}

export interface CardProps {
  restaurant: Restaurant
  bestDiscount: string
  dealTime: string
  dineIn: string
}

export interface SpecificStatusData {
  status: "start" | "end" | "stop";
}