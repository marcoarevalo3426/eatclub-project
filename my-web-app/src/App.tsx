
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RestaurantList from "./pages/RestaurantList"
import RestaurantDetails from "./pages/RestaurantDetails"
import GlobalStyles from "./styles/global-styles";

export default function App() {
  return (
    
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        {/* Restaurant list page */}
        <Route
          path="/"
          element={<RestaurantList />}
        />
        {/* Restaurant details page using id */}
        <Route
          path="/restaurant/:objectId"
          element={<RestaurantDetails />}
        />
      </Routes>
    </BrowserRouter>
  )
}