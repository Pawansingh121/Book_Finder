import React, { useState } from "react";
import Home from "../src/components/Home";
import SearchPage from "../src/components/SearchPage";
import BookDetails from "../src/components/BookDetails";
import { Route, Routes } from "react-router-dom";
import SingleCard from "./components/SingleCard";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#f8e5e5]">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              setData={setData}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              data={data}
              setData={setData}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path="/details"
          element={
            <BookDetails
              data={data}
              setData={setData}
              search={search}
              setSearch={setSearch}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
