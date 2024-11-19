import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function SongList({ onSongSelect, selectedSong }) {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/SongList.json')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error loading songs:', error));
  }, []);

  const handleSongClick = (song) => {
    if (window.innerWidth <= 768) {
      navigate(`/song/${song.fileName}`)
    } else {
      onSongSelect(song)
    }
  }

  return (
    <div className="song-list">
      <h2>Caroling Companion</h2>
      <div className="song-items">
        {songs.map(song => (
          <div
            key={song.fileName}
            className={`song-item ${selectedSong?.fileName === song.fileName ? 'selected' : ''}`}
            onClick={() => handleSongClick(song)}
          >
            <h3>{song.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList; 