import "./globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 m-4">
      <div>
        <Button variant="elevated">I am a button</Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="I am a textarea" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
