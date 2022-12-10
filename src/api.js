import axios from 'axios';
const baseurl = `https://api.themoviedb.org/3/movie`;

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `${baseurl}/top_rated?api_key=93e49a1293dc5c941e43b1183c5cb66a`
    );
    return response.data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(
      `${baseurl}/upcoming?api_key=93e49a1293dc5c941e43b1183c5cb66a`
    );
    return response.data.results;
  } catch (e) {
    console.log(e);
  }
};
