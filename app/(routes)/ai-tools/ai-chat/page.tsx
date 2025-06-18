"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React, { useState } from "react";
import EmptyState from "./_components/EmptyState";
import axios from "axios";

function page() {
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSend = async () => {
    setLoading(true);
    const result = await axios.post("/api/ai-career-chat-agent", {
      userInput: userInput,
    });
    console.log(result.data);
    setLoading(false);
  };
  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48">
      <div className="flex items-center justify-between gap-8">
        <div>
          <h2 className="font-bold text-lg">AI Career Q/A Chat</h2>
          <p>
            Smarter career decisons start here - get tailored advice, real-time
            market insights
          </p>
        </div>
        <Button>+ New Chat</Button>
      </div>
      <div className="flex flex-col h-[75vh]">
        <div className="mt-5">
          {/* Empty State options */}
          <EmptyState
            selectedQuestion={(question: string) => setUserInput(question)}
          />
        </div>

        <div className="flex-1">{/* Message List */}</div>

        <div className="flex justify-between items-center gap-6">
          {/* Input Field */}
          <Input
            placeholder="Type here"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button onClick={onSend} disabled={loading}>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
