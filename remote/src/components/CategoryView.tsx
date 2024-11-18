import { Link } from "@tanstack/react-router";
import { ICategoryView } from "../config/types";

import "../index.css";

const CategoryView = ({ data }: { data: ICategoryView[] }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {data.length
        ? data.map((item, i) => {
            return (
              <div key={`${i}-${item.name}`}>
                <div className="relative mb-4">
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] m-gradient-border-start"></span>
                  <h4 className="m-gradient-text u-text-clip-bg font-semibold text-base w-fit">{item.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.subItems?.map((subItem) => {
                    return (
                      <Link
                        href={`${subItem.link}`}
                        key={subItem.slug}
                        className="w-24 text-center group cursor-pointer"
                      >
                        <img
                          src={subItem.image_url}
                          className="animate-lazy w-16 aspect-square mx-auto mb-1 grayscale brightness-75 group-hover:grayscale-0 transition-all duration-300 group-hover:brightness-100"
                        />
                        <div className="text-xs">{subItem.name}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })
        : Array(3)
            .fill(0)
            .map((item, i) => {
              return (
                <div key={`loading-${item + i}`}>
                  <div className="w-52 h-6 animate-lazy mb-4"></div>
                  <div className="flex flex-wrap gap-2">
                    {Array(20)
                      .fill(0)
                      .map((subItem, j) => {
                        return (
                          <div key={subItem + j} className="w-24">
                            <div className="animate-lazy w-16 aspect-square mx-auto mb-1 " />
                            <div className="animate-lazy w-20 h-4 mx-auto">{subItem.name}</div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
    </div>
  );
};

export default CategoryView;
