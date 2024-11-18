import axiosInstance from "../config/axios";

export const apiGetCollections = async () => {
  try {
    const result = await axiosInstance.get("/collections");
    return result?.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const apiGetCategories = async () => {
  try {
    const result = await axiosInstance.get("/categories");
    return result?.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const apiGetCategory = async (slug: string) => {
  try {
    const result = await axiosInstance.get(`/category/${slug}`);
    return result?.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const apiGetProducts = async (slug: string) => {
  try {
    const result = await axiosInstance.get(`/products/${slug}`);
    return result?.data;
  } catch (error) {
    console.log(error);
    return;
  }
};
export const apiGetProduct = async (slug: string) => {
  try {
    const result = await axiosInstance.get(`/product/${slug}`);
    return result?.data;
  } catch (error) {
    console.log(error);
    return;
  }
};
