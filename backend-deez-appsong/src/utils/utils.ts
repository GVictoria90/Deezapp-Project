import * as fs from 'fs';
import { join } from 'path';
import { DeezappSong } from '../song/DeezAppsong.interface'; // Asumo que has renombrado la interfaz

const SONGS_FILE_PATH = join(__dirname, '../../data/songs.json');

export function readParse(): DeezappSong[] {
  const fileContent = fs.readFileSync(SONGS_FILE_PATH, 'utf-8');
  return JSON.parse(fileContent);
}

export function createID(): number {
  const songs = readParse();
  const lastTrack = songs[songs.length - 1];
  const id = lastTrack ? lastTrack.id + 1 : 1;
  return id;
}
