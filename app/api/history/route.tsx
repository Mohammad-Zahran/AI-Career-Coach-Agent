import { NextResponse } from "next/server";
import { db } from "./../../../configs/db";
import { HistoryTable } from "@/configs/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

// This route handles the POST request to create a new history record
export async function POST(req: any) {
  const { content, recordId } = await req.json();
  const user = await currentUser();
  try {
    const result = await db.insert(HistoryTable).values({
      recordId: recordId,
      content: content,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: new Date().toString(),
    });
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json(e);
  }
}

export async function PUT(req: any) {
  const { content, recordId } = await req.json();
  try {
    const result = await db
      .update(HistoryTable)
      .set({
        content: content,
      })
      .where(eq(HistoryTable.recordId, recordId));
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json(e);
  }
}
