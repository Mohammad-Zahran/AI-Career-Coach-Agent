import { NextResponse } from "next/server";
import { db } from "./../../../configs/db";
import { HistoryTable } from "@/configs/schema";
import { currentUser } from "@clerk/nextjs/server";

// This route handles the POST request to create a new history record
export async function POST(req: any) {
  const { content, recordId } = await req.json();
  const user = await currentUser();
  try {
    const result = await db.insert(HistoryTable).values({
      recordId: recordId,
      content: content,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });
  } catch (e: any) {
    return NextResponse.json(e);
  }
}
