import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48">
      <div className="flex items-center justify-between gap-8">
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
      <div className="flex flex-col h-[75vh]">
        <div>{/* Empty State options */}</div>

        <div className="flex-1">{/* Message List */}</div>

        <div className="flex justify-between items-center gap-6">
          {/* Input Field */}
          <Input placeholder="Type here" />
          <Button>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
