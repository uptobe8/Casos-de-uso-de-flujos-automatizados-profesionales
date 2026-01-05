"use client"

import { useState } from "react"
import { PromptGuide } from "@/components/prompt-guide"
import { AnimatedAvatar } from "@/components/animated-avatar"
import { AiChat } from "@/components/ai-chat"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <PromptGuide />
      <AnimatedAvatar isChatActive={isChatOpen} onAvatarClick={() => setIsChatOpen(true)} />
      <AiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}
