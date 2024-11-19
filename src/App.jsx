import { useState } from 'react';
import SongList from './components/SongList';
import LyricViewer from './components/LyricViewer';
import './App.css';

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="app-container">
      <header>
        <h1>Christmas Carol Collection</h1>
      </header>
      <main>
        <div className="content-container">
          <SongList onSongSelect={setSelectedSong} selectedSong={selectedSong} />
          <LyricViewer song={selectedSong} />
        </div>
      </main>
    </div>
  );
}

export default App; 