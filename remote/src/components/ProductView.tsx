import { IProductView } from "../config/types";

import "../index.css";

const ProductView = ({ data }: { data?: IProductView }) => {
  return (
    <>
      {data ? (
        <div className="flex gap-8 p-4 mb-12">
          <img
            src={data?.image_url}
            className="animate-lazy w-40 aspect-square cursor-pointer grayscale brightness-50 hover:grayscale-0 transition-all duration-300 hover:brightness-100"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-lg leading-tight font-medium text-zinc-100">{data?.name}</h4>
            <div className="text-sm leading-tight ">{data?.description}</div>
            <div className="text-2xl leading-tight font-medium text-zinc-200">${data?.price}</div>
          </div>
        </div>
      ) : (
        <div className="flex gap-8 p-4 mb-12">
          <div className="animate-lazy w-40 aspect-square cursor-pointer" />
          <div className="flex flex-col gap-2">
            <div className="animate-lazy h-6 w-56"></div>
            <div className="animate-lazy h-4 w-80"></div>
            <div className="animate-lazy h-8 w-20"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductView;
