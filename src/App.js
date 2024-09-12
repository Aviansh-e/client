
import { BrowserRouter, Routes, Route, Link, Switch }
  from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/header/Header.mjs";
import Home from "./components/header/Home/Home.js";
import DataProvider from "./Context/DataProvider";

import Pages from "./Pages/Pages.jsx";
import Contact from "./Pages/Contact.jsx";
import Blog from "./Pages/Blog.jsx";
import About from "./Pages/About.jsx";
import Shop from "./Pages/Shop.jsx";

import DetailsPage from "./components/details/DetailsPage.jsx";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />

        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/abouts" element={<About />} />
            <Route path="/shops" element={<Shop />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/product/:id" element={<DetailsPage />} />
          </Routes>
        </Box>
      </BrowserRouter>

    </DataProvider>
  );
}

export default App;
