import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect } from "react";

const data = [
  {
    id: 1,
    name: "John Doe",
    Branch: "CSE",
    passedOut: 2020,
    placed: "Yes",
    score: "Pass",
  },
  {
    id: 2,
    name: "Jane Doe",
    Branch: "ECE",
    passedOut: 2020,
    placed: "No",
    score: "Fail",
  },
  {
    id: 3,
    name: "John Smith",
    Branch: "CSE",
    passedOut: 2020,
    placed: "Yes",
    score: "Pass",
  },
  {
    id: 4,
    name: "Jane Smith",
    Branch: "ECE",
    passedOut: 2020,
    placed: "No",
    score: "Fail",
  },
];
export default function TableDemo() {
  return (
    <Table className="text-white">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="">Name</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead className="">PassedOutYear</TableHead>
          <TableHead className="">Placed</TableHead>
          <TableHead className="">Pass/Fail</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data: any) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.name}</TableCell>
            <TableCell>{data.Branch}</TableCell>
            <TableCell>{data.passedOut}</TableCell>
            <TableCell className="">{data.placed}</TableCell>
            <TableCell className="">{data.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
