import React, { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";
import { getData } from "../../service/yt-service";
import { valueConverter } from "../../data";
import moment from "moment";
const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await getData(category);
    setData(response);
  };

  console.log(data);
  useEffect(() => {
    loadData();
  }, [category]);
  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link
          key={index}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
        >
          <img src={item?.snippet?.thumbnails?.standard?.url} alt="" />
          <h2>{item?.snippet?.title}</h2>
          <h3>{item?.snippet?.channelTitle}</h3>
          <p>
            {valueConverter(item?.statistics?.viewCount)} views &bull;{" "}
            {moment(item?.snippet?.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
