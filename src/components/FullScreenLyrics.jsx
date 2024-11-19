import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function FullScreenLyrics() {
  const { fileName } = useParams()
  const navigate = useNavigate()
  const [song, setSong] = useState(null)
  const [lyrics, setLyrics] = useState('')

  useEffect(() => {
    // Fetch songs list
    fetch('/SongList.json')
      .then(response => response.json())
      .then(songs => {
        const foundSong = songs.find(s => s.fileName === fileName)
        setSong(foundSong)
        if (foundSong) {
          // Fetch lyrics for the found song
          fetch(`/lyrics/${foundSong.fileName}`)
            .then(response => response.text())
            .then(data => setLyrics(data))
        }
      })
  }, [fileName])

  if (!song) return <div>Loading...</div>

  return (
    <div className="fixed inset-0 bg-white p-4 overflow-auto">
      <button 
        onClick={() => navigate('/')}
        className="back-button"
      >
        Back
      </button>
      <h2>{song.title}</h2>
      <div className="lyrics-content">
        <ReactMarkdown>{lyrics}</ReactMarkdown>
      </div>
      <div className="song-metadata">
        {song.composer !== 'unknown' && <p>Composer: {song.composer}</p>}
        {song.lyricist !== 'unknown' && <p>Lyricist: {song.lyricist}</p>}
        {song.year !== 'unknown' && <p>Year: {song.year}</p>}
        <p>Origin: {song.origin}</p>
      </div>
    </div>
  )
}

export default FullScreenLyrics 