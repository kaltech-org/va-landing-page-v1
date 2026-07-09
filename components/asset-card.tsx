"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AssetCard({
  name,
  context,
  url,
}: {
  name: string
  context?: string
  url: string
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-black/10 bg-white p-4 text-center">
      <div className="flex h-32 w-full items-center justify-center rounded-md bg-[repeating-conic-gradient(#f3f3f3_0%_25%,#ffffff_0%_50%)] bg-[length:16px_16px]">
        <Image
          src={url}
          alt={name}
          width={200}
          height={200}
          unoptimized
          className="max-h-28 w-auto object-contain"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-primary">{name}</p>
        {context && <p className="text-xs text-foreground/50">{context}</p>}
      </div>
      <p className="w-full truncate text-xs text-foreground/60" title={url}>
        {url}
      </p>
      <Button size="sm" variant="outline" onClick={handleCopy} className="w-full">
        {copied ? (
          <>
            <Check className="text-green-600" /> Copied
          </>
        ) : (
          <>
            <Copy /> Copy URL
          </>
        )}
      </Button>
    </div>
  )
}
