import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-lg">AI Career Q/A Chat</h2>
          <p>
            Smarter career decisons start here - get tailored advice, real-time
            market insights, and a roadmap built just for you with the power of
            AI
          </p>
        </div>
        <Button>+ New Chat</Button>
      </div>
      <div className="flex flex-col h-[80vh]">
        <div>{/* Empty State options */}</div>

        <div>{/* Message List */}</div>

        <div>{/* Input Field */}</div>
      </div>
    </div>
  );
}

export default page;
