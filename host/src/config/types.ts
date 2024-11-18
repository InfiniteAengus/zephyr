export interface ICollection {
  id: number;
  name: string;
  slug: string;
  categories?: ICategory[];
}

export interface ICategory {
  slug: string;
  name: string;
  collection_id: number;
  image_url: string;
  subcollections?: ISubCollection[];
}

export interface ISubCollection {
  category_slug: string;
  id: number;
  name: string;
  subcategories: ISubCategory[];
}

export interface ISubCategory {
  slug: string;
  name: string;
  image_url: string;
  subcollection_id: number;
}

export interface IProduct {
  slug: string;
  name: string;
  description: string;
  price: string;
  subcategory_slug: string;
  image_url: string;
}
