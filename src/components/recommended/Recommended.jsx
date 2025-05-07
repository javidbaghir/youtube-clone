import React, { useEffect, useState } from "react";
import "./recommended.css";
import { Link } from "react-router-dom";
import { valueConverter } from "../../data";
import { getMostPopularVideosById } from "../../service/yt-service";

const Recommended = ({ categoryId }) => {
  const [popularVideos, setPopularVideos] = useState([]);

  const loadData = async () => {
    const response = await getMostPopularVideosById(categoryId);

    setPopularVideos(response);
  };

  useEffect(() => {
    loadData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {popularVideos.map((video, index) => (
        <Link
          key={index}
          to={`/video/${video.snippet.categoryId}/${video.id}`}
          className="side-video-list"
        >
          <img src={video?.snippet?.thumbnails?.medium?.url} alt="" />
          <div className="vid-info">
            <h4>{video?.snippet?.title}</h4>
            <p>{video?.snippet?.channelTitle}</p>
            <p>{valueConverter(video?.statistics?.viewCount)} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
