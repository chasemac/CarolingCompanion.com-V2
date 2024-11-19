import { useState } from 'react';
import SongList from './SongList';
import LyricViewer from './LyricViewer';

function Home() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="app-container">
      <div className="content-container">
        <div className="left-column">
          <SongList onSongSelect={setSelectedSong} selectedSong={selectedSong} />
          <div className="developer-info">
            <h3>About</h3>
            <p>
              Created by Chase McElroy, a mobile software developer passionate about 
              building intuitive applications.
            </p>
            <a 
              href="https://chase.bio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-link"
            >
              Learn more →
            </a>
          </div>
        </div>
        <LyricViewer song={selectedSong} />
      </div>
    </div>
  );
}

export default Home; 