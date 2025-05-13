import React from "react";
import Newsfun from "./Newsfun";

const Newsdata = () => {
  const news = [
    {
      imageurl:
        "https://disaster-home-page-fyak.vercel.app/assets/2025%2002%2018%20DRR%201-S9-E7TYL.png",
      date: "March 2025",
      title: "News Title",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit officia reprehenderit velit, quod maxime eaque voluptates earum ullam vel cupiditate explicabo placeat quas ut aliquid molestias. Deserunt, animi rerum.",
    },
    {
      imageurl:
        "https://disaster-home-page-fyak.vercel.app/assets/2025%2002%2018%20DRR%201-S9-E7TYL.png",
      date: "March 2025",
      title: "News Title",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit officia reprehenderit velit, quod maxime eaque voluptates earum ullam vel cupiditate explicabo placeat quas ut aliquid molestias. Deserunt, animi rerum.",
    },
    {
      imageurl:
        "https://disaster-home-page-fyak.vercel.app/assets/2025%2002%2018%20DRR%201-S9-E7TYL.png",
      date: "March 2025",
      title: "News Title",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum impedit officia reprehenderit velit, quod maxime eaque voluptates earum ullam vel cupiditate explicabo placeat quas ut aliquid molestias. Deserunt, animi rerum.",
    },
  ];
  return (
    <div className="px-45 bg-gray-50">
      {" "}
      <h1 className="text-3xl font-bold py-4 ">Latest news</h1>{" "}
      <div className="flex  gap-5">
        {news.map((newsdata, index) => (
          <Newsfun
            key={index}
            imageurl={newsdata.imageurl}
            date={newsdata.date}
            title={newsdata.title}
            details={newsdata.details}
          />
        ))}
      </div>
      <div className="justify-self-center">
     
        <button className="bg-pink-500 py-2 px-3 text-white cursor-pointer hover:bg-pink-600 mb-4">
          View all news
        </button>
      </div>
    </div>
  );
};

export default Newsdata;
