"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongService = void 0;
const common_1 = require("@nestjs/common");
let SongService = class SongService {
    constructor() {
        this.songs = [];
    }
    getAll() {
        return this.songs;
    }
    getById(id) {
        const song = this.songs.find(song => song.id === id);
        if (!song) {
            throw new common_1.NotFoundException('Song not found');
        }
        return song;
    }
    create(song) {
        const id = this.setId();
        const newSong = { id, ...song };
        this.songs.push(newSong);
        return newSong;
    }
    deleteSongById(id) {
        const index = this.songs.findIndex(song => song.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Song not found');
        }
        this.songs.splice(index, 1);
    }
    updateSongById(id, body) {
        const index = this.songs.findIndex(song => song.id === id);
        if (index === -1) {
            return false;
        }
        this.songs[index] = { id, ...body };
        return true;
    }
    setId() {
        const lastSong = this.songs[this.songs.length - 1];
        const id = lastSong ? lastSong.id + 1 : 1;
        return id;
    }
};
exports.SongService = SongService;
exports.SongService = SongService = __decorate([
    (0, common_1.Injectable)()
], SongService);
//# sourceMappingURL=DeezAppsong.service.js.map