import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const PageHeader = ({
  eyebrow,
  title,
  description,
}: PageHeaderProps) => {
  return (
    <div className="bg-white border-b px-4 lg:px-12 py-12 lg:py-16 flex flex-col gap-6">
      <div className="px-2 py-1 border bg-pink-400 w-fit">
        <p className="text-sm font-medium">{eyebrow}</p>
      </div>
      <h1
        className={cn(
          "text-4xl lg:text-6xl font-semibold max-w-3xl",
          poppins.className
        )}
      >
        {title}
      </h1>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
        {description}
      </p>
    </div>
  );
};
