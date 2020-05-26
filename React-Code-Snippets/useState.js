import react, { useState } from "react";
import uuid from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "new song", id: uuid() }]);
    //we pass the value in setSongs whatever we want the songs to be
    //And when we pass the array(as we still want an array)..it will override the value songs state
    //completely..so we have to use the spread operator so that no data will be removed and
    //we'll add in other obj that we want as an add on..besides those previous songs
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
