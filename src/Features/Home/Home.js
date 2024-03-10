import classnames from "classnames/bind";
import styles from "./home.module.scss";
import icon from "../../assets/icon/icon";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";

const cx = classnames.bind(styles);
function Home() {
  const { listMovie } = useAppContext();

  const [detail, setDetail] = useState(false);
  const [movie, setMovie] = useState({});

  const moviesPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const indexLast = currentPage * moviesPerPage;
  const indexFirst = indexLast - moviesPerPage;
  const currentMovies = listMovie?.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(listMovie?.length / moviesPerPage);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleSwap = (item) => {
    setDetail(!detail);
    setMovie(item);
  };
  return (
    <div className={cx("main")}>
      {!detail ? (
        <div className={cx("home")}>
          <div className={cx("header")}>
            <img src={icon.menu} alt="" />
            <h1>
              MOVIE <span>UI</span>
            </h1>
            {search && (
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                type=""
              />
            )}
            <img onClick={() => setSearch(!search)} src={icon.search} alt="" />
          </div>
          <div className={cx("content")}>
            <h2>Most Popular Movies</h2>
            <div className={cx("list-movies")}>
              {currentMovies?.map((item, i) => (
                <div
                  onClick={() => handleSwap(item)}
                  key={i}
                  className={cx("movie")}
                >
                  <img src={item.image.url} alt="" />
                  <h3>{item.name}</h3>
                  <div className={cx("time")}>
                    <p>{item.time}min</p>
                    <p>{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={cx("action")}>
              <p>Page {currentPage}</p>
              <div className={cx("btn")}>
                <button
                  onClick={handlePrevPage}
                  style={
                    currentPage === 1
                      ? { backgroundColor: "#eee", cursor: "default" }
                      : {}
                  }
                  disabled={currentPage === 1}
                >
                  <img src={icon.prev} alt="" />
                </button>
                <button onClick={handleNextPage}>
                  <img src={icon.next} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={cx("detail")}>
          <div className={cx("cover")}>
            <img src={movie.image.url} alt="" />
          </div>
          <div className={cx("info-movie")}>
            <div className={cx("header")}>
              <div className={cx("info")}>
                <h3>{movie.name}</h3>
                <div className={cx("time")}>
                  <p>{movie.time}min</p>
                  <p>{movie.year}</p>
                </div>
              </div>
              <img onClick={() => setDetail(false)} src={icon.close} alt="" />
            </div>
            <div className={cx("desc")}>
              <p>{movie.introduce}</p>
            </div>
            <div className={cx("play")}>
              <button>
                <img src={icon.play} alt="" />
                <p>PLAY MOVIE</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
