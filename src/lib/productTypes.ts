export interface Product {
  id: number;
  imgPath: string | string[];
  brand?: string;
  modelName: string;
  subTitle?: string;
  leftPartNumber?: string;
  rightPartNumber?: string;
  prices: {
    usd: {
      leftCurrent: string;
      leftOriginal: string;
      rightCurrent: string;
      rightOriginal: string;
    };
    cad: {
      leftCurrent: string;
      leftOriginal: string;
      rightCurrent: string;
      rightOriginal: string;
    };
  };
  description?: string;
  category?: string;
  year?: string;
  tag: string;
}
