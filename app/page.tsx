import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Select defaultValue="blueberry">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">
              <Badge variant="outline">Apple</Badge>
            </SelectItem>
            <SelectItem value="banana">
              <Badge variant="secondary">Banana</Badge>
            </SelectItem>
            <SelectItem value="blueberry">
              <Badge>Blueberry</Badge>
            </SelectItem>
            <SelectItem value="grapes">
              <Badge>Grapes</Badge>
            </SelectItem>
            <SelectItem value="pineapple">
              <Badge>Pineapple</Badge>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button>Hello world</Button>
    </div>
  );
}
