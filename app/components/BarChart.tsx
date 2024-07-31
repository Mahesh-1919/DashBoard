"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const placedData = [
  {
    year: "2019",
    Placed: 4000,
    Unplaced: 2400,
  },
  {
    year: "2020",
    Placed: 3000,
    Unplaced: 1398,
  },
  {
    year: "2021",
    Placed: 4800,
    Unplaced: 2000,
  },
  {
    year: "2022",
    Placed: 3908,
    Unplaced: 2780,
  },
  {
    year: "2023",
    Placed: 4800,
    Unplaced: 1890,
  },
  {
    year: "2024",
    Placed: 3800,
    Unplaced: 2390,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={placedData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Placed" fill="#2563eb" />
        <Bar dataKey="Unplaced" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-blue-400">
          Placed:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Unplaced:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};
