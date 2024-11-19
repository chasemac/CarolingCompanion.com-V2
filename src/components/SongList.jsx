import { useEffect, useState } from 'react';

function SongList({ onSongSelect, selectedSong }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/SongList.json')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error loading songs:', error));
  }, []);

  return (
    <div className="song-list">
      <h2>Songs</h2>
      <div className="song-items">
        {songs.map(song => (
          <div
            key={song.fileName}
            className={`song-item ${selectedSong?.fileName === song.fileName ? 'selected' : ''}`}
            onClick={() => onSongSelect(song)}
          >
            <h3>{song.title}</h3>
            <p className="song-details">
              {song.composer !== 'unknown' && `Composer: ${song.composer}`}
              {song.year !== 'unknown' && ` • ${song.year}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList; 