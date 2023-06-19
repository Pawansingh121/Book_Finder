import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SingleCard = ({ show, setShow, item, setItem }) => {
  return (
    <div className="w-full min-h-screen max-h-full  bg-gray-100 flex  justify-center pt-16  ">
      {item.map((elm, id) => {
        let thumbnail =
          elm.volumeInfo.imageLinks && elm.volumeInfo.imageLinks.smallThumbnail;
        return (
          <div
            key={id}
            className="bg-gray-300 min-h-[200px] max-h-full w-[500px] relative rounded-xl shadow-xl mx-4 mb-12"
          >
            <AiOutlineCloseCircle
              onClick={() => setShow(false)}
              className="absolute  right-2 top-2 cursor-pointer "
              size={22}
            />
            <div className="flex  justify-around mt-6">
              <img
                className="w-[200px] h-[200px] object-contain rounded-2xl shadow-2xl"
                src={thumbnail}
                alt=""
              />
              <div>
                <h1 className="font-poppins text-lg md:text-xl text-[#fa255e] mt-10">
                  {elm.volumeInfo.title}
                </h1>
                <p>By {elm.volumeInfo.authors[0]}</p>
              </div>
            </div>
            <p className="font-poppins pt-4 px-2 text-sm ">
              {elm.volumeInfo.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCard;
