import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

// TODO: add the status as pending and get the name and email form user

export default function CreateForm() {
  return (
    <Card className="max-w-screen-md mx-auto mb-10 lg:mb-20">
      <CardContent>
        <form className="flex flex-col gap-5 py-5">
          <div className="space-y-1">
            <Label className="text-xl font-semibold" htmlFor="title">
              Title:
            </Label>
            <Input type="text" name="title" required />
          </div>
          <div className="space-y-1">
            <Label className="text-xl font-semibold" htmlFor="description">
              Description:
            </Label>
            <Textarea name="description" required rows={8} />
          </div>
          <div className="space-y-1">
            <Label className="text-xl font-semibold" htmlFor="thumbnail">
              Thumbnail URL:
            </Label>
            <Input type="text" name="thumbnail" required />
          </div>
          <div className="space-y-1">
            <Label className="text-xl font-semibold" htmlFor="marks">
              Marks:
            </Label>
            <Input type="number" name="marks" required />
          </div>
          <div className="space-y-1">
            <Label className="text-xl font-semibold" htmlFor="difficulty">
              Difficulty:
            </Label>
            <Select name="difficulty" required>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label className="text-xl font-semibold" htmlFor="due">
              Due Date:
            </Label>
            <Input type="date" name="due" />
          </div>
          <Button type="submit">Create Assignment</Button>
        </form>
      </CardContent>
    </Card>
  );
}
