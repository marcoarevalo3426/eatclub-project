//import { containerStyles } from './eatclub-styles'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RestaurantList from "./pages/RestaurantList"
import RestaurantDetails from "./pages/RestaurantDetails"

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Restaurant list page */}
        <Route
          path="/"
          element={<RestaurantList />}
        />

        {/* Restaurant details page using objectId */}
        <Route
          path="/restaurant/:objectId"
          element={<RestaurantDetails />}
        />

      </Routes>

    </BrowserRouter>
  )
}