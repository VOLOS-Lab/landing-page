'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function DownloadButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-900 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/download.svg" alt="" width={20} height={20} className="invert" />
        <span>Download</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg p-2">
          <Link href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <Image src="/platforms/apple.svg" alt="" width={20} height={20} />
            <span className="text-sm">iOS</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <Image src="/platforms/android.svg" alt="" width={20} height={20} />
            <span className="text-sm">Android</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md">
            <Image src="/platforms/desktop.svg" alt="" width={20} height={20} />
            <span className="text-sm">Desktop</span>
          </Link>
        </div>
      )}
    </div>
  )
}
