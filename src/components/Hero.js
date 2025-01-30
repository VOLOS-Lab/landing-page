import Image from 'next/image'
import { DownloadButton } from './DownloadButton'

export default function Hero() {
  return (
    <div className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Background"
          fill
          className="object-cover origin-center"
          style={{ objectPosition: '10% 11%' }}
          priority
        />
        <div className="absolute inset-0 bg-black/75" /> {/* Semi-transparent overlay */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <Image 
          src="/volos-white.svg" 
          alt="VOLOS" 
          width={80}
          height={22} 
          className="mx-auto mb-4 sm:mb-6 w-[80px] sm:w-[100px] h-auto"
          priority
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 text-white leading-tight">
          Chat Smarter,<br className="sm:hidden" /> Not Harder
        </h1>
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center w-full px-4 sm:px-0">
            <DownloadButton />
          </div>
          <p className="text-xs sm:text-sm text-gray-400 px-4 sm:px-0">
            Built by MIT researchers who care about making messaging better for everyone
          </p>
        </div>
      </div>
    </div>
  )
}
