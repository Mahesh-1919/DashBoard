"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  {
    year: "2019",
    MNC: 400,
    Startup: 24,
  },
  {
    year: "2020",
    MNC: 300,
    Startup: 98,
  },
  {
    year: "2021",
    MNC: 980,
    Startup: 20,
  },
  {
    year: "2022",
    MNC: 390,
    Startup: 80,
  },
  {
    year: "2023",
    MNC: 480,
    Startup: 189,
  },
  {
    year: "2024",
    MNC: 300,
    Startup: 390,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="MNC" stroke="#3b82f6" />
        <Line type="monotone" dataKey="Startup" stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-blue-400">
          Top MNC:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          StartUps:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};
