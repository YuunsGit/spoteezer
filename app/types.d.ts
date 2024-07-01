export interface UserResponse {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  country: string;
  tracklist: string;
  type: string;
}

export interface ChartPlaylistsResponse {
  data: Playlist[];
  total: number;
}

export interface SearchResponse {
  data: Playlist[];
  total: number;
  prev?: string;
  next?: string;
}

export interface TracklistResponse {
  data: Track[];
  checksum: string;
  total: number;
  next: string;
}

export interface Playlist {
  id: number;
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: Date;
  md5_image: string;
  picture_type: string;
  user: User;
  type: string;
}

export interface User {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}

export interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  isrc: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  time_add: number;
  artist: Artist;
  album: Album;
  type: string;
  title_version?: string;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: string;
}

export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
}
