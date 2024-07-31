import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Settings } from "lucide-react";
import SwitchComponent from "@/app/components/switchComponent";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="border-none">
        <Button variant="outline" className="bg-inherit">
          <Settings size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="text-white border-none">
        <SheetHeader>
          <SheetTitle className="text-white">Settings</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 my-6">
          <SwitchComponent title="passedStudents" />
          <SwitchComponent title="placedStudents" />
          <SwitchComponent title="LineChart" />
          <SwitchComponent title="Branches" />
        </div>
        <Link
          href={"/page/studentDetails"}
          className="md:hidden block font-bold my-5 cursor-pointer"
        >
          Student Data
        </Link>
        <SheetFooter className="flex justify-center gap-3">
          <SheetClose asChild>
            <Link href="/page/AddStudent">
              <Button className="bg-white text-background hover:bg-secondary hover:text-white">
                Add Student
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              className="bg-white text-background hover:bg-secondary hover:text-white"
            >
              Save
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
