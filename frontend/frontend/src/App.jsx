import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CreateOrder from "./pages/CreateOrder";
import CreateProduct from "./pages/CreateProduct";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Mini Sales System</h1>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-400 transition font-medium">
              Products
            </Link>

            <Link
              to="/add-product"
              className="hover:text-green-400 transition font-medium"
            >
              Add Product
            </Link>

            <Link
              to="/order"
              className="hover:text-yellow-400 transition font-medium"
            >
              Create Order
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<CreateProduct />} />
        <Route path="/order" element={<CreateOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
