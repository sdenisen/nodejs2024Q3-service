import { ArtistModel } from 'src/artist/artist.model';
import { InMemoryDB } from './database';

export class ArtistDB extends InMemoryDB<ArtistModel> {}