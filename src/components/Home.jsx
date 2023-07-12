import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import book from "../assets/book.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = ({ data, setData, search, setSearch }) => {
  const navigate = useNavigate();
  const searchBook = (e) => {
    if (e.key === "Enter" || e.key === 13) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAeE0bY3pacbWV34ttVQkOPtT8sGQStK4o&maxResults=40`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
      navigate("/search");
    }
  };

  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center md:gap-12 lg:gap-16 md:flex-row md:justify-evenly ">
      <img
        className="h-[300px] w-[340px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] object-contain"
        src={book}
        alt=""
      />
      <div>
        <h1 className="text-2xl md:text-4xl text-center md:text-left font-poppins  text-[#fa255e] font-bold pb-4">
          Find Your Book
        </h1>
        <div
          className="bg-[#c39ea0] w-[230px] md:w-[300px] lg:w-[400px] h-[30px] rounded-md shadow-xl 
        flex items-center justify-around "
        >
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchBook}
            className=" bg-[#c39ea0] outline-none md:w-[270px] lg:w-[380px] "
            type="text"
          />
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Home;
