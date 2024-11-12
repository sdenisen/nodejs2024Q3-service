import { IsUUID, IsArray } from 'class-validator';

export class Fav {
  @IsArray()
  @IsUUID(4, { each: true })
  artists: string[];

  @IsArray()
  @IsUUID(4, { each: true })
  albums: string[];

  @IsArray()
  @IsUUID(4, { each: true })
  tracks: string[];

  constructor() {
    this.artists = [];
    this.albums = [];
    this.tracks = [];
  }
}
