import "./App.css";
import { Navbar } from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, Home } from "./pages";
import { ItemListContainer } from "./components/Item";
import { ItemDatail } from "./components/Item/ItemDetail";
import { Provider } from "react-redux";
import { store } from "./store";
import CategoryPage from "./pages/Category/CategoryPage";
import { CartProvider } from "./context/cart/CartProvider";
import CartPage from "./pages/Cart/CartPage";
import ThanksPage from "./pages/ThanksPage/ThanksPage";
function App() {
  return (
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/thanks" element={<ThanksPage />} />
            <Route exact path="/:categorySlug" element={<CategoryPage />} />
            <Route
              exact
              path="/:categorySlug/:productSlug"
              element={<ItemDatail />}
            />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </CartProvider>
  );
}

export default App;
