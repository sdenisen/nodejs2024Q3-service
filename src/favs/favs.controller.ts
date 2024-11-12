import { Controller, Get, Post, Param, Delete, HttpCode } from '@nestjs/common';
import { FavsService } from './favs.service';
import { UUIDvalidate } from 'src/UUID.validator';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Get()
  @HttpCode(200)
  findAll() {
    return this.favsService.findAll();
  }

  @Post('artist/:id')
  @HttpCode(201)
  addArtist(@Param('id', UUIDvalidate) id: string) {
    return this.favsService.addArtist(id);
  }

  @Delete('artist/:id')
  @HttpCode(204)
  removeArtist(@Param('id', UUIDvalidate) id: string) {
    return this.favsService.removeArtist(id);
  }

  @Post('album/:id')
  @HttpCode(201)
  addAlbum(@Param('id', UUIDvalidate) id: string) {
    return this.favsService.addAlbum(id);
  }

  @Delete('album/:id')
  @HttpCode(204)
  removeAlbum(@Param('id', UUIDvalidate) id: string) {
    return this.favsService.removeAlbum(id);
  }

  @Post('track/:id')
  @HttpCode(201)
  addTrack(@Param('id', UUIDvalidate) id: string) {
    return this.favsService.addTrack(id);
  }

  @Delete('track/:id')
  @HttpCode(204)
  removeTrack(@Param('id', UUIDvalidate) id: string) {
    return this.favsService.removeTrack(id);
  }
}
