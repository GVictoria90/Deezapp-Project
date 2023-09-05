import { DeezappSong, DeezappBodySong } from '../song/DeezAppsong.interface';
export declare class SongService {
    private songs;
    getAll(): DeezappSong[];
    getById(id: number): DeezappSong;
    create(song: DeezappBodySong): DeezappSong;
    deleteSongById(id: number): void;
    updateSongById(id: number, body: DeezappSong): boolean;
    private setId;
}
