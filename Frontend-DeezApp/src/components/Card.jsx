import React from 'react';
import './Card.css';

function Card({ song }) {
  return (
    <div className="card">
      <img src={song.albumCover} alt={song.title} className="card-image" />
      <div className="card-info">
        <h2 className="song-title">{song.title}</h2>
        <p className="artist">{song.artist}</p>
        <p className="album">{song.album}</p>
      </div>
    </div>
  );
}

export default Card;
