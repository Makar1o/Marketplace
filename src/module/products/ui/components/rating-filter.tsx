"use client";

import { StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const ratings = [4, 3, 2, 1] as const;

interface RatingFilterProps {
  value?: number | null;
  onChange: (value: number) => void;
}

export const RatingFilter = ({ value, onChange }: RatingFilterProps) => {
  return (
    <div className="flex flex-col gap-2">
      {ratings.map((rating) => {
        const isActive = value === rating;

        return (
          <button
            key={rating}
            type="button"
            // Clicking the active row clears the filter, same as unchecking a tag.
            onClick={() => onChange(isActive ? 0 : rating)}
            className={cn(
              "flex items-center gap-2 px-2 py-1 -mx-2 rounded-md cursor-pointer text-left hover:bg-neutral-100",
              isActive && "bg-black text-white hover:bg-black"
            )}
          >
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  className={cn(
                    "size-3.5",
                    index < rating
                      ? isActive
                        ? "fill-white"
                        : "fill-black"
                      : "opacity-30"
                  )}
                />
              ))}
            </div>
            <p className="font-medium">& up</p>
          </button>
        );
      })}
    </div>
  );
};
