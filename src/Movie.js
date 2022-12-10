import { useEffect, useState, useMemo } from 'react';
import { getTopRatedMovies } from './api';
import { getUpcomingMovies } from './api';
const Movie = () => {
  const [toprated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    getMovies();
    getUpcoming();
  }, []);

  const filteredTopRated = useMemo(() => {
    return toprated.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, toprated]);

  const filteredUpcoming = useMemo(() => {
    return upcoming.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, upcoming]);

  const getMovies = async () => {
    const results = await getTopRatedMovies();
    setTopRated(results);
  };

  const getUpcoming = async () => {
    const data = await getUpcomingMovies();
    setUpcoming(data);
  };

  return (
    <div className="mt-20 ml-16 pb-20 ">
      <form className="flex flex-col mr-10">
        <label className="text-black text-2xl font-normal font-dmsans ">
          Search
        </label>
        <input
          type="text"
          className="border border-black w-full h-54 pl-5 focus:outline-none mt-1"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </form>
      <div className="mt-12 ">
        <p className="text-black text-2xl font-normal font-dmsans ">
          Top rated Movies
        </p>
        <div className="flex overflow-x-auto mt-4 space-x-1 scrollbar-hide">
          {filteredTopRated.map((item) => (
            <div
              key={item.id}
              className="font-dmsans  bg-black rounded-xl w-80 h-80 shrink-0 flex items-center justify-center text-white"
            >
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 ">
        <p className="text-black text-2xl font-normal font-dmsans ">
          Upcoming Movies
        </p>
      </div>
      <div className="flex overflow-x-auto mt-4 space-x-1 scrollbar-hide">
        {filteredUpcoming.map((item) => (
          <div
            key={item.id}
            className="bg-black font-dmsans  rounded-xl w-80 h-80 shrink-0 flex items-center justify-center text-white"
          >
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Movie;
