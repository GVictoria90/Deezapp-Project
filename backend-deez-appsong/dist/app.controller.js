"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongController = void 0;
const common_1 = require("@nestjs/common");
const DeezAppsong_service_1 = require("./song/DeezAppsong.service");
let SongController = class SongController {
    constructor(songService) {
        this.songService = songService;
    }
    async getAll(res) {
        try {
            const serviceResponse = await this.songService.getAll();
            return res.status(common_1.HttpStatus.OK).json(serviceResponse);
        }
        catch (error) {
            throw new common_1.NotFoundException('Data not found');
        }
    }
    async getById(id, res) {
        try {
            const parsedID = parseInt(id, 10);
            const serviceResponse = await this.songService.getById(parsedID);
            if (serviceResponse) {
                return res.status(common_1.HttpStatus.OK).json(serviceResponse);
            }
            else {
                throw new common_1.NotFoundException('Song not found');
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(`Cannot get song with id ${id}`);
        }
    }
    async create(song, res) {
        try {
            const createdSong = await this.songService.create(song);
            return res.status(common_1.HttpStatus.CREATED).json(createdSong);
        }
        catch (error) {
            throw new common_1.BadRequestException('Song creation failed');
        }
    }
    async deleteSongById(id, res) {
        try {
            await this.songService.deleteSongById(id);
            res.status(common_1.HttpStatus.OK).json({ message: 'Song deleted successfully' });
        }
        catch (error) {
            throw new common_1.NotFoundException('Delete failed');
        }
    }
    async updateSongById(id, body, res) {
        try {
            const parsedID = parseInt(id, 10);
            const success = await this.songService.updateSongById(parsedID, body);
            if (success) {
                return res.status(common_1.HttpStatus.OK).json({ success: true, code: common_1.HttpStatus.OK });
            }
            else {
                throw new common_1.NotFoundException('Song not found');
            }
        }
        catch (error) {
            throw new common_1.BadRequestException('Update failed');
        }
    }
};
exports.SongController = SongController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "deleteSongById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], SongController.prototype, "updateSongById", null);
exports.SongController = SongController = __decorate([
    (0, common_1.Controller)('songs'),
    __metadata("design:paramtypes", [DeezAppsong_service_1.SongService])
], SongController);
//# sourceMappingURL=app.controller.js.map