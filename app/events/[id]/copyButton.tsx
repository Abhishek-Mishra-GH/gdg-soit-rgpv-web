"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function CopyButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)

        
    }

    return (
        <div className=" w-full flex items-center justify-between px-4 py-2 border border-neutral-200 rounded-xl bg-white shadow-sm translate-y-3">

            {/* Left Side (Text + Label) */}
            <div className="flex items-center gap-2">


                <span className="text-xs tracking-wide text-neutral-800">
                    USE CODE:
                </span>


                <span className="font-semibold tracking-wide text-neutral-800">
                    {code}
                </span>

            </div>

            {/* Copy Button */}
            <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-neutral-100 transition"
            >
                {copied ? (
                    <Check className="w-5 h-5 text-green-600" />
                ) : (
                    <Copy className="w-5 h-5 text-neutral-600" />
                )}
            </button>

        </div>
    )
}