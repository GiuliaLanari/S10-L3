import WatchItAgain from "./WatchItAgain";
import NewReleases from "./NewReleases";
import TrendingNow from "./TrendingNow";

const TVShows = function () {
  return (
    <>
      <h1 className="text-white">TV Showrs</h1>;
      <WatchItAgain />
      <NewReleases />
      <TrendingNow />
    </>
  );
};

export default TVShows;
