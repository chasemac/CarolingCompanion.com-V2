import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function LyricViewer({ song }) {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    if (song) {
      fetch(`/lyrics/${song.fileName}`)
        .then(response => response.text())
        .then(data => setLyrics(data))
        .catch(error => console.error('Error loading lyrics:', error));
    }
  }, [song]);

  if (!song) {
    return (
      <div className="lyric-viewer empty">
        <p>Select a song to view its lyrics</p>
      </div>
    );
  }

  return (
    <div className="lyric-viewer">
      <h2>{song.title}</h2>
      <div className="song-metadata">
        <p>
          {song.composer !== 'unknown' && `Composer: ${song.composer}`}
          {song.lyricist !== 'unknown' && ` • Lyricist: ${song.lyricist}`}
        </p>
        <p>Origin: {song.origin}</p>
      </div>
      <div className="lyrics-content">
        <ReactMarkdown>{lyrics}</ReactMarkdown>
      </div>
    </div>
  );
}

export default LyricViewer; 