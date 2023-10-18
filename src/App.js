import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ItemsProvider } from "./contexts/ItemsContext";
import MenClothes from "./pages/MenClothes";
import Jewelery from "./pages/Jewelery";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";
import NotFound from "./pages/NotFound";
import Clothes from "./pages/Clothes";
import AllProducts from "./pages/AllProducts";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import RecoverAccount from "./pages/RecoverAccount";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./contexts/CartContext";
// import { SmoothnessProvider } from "./contexts/SmoothnessContext";

function App() {
  return (
    // <SmoothnessProvider>
    <ItemsProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/products/:id" element={<ProductDetails />}></Route>
            <Route path="/collection/men" element={<MenClothes />}></Route>
            <Route
              path="/collection/electronics"
              element={<Electronics />}
            ></Route>
            <Route path="/collection/women" element={<Women />}></Route>
            <Route path="/collection/jewelery" element={<Jewelery />}></Route>
            <Route path="/collection/all-clothes" element={<Clothes />}></Route>
            <Route path="/collection/all" element={<AllProducts />}></Route>
            <Route path="/account/login" element={<Login />}></Route>
            <Route
              path="/account/recover-password"
              element={<RecoverAccount />}
            ></Route>
            <Route
              path="/account/create-account"
              element={<CreateAccount />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ItemsProvider>
    // </SmoothnessProvider>
  );
}

export default App;
