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
import { getStudentdData } from "@/app/actions/action";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

export default function TableDemo() {
  const [res, setRes] = React.useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result: any = await getStudentdData();

      setRes(result);
    };

    fetchData();
  }, []);
  console.log(res);
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
        {res.map((data: any) => (
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
