"use client";

import React from 'react';
import {
  Tooltip,
  TooltipContent,
} from "@/components/ui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export default function CustomTooltip({ children, content }: TooltipProps) {
  return (
    <Tooltip>
      {children}
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
} 