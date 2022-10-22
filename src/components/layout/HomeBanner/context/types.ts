export interface IHomeBannerImage {
  url: string;
  altText: string;
}

export interface IHomeBannerInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: IHomeBannerImage;
}

export interface IHomeBannerState {
  isEditingImage: boolean;
  isEdit: boolean;
  homeBannerInfoAux: IHomeBannerInfo | null;
  homeBannerInfo: IHomeBannerInfo | null;
}
