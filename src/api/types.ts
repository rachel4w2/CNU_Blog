export enum TAG {
  JAVA = 'JAVA',
  REACT = 'REACT',
  SPRINGBOOT = 'SPRINGBOOT',
  DB = 'DB',
}

export interface IPost {
  id: number;
  title: string;
  contents: string;
  tag: TAG;
}

export interface IAdvertisement {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
}

export type IPostWithAd = {
  post: IPost;
  advertisement: IAdvertisement;
};

export type IResponsePostList = IPostWithAd[];
