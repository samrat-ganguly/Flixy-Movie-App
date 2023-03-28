import axios from "axios";

export const getMovieById = async (id, setLoading, setError) => {
  try {
    const res1 = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const res2 = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    return { ...res1.data, ...res2.data };
  } catch (error) {
    console.log(error);
    setError(true);
    return null;
  } finally {
    setLoading(false);
  }
};
