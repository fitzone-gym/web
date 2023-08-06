import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../db/mysql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      console.log("API Endpoint called"); // for debugging
      const [workingMember] = await pool.query(
        "SELECT COUNT(*) as count FROM members WHERE state=0"
      );
      const workingMembers = workingMember[0].count;

      const [courseCompleteMember] = await pool.query(
        "SELECT COUNT(*) as count FROM members WHERE state=1"
      );
      const courseCompleteMembers = courseCompleteMember[0].count;

      const [trainer] = await pool.query(
        "SELECT COUNT(*) as count FROM trainers"
      );
      const trainerCount = trainer[0].count;

      console.log("Member count:", workingMembers); // for debugging
      console.log("Course complete Member count:", courseCompleteMembers); // for debugging
      console.log("Trainer count:", trainerCount); // for debugging

      res
        .status(200)
        .json({ workingMembers, courseCompleteMembers, trainerCount });
    } catch (error) {
      console.error("Error fetching member count:", error);
      res.status(500).json({ error: "Unable to fetch member count" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
