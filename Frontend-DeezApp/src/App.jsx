import React, { useState, useEffect } from 'react';
import AlbumCard from './components/AlbumCard'; // Asegúrate de importar el componente correcto
import { getAlbums } from './api/getAlbums'; // Importa la función para obtener los álbumes
import './App.css';
import './components/AlbumCard.css'; // Asegúrate de que la ruta sea correcta

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await getAlbums(); // Utiliza la función para obtener los álbumes
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    }

    fetchAlbums();
  }, []);

  return (
    <div className="spoti-app">
      <header className="app-header">
        <h1>SpotiApp</h1>
      </header>
      <div className="album-list">
        <div className="row">
          {albums.map((album) => (
            <div className="col-md-4 mb-4" key={album.id}>
              <AlbumCard album={album} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
