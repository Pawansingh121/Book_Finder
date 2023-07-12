import React, { useState } from "react";
import SingleCard from "./SingleCard";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SearchPage = ({ data, setData, search, setSearch }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);
  const clickHandler = (id) => {
    let element = data.find((book) => book.id === id);

    setShow(true);
    setItem([element]);
  };
  return (
    <>
      {!show ? (
        <div className="w-full min-h-screen max-h-full">
          <div className="flex items-center p-8 gap-8 ">
            <BsFillArrowLeftCircleFill
              className="cursor-pointer"
              onClick={() => {
                setData([]);
                navigate("/");
              }}
              size={24}
            />
            <h2 className=" text-lg md:text-xl">
              Search Results For "{search}"{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 pt-20">
            {data.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              return (
                <div
                  onClick={() => clickHandler(book.id)}
                  key={book.id}
                  className="shadow-2xl rounded-xl  cursor-pointer hover:scale-110 transition-all duration-300 "
                >
                  <img
                    className="w-[200px] h-[200px] object-fit rounded-xl"
                    src={thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <p className="w-[200px] pt-8 overflow-hidden  text-center  text-[#fa255e] font-poppins">
                    {book.volumeInfo.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <SingleCard
          show={show}
          setShow={setShow}
          item={item}
          setItem={setItem}
        />
      )}
    </>
  );
};

export default SearchPage;
