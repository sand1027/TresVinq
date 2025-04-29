import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Scrool from "./Components/ScroolToTop/Scrool";
import Pannel from "./Pages/CleanRoomPartition/Pannel/Pannel";
import Ceiling from "./Pages/CleanRoomPartition/Ceiling/Ceiling";
import Door from "./Pages/CleanRoomPartition/Door/Door";
import WallGaurd from "./Pages/CleanRoomPartition/WallGaurds/WallGaurds";
import Windows from "./Pages/CleanRoomPartition/Windows/Window";
import Top from "./Components/Top/Top";
import ProductsPage from "./Pages/ProductsPage/Products";
import Trolley from "./Pages/CleanRoomFurniture/Trolleys/Trolleys";
import CrossOver from "./Pages/CleanRoomFurniture/CrossOverBench/CrossOver";
import LShapedBench from "./Pages/CleanRoomFurniture/lShapedBench/LShaped";
import Tables from "./Pages/CleanRoomFurniture/Tables/Tables";
import Storage from "./Pages/CleanRoomFurniture/Storage/Storage";
import Cabinets from "./Pages/CleanRoomFurniture/Cabinets/Cabinets";
import PassBox from "./Pages/PassBox/PassBox";
import Ducts from "./Pages/Ducts/Ducts";
import CableTrays from "./Pages/CableTrays/CableTrays";
import Enclousers from "./Pages/Enclousers/Enclousers";
import ModularCleanRoom from "./Pages/ModularCleanRoom/ModularCleanRoom";
import CleanRoomFurnitures from "./Pages/CleanRoomFurnitures/CleanRoomFurnitures";
import Blog from "./Pages/Blog/Blog";
import MessageComponent from "./Components/Message/Message";

/* In your main CSS file */

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/mcl/pannel" element={<Pannel />} />
        <Route path="/mcl/ceiling" element={<Ceiling />} />
        <Route path="/mcl/door" element={<Door />} />
        <Route path="/mcl/wallgaurd" element={<WallGaurd />} />
        <Route path="/mcl/window" element={<Windows />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="crf/trolleys" element={<Trolley />} />
        <Route path="crf/cross-bench" element={<CrossOver />} />
        <Route path="crf/l-shaped" element={<LShapedBench />} />
        <Route path="crf/storage" element={<Storage />} />
        <Route path="crf/tables" element={<Tables />} />
        <Route path="crf/cabinets" element={<Cabinets />} />
        <Route path="/passbox" element={<PassBox />} />
        <Route path="/ducts" element={<Ducts />} />
        <Route path="/cable-trays" element={<CableTrays />} />
        <Route path="/enclousers" element={<Enclousers />} />
        <Route path="/mcl" element={<ModularCleanRoom />} />
        <Route path="/crf" element={<CleanRoomFurnitures />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Top />
      <MessageComponent />
      <div className="footer-app">
        <Footer />
      </div>

      <Scrool />
    </>
  );
};

export default App;
