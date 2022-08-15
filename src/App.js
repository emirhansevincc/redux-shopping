import { useState } from "react";
import { useSelector } from "react-redux";
import BasketList from "./components/basketList/BasketList";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import ProductsPage from "./components/Products-page/ProductsPage";

function App() {

  const [product, setProduct] = useState([])

  const { isLoggedIn } = useSelector((state) => state.auth)
  // console.log(isLoggedIn);

  const { itemsList } = useSelector((state) => state.cart)
  // console.log(itemsList);

  return (
    <div className="App">
      {isLoggedIn && <Navbar />}
      {!isLoggedIn && <Login />}
      {
        isLoggedIn && <ProductsPage
          setProduct={setProduct}
          product={product}
        />
      }
      {isLoggedIn && itemsList.length > 0 && <BasketList />}
    </div>
  );
}

export default App;
