"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { postStudentData } from "@/app/actions/action";
import { useRouter } from "next/navigation";

function Card() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [placement, setPlaced] = useState(false);
  const [pass, setPass] = useState(false);
  const [year, setYear] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const studentData = {
      name,
      branch,
      placement,
      pass,
      year,
    };

    try {
      await postStudentData(studentData);

      router.push("/page/dashboard");
      alert("Student data submitted successfully");
    } catch (error) {
      console.error("Error submitting student data", error);
    }
  };

  return (
    <div className="flex  justify-center items-center text-white h-[95vh] overflow-y-hidden">
      <form
        onSubmit={handleSubmit}
        className="bg-secondary p-5 rounded-lg flex gap-4 flex-col max-w-md w-full"
      >
        <h1 className="font-bold text-center">Add Student</h1>
        <div className="grid grid-cols-4 items-center">
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            className="col-span-3"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center">
          <Label htmlFor="Branch">Branch:</Label>
          <Input
            type="text"
            id="Branch"
            value={branch}
            className="col-span-3"
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex gap-2 items-center">
            <Label>Placed:</Label>
            <Input
              type="checkbox"
              checked={placement}
              className="h-5 w-5"
              onChange={(e) => setPlaced(e.target.checked)}
            />
          </div>

          <div className="flex gap-2 items-center">
            <Label>Pass:</Label>
            <Input
              type="checkbox"
              checked={pass}
              className="h-5 w-5"
              onChange={(e) => setPass(e.target.checked)}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 items-center">
          <Label className="">Year:</Label>
          <Input
            type="text"
            value={year}
            className="col-span-3"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="bg-white text-background hover:bg-white/50"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Card;
