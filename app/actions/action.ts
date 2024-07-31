"use server";
import { db } from "@/lib/db";

export async function getStudentdData() {
  try {
    const res = await db.student.findMany({});

    return res;
  } catch (error) {
    console.log("Error submitting student data", error);
  }
}

export async function postStudentData({
  name,
  branch,
  placement,
  pass,
  year,
}: any) {
  const placements = placement ? "placed" : "notPlaced";
  const score = pass ? "pass" : "fail";

  try {
    const res = await db.student.create({
      data: {
        name,
        Branch: branch,
        placed: placements,
        score: score,
        passedOut: year,
      },
    });

    return res;
  } catch (error) {
    console.log("Error submitting student data", error);
  }
}

export const TotalStudentsIncrement = async () => {
  const id = "66a9fc9f6a4a3487ee0b6";

  const res = await db.metaData.update({
    where: { id },
    data: {
      totalStudents: {
        increment: 1,
      },
    },
  });
  return res;
};

export const TotalPlacedIncrement = async () => {
  const res = await db.metaData.update({
    where: {
      id: "66a9fc9f6a4a3487ee0b6cb5",
    },
    data: {
      totalPlaced: {
        increment: 1,
      },
    },
  });
  return res;
};

export const getTotals = async () => {
  const res = await db.metaData.findMany();
  return res;
};
