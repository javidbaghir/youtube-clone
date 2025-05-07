import React, { useEffect, useState } from "react";
import "./playVideo.css";
import { GrDislike, GrLike } from "react-icons/gr";
import { RiShareForwardLine } from "react-icons/ri";
import { GiSaveArrow } from "react-icons/gi";
import {
  getChannelById,
  getCommentsByVideoId,
  getDataById,
} from "../../service/yt-service";
import { valueConverter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [video, setVideo] = useState({});
  const [channelData, setChannelData] = useState({});
  const [comments, setcomments] = useState([]);

  const loadData = async () => {
    const response = await getDataById(videoId);

    setVideo(response);
  };

  const loadChannelById = async () => {
    const response = await getChannelById(video?.snippet?.channelId);
    setChannelData(response);
  };

  const loadComments = async () => {
    const response = await getCommentsByVideoId(video.id);
    setcomments(response);
  };

  useEffect(() => {
    loadData();
  }, [videoId]);

  useEffect(() => {
    loadChannelById();
    loadComments();
  }, [video]);

  return (
    <div className="play-video">
      <iframe
        width="100%"
        src={`https://www.youtube.com/embed/${video?.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{video?.snippet?.title}</h3>
      <div className="play-video-info">
        <p>
          {valueConverter(video?.statistics?.viewCount)} Views &bull;{" "}
          {moment(video?.snippet?.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <span>
              <GrLike size={20} />
            </span>
            {valueConverter(video?.statistics?.likeCount)}
          </span>
          <span>
            <span>
              <GrDislike size={20} />
            </span>
            {video?.statistics?.favoriteCount}
          </span>
          <span>
            <span>
              <RiShareForwardLine size={20} />
            </span>
            Share
          </span>
          <span>
            <span>
              <GiSaveArrow size={20} />
            </span>
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.medium?.url} alt="" />
        <div>
          <p>{video?.snippet?.channelTitle}</p>
          <span>
            {valueConverter(channelData?.statistics?.subscriberCount)}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>{video?.snippet?.description.slice(0, 250)}</p>
        <hr />
        <h4>{valueConverter(video?.statistics?.commentCount)} Comment</h4>

        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <span>
              <img
                src={
                  comment?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl
                }
                alt=""
              />
            </span>
            <div>
              <h3>
                {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}{" "}
                <span>
                  {moment(
                    comment?.snippet?.topLevelComment?.publishedAt
                  ).fromNow()}
                </span>
              </h3>
              <p>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
              <div className="comment-action">
                <span>
                  <GrLike />{" "}
                  {valueConverter(
                    comment?.snippet?.topLevelComment?.snippet?.likeCount
                  )}
                </span>
                <span>
                  <GrDislike />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
