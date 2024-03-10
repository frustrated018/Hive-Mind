import { assignmentData } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export const assignmentColumns: ColumnDef<assignmentData>[] = [
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
    cell: ({ row }) => {
      return (
        <div className="pl-2">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage
              src={row.original?.thumbnail}
              alt="Thumbnail"
              className="h-10 w-10 rounded-sm"
            />
            <AvatarFallback>Thumbnail</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div>{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "creator",
    header: "Creator",
    cell: ({ row }) => {
      return <div>{row.original.creator.email}</div>;
    },
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div className="pl-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2">
              <Button variant="secondary">Update</Button>
              <Button variant="destructive">Delete</Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
