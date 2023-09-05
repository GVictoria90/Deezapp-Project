import {
  Get,
  Post,
  Delete,
  Put,
  Controller,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DeezappService } from './DeezAppsong.service'; // Cambio en la importación

@Controller('deezapp') // Cambio en la ruta del controlador
export class DeezappController {
  constructor(private readonly deezappService: DeezappService) {} // Cambio en el nombre del servicio

  @Get()
  async getDeezApp(@Query('artist') artist?: string): Promise<any[]> {
    if (!artist) return this.deezappService.getDeezApp(); // Cambio en el nombre del método
    return this.deezappService.getSongByArtist(artist); // Cambio en el nombre del método
  }

  @Get(':id')
  async getDeezAppById( // Cambio en el nombre del método y el decorador de parámetro
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<any> {
    return this.deezappService.getSongById(id); // Cambio en el nombre del método
  }

  @Post()
  async createDeezApp(@Body() body): Promise<any> { // Cambio en el nombre del método
    return this.deezappService.createSong(body); // Cambio en el nombre del método
  }

  @Delete(':id')
  async deleteDeezAppById(@Param('id') id: number) { // Cambio en el nombre del método
    return this.deezappService.deleteSongById(id); // Cambio en el nombre del método
  }

  @Put(':id')
  @HttpCode(204)
  async updateDeezAppById(@Param('id') id: number, @Body() body): Promise<void> { // Cambio en el nombre del método
    return this.deezappService.updateSongById(id, body); // Cambio en el nombre del método
  }
}
