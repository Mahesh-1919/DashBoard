"use client";
import AreaChart from "@/app/components/AreaChart";
import BarChart from "@/app/components/BarChart";
import LineChart from "@/app/components/LineChart";
import PieChart from "@/app/components/PieChart";
import { useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { settingsData } from "@/store/atom";
import TableComponent from "@/app/components/tableComponent";
import { getTotals } from "@/app/actions/action";

type Props = {};

const page = (props: Props) => {
  const data: any = useRecoilValue(settingsData);
  const [totals, setTotals] = React.useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      const result: any = await getTotals();
      setTotals(result[0]);
    };

    fetchData();
  }, []);
  console.log(totals);

  return (
    <div className="flex min-h-screen flex-col  px-4 md:px-8 xl:px-10 py-8 w-full">
      <div className="grid grid-cols-2 w-full gap-4">
        <div className="bg-secondary p-5 text-white rounded-lg font-medium flex justify-center gap-2 items-center">
          TotalPlaced:
          <span className="font-bold text-xl ">{totals.totalPlaced}</span>
        </div>
        <div className="bg-secondary p-5 text-white rounded-lg font-medium flex justify-center gap-2 items-center">
          Total Students :
          <span className="font-bold text-xl ">{totals.totalStudents}</span>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px] my-8">
        {data.passedStudents && (
          <GridItem title=" Students">
            <AreaChart />
          </GridItem>
        )}

        {data.placedStudents && (
          <GridItem title="Placed & Unplaced">
            <BarChart />
          </GridItem>
        )}

        {data.LineChart && (
          <GridItem title="Companies">
            <LineChart />
          </GridItem>
        )}

        {data.Branches && (
          <GridItem title="Branchs">
            <PieChart />
          </GridItem>
        )}
        <div className="md:col-span-2 hidden md:block">
          <GridItem title="Students Data">
            <TableComponent />
          </GridItem>
        </div>
      </div>
    </div>
  );
};

export default page;

function GridItem({ title, children }: any) {
  return (
    <div className="flex flex-col items-center justify-center md:p-4  p-2 border border-slate-900  rounded-xl h-[300px] md:h-[400px] bg-[#111D3C]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
