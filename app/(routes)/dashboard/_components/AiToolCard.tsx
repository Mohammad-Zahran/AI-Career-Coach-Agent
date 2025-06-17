import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface TOOL {
  name: string;
  desc: string;
  icon: string;
  button: string;
  path: string;
}

type AIToolProps = {
  tool: TOOL;
};

function AiToolCard({ tool }: AIToolProps) {
  return (
    <div>
      <Image src={tool.icon} width={50} height={50} alt={tool.name} />
      <h2>{tool.name}</h2>
      <p>{tool.desc}</p>
      <Button>{tool.button}</Button>
    </div>
  );
}

export default AiToolCard;
