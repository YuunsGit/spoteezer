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
  picture_type: PictureTypeEnum;
  user: User;
  type: PictureTypeEnum;
}

export enum PictureTypeEnum {
  Playlist = "playlist",
}

export interface User {
  id: number;
  name: string;
  tracklist: string;
  type: UserType;
}

export enum UserType {
  User = "user",
}
