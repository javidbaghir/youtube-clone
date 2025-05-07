const API_KEY = import.meta.env.VITE_API_KEY;

export const getData = async (category) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
  );

  const res = await response.json();

  return res.items;
};

export const getDataById = async (id) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
  );

  const res = await response.json();

  return res.items[0];
};

export const getChannelById = async (id) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
  );

  const res = await response.json();

  if (!res.items || res.items.length === 0) {
    return null;
  }

  return res.items[0];
};

export const getCommentsByVideoId = async (id) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${id}&key=${API_KEY}`
  );

  const res = await response.json();

  if (res.items && Array.isArray(res.items)) {
    return res.items;
  } else {
    console.warn("No comments found or error in response", res);
    return [];
  }
};

export const getMostPopularVideosById = async (id) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${id}&key=${API_KEY}`
  );

  const res = await response.json();

  if (res.items && Array.isArray(res.items)) {
    return res.items;
  } else {
    console.warn("No comments found or error in response", res);
    return [];
  }
};
