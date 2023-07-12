"use client";

import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex gap-3 text-slate-600 text-sm mb-4"
            >
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>MZ</AvatarFallback>
                  <AvatarImage src="https://github.com/zagob.png" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>RS</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Usuário" : "AI"}:
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default Chat;
