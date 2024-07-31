"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const productSales = [
  {
    year: "2019",
    pass: 9000,
    fail: 2400,
  },
  {
    year: "2020",
    pass: 3678,
    fail: 2474,
  },
  {
    year: "2021",
    pass: 3653,
    fail: 5654,
  },
  {
    year: "2022",
    pass: 7654,
    fail: 2400,
  },
  {
    year: "2023",
    pass: 764,
    fail: 3321,
  },
  {
    year: "2024",
    pass: 8000,
    fail: 2400,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <defs>
          <linearGradient id="colorPass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorFail" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis />
        <XAxis dataKey="year" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="pass"
          stroke="#2563eb"
          fill="url(#colorPass)"
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="fail"
          stroke="#7c3aed"
          fill="url(#colorFail)"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-blue-400">
          pass:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Fail:
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
