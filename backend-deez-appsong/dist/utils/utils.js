"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createID = exports.readParse = void 0;
const fs = require("fs");
const path_1 = require("path");
const SONGS_FILE_PATH = (0, path_1.join)(__dirname, '../../data/songs.json');
function readParse() {
    const fileContent = fs.readFileSync(SONGS_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
}
exports.readParse = readParse;
function createID() {
    const songs = readParse();
    const lastTrack = songs[songs.length - 1];
    const id = lastTrack ? lastTrack.id + 1 : 1;
    return id;
}
exports.createID = createID;
//# sourceMappingURL=utils.js.map