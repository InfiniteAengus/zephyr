export interface ICategoryView {
  name: string;
  subItems?: ICategoryViewSubItem[];
}
export interface ICategoryViewSubItem {
  slug: string;
  image_url: string;
  name: string;
  link: string;
}

export interface IProductView {
  slug: string;
  name: string;
  description: string;
  price: string;
  subcategory_slug: string;
  image_url: string;
}
