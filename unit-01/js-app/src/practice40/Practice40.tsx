import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './styles/practice40.css';

type Props = {}

const Practice40 = (props: Props) => {

  const playlist = [
    {name: "Birth of a New Witch - Umineko", url: "https://www.youtube.com/watch?v=pAkvF7HkFEY"},
    {name: "Ascension - Final Fantasy XVI", url: "https://youtu.be/rogKdcO7t3A?si=xk6JJz9ivgnUYQhg"},
    {name: "Pathmaker - Final Fantasy XIV", url: "https://youtu.be/aijP3rvckEE?si=9HCRPjDWxqg4SKCZ"},
  ];

  const [song, setSong] = useState(playlist[0].url);

  const handleSelectSong = (index: number) => {
    setSong(playlist[index].url);
  }

  return (
    <>
    <h2>React Player Component</h2>
    <div className='main-container'>
        <ReactPlayer
          url={song}  
          controls
              width="400px"
              height="400px"
        />
      </div>
      <div className='playlist'>
          <h4>Other tracks</h4>
          <ul>
            {playlist.map((song, index) => (
              <li>
              <button key={index} onClick={() => handleSelectSong(index)}>{song.name}</button>
              </li>
            ))}
          </ul>
      </div>
    </>
  )
}

export default Practice40


