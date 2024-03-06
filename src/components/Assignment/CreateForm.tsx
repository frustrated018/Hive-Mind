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
import { useContext, useState } from "react";
import { AuthContext } from "@/Auth/AuthProvider";
import axios from "axios";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "@tanstack/react-router";

// TODO: add the status as pending and get the name and email form user

export default function CreateForm() {
  const { user } = useContext(AuthContext);

  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  //! Handling form submisson
  const status = "pending";
  const creator = {
    name: user?.displayName,
    email: user?.email,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setProcessing(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const thumbnail = formData.get("thumbnail") as string;
    const marks = formData.get("marks") as string;
    const difficulty = formData.get("difficulty") as string;
    const due = formData.get("due") as string;
    const Assignment = {
      title,
      description,
      thumbnail,
      marks,
      difficulty,
      due,
      status,
      creator,
    };
    //! Making the Mutation
    try {
      const res = await axios.post("http://localhost:5000/assignments/add", {
        assignment: Assignment,
      });
      if (res.data.insertedId < 1) {
        toast.error("Coudn't create the assignment");
      }
      router.navigate({ to: "/assignments" });
      toast.success("Assignment created successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="max-w-screen-md mx-auto mb-10 lg:mb-20">
      <CardContent>
        <form className="flex flex-col gap-5 py-5" onSubmit={handleSubmit}>
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
            <Input type="url" name="thumbnail" required />
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
          {processing ? (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Processing
            </Button>
          ) : (
            <Button type="submit">Create Assignment</Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
