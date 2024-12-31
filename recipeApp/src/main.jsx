import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Favourites from "./components/pages/Favourites.jsx";
import Home from "./components/pages/Home.jsx";
import { Provider } from "react-redux";
import {store} from './app/Store.js'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path='/favourites' element={<Favourites />}/>
//     </Route>
//   )
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}

    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </StrictMode>
);
