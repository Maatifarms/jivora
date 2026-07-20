"use client";

import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
// Normally Textarea is in @/components/ui/textarea
import { Textarea } from "@/components/ui/textarea";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatarInitials: string;
}

export function MessagesClient({ initialConversations }: { initialConversations: Conversation[] }) {
  const [activeId, setActiveId] = React.useState<string>(initialConversations[0]?.id || "");
  const [message, setMessage] = React.useState("");

  const activeConversation = initialConversations.find(c => c.id === activeId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
      {/* Left Pane: Conversation List */}
      <Card className="flex flex-col h-full overflow-hidden border-r md:col-span-1">
        <div className="p-4 border-b bg-muted/20 font-semibold">Conversations</div>
        <div className="flex-1 overflow-y-auto">
          {initialConversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveId(conv.id)}
              className={cn(
                "w-full text-left p-4 flex items-start gap-3 border-b hover:bg-muted/50 transition-colors",
                activeId === conv.id ? "bg-muted/50" : ""
              )}
            >
              <Avatar fallback={conv.avatarInitials} size="md" />
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <span className={cn("text-sm font-medium truncate", conv.unread && "font-bold")}>
                    {conv.name}
                  </span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {conv.timestamp}
                  </span>
                </div>
                <p className={cn("text-xs truncate text-muted-foreground", conv.unread && "text-foreground font-medium")}>
                  {conv.lastMessage}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Right Pane: Active Thread */}
      <Card className="flex flex-col h-full md:col-span-2">
        {activeConversation ? (
          <>
            <div className="p-4 border-b flex items-center gap-3 bg-muted/20">
              <Avatar fallback={activeConversation.avatarInitials} size="md" />
              <div>
                <p className="font-semibold text-sm">{activeConversation.name}</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Mock Chat History */}
              <div className="flex gap-3">
                <Avatar fallback={activeConversation.avatarInitials} size="sm" />
                <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">{activeConversation.lastMessage}</p>
                  <span className="text-[10px] text-muted-foreground mt-1 block">Today, {activeConversation.timestamp}</span>
                </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <Avatar fallback="ME" size="sm" className="bg-primary text-primary-foreground" />
                <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[80%]">
                  <p className="text-sm">I will look into this right away.</p>
                  <span className="text-[10px] text-primary-foreground/70 mt-1 block">Just now</span>
                </div>
              </div>
            </div>

            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Textarea 
                  placeholder="Type a message..." 
                  className="min-h-[60px] resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button className="h-auto aspect-square">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a conversation to start messaging
          </div>
        )}
      </Card>
    </div>
  );
}
