import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  CreateContainer,
  Footer,
  Header,
  MainContainer,
  OrderPlaced,
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    // bg-gradient-to-r from-rose-100 to-teal-100
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col   bg-gradient-to-r from-rose-100 to-teal-100 ">
        <Header />
        <main className="mt-14 md:mt-24 px-4 md:px-16 py-4 w-full ">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/orderPlaced" element={<OrderPlaced />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
