import { Response } from 'express';
import { SongService } from './song/DeezAppsong.service';
import { DeezappSong, DeezappBodySong } from './song/DeezAppsong.interface';
export declare class SongController {
    private songService;
    constructor(songService: SongService);
    getAll(res: Response): Promise<Response<DeezappSong[]>>;
    getById(id: string, res: Response): Promise<Response<DeezappSong>>;
    create(song: DeezappBodySong, res: Response): Promise<any>;
    deleteSongById(id: number, res: Response): Promise<void>;
    updateSongById(id: string, body: DeezappSong, res: Response): Promise<any>;
}
