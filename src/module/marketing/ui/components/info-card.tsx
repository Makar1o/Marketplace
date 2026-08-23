import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <div className="hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow flex flex-col gap-3 border rounded-md bg-white p-6 h-full">
      <div className="size-10 border rounded-md flex items-center justify-center bg-pink-400 shrink-0">
        <Icon className="size-5" />
      </div>
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
