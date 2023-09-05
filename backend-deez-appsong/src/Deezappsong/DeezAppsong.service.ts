import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import fetch from 'node-fetch'; // Importar node-fetch para hacer solicitudes HTTP

import { DeezappSong } from './DeezAppsong.interface';

const BASE_URL = 'http://localhost:3030/deezappsong';

@Injectable()
export class DeezappService {
  async getDeezApp(): Promise<DeezappSong[]> {
    try {
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error('Error al obtener las canciones');
      }
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getSongByArtist(artist: string): Promise<DeezappSong[]> {
    try {
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error('Error al obtener las canciones');
      }
      const allSongs = await res.json();
      const songs = allSongs.filter((song: DeezappSong) =>
        song.artist.toLowerCase().includes(artist.toLowerCase()),
      );

      if (songs.length === 0) {
        throw new NotFoundException(`Ninguna canción de ${artist}.`);
      }

      return songs;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getSongById(id: number): Promise<DeezappSong> {
    try {
      const res = await fetch(BASE_URL + id);
      if (!res.ok) {
        throw new NotFoundException(`Canción con id ${id} no existe`);
      }
      const parsed = await res.json();
      return parsed;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createSong(song: DeezappSong) {
    try {
      const id = await this.setId();
      const newSong = { ...song, id };
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSong),
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteSongById(id: number): Promise<void> {
    try {
      const res = await fetch(BASE_URL + id, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new NotFoundException(`Canción con id ${id} no existe`);
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateSongById(id: number, body: DeezappSong): Promise<void> {
    try {
      const isSong = await this.getSongById(id);
      const updatedSong = { ...body, id };
      await fetch(BASE_URL + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSong),
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  private async setId(): Promise<number> {
    const songs = await this.getDeezApp();
    const id = songs.length > 0 ? Math.max(...songs.map((song) => song.id)) + 1 : 1;
    return id;
  }
}


