'use client'

import Image from 'next/image'
import Hero from '@/components/Hero'
import Vision from '@/components/Vision'
import { FAQSection as FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { DownloadButton } from '@/components/DownloadButton'
import { FeatureCard } from '@/components/FeatureCard'

const FEATURES = [
  {
    title: 'Smart Filtering',
    description: 'Choose what you want to see in your chats. Our AI helps you block spam, hide unwanted content, and keep your conversations focused.',
    image: '/features/moderation.png',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Your Privacy First',
    description: 'Your messages are always private and secure. We use strong encryption to keep your conversations safe from prying eyes.',
    image: '/features/security.png',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'All Your Chats in One Place',
    description: 'Connect with friends on WhatsApp, Telegram, LINE, and more - all from one app. No more switching between apps!',
    image: '/features/bridges.png',
    gradient: 'from-orange-500 to-red-500'
  }
]

const FAQS = [
  {
    question: 'What is VOLOS?',
    answer: `VOLOS is a universal chat app. With VOLOS, you can send and receive messages to friends, family and colleagues on 14 different chat networks, all from a single app.\n\nVOLOS is free to use, with optional paid subscription. You can use VOLOS on all your devices — your messages sync seamlessly. Our apps are available on Android, iPhone, iPad, ChromeOS, macOS, Windows and Linux.\n\nOur approach to chat is different than the other big chat apps. Chat is our only business. We love chat and are 100% dedicated to making the best chat app on earth.`
  },
  {
    question: 'Which networks can be used in VOLOS?',
    answer: `VOLOS supports:\n\n- WhatsApp\n- Facebook Messenger\n- Twitter\n- Instagram\n- iMessage\n- Android Messages (SMS)\n- Telegram\n- Signal\n- Discord\n- Slack\n- Google Chat\n- IRC\n- Matrix\n- LinkedIn`
  },
  {
    question: 'How much does VOLOS cost?',
    answer: `VOLOS is free to use, with an optional paid subscription.\n\nYou can use VOLOS on all your devices — messages sync seamlessly. There are VOLOS apps for Android, iPhone, iPad, ChromeOS, macOS, Windows and Linux.`
  },
  {
    question: 'Is VOLOS affiliated with any other chat networks?',
    answer: `No. VOLOS is an entirely independent software product, with no relationship to, or endorsement by, Apple, Google, Facebook, or any other supported chat networks.`
  }
]

const FOOTER_LINKS = {
  Company: [
    { name: 'Blog', href: '#' },
    { name: 'Mission', href: '#' },
    { name: 'Work With Us', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Media/Press Inquiries', href: '#' },
  ],
  App: [
    { name: 'Download', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Help', href: '#' },
    { name: 'System status', href: '#' },
    { name: 'Self-host', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  Legal: [
    { name: 'Terms', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Security', href: '#' },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <Hero />
      {/* Vision */}
      <Vision />
      {/* Features */}
      <div className="py-24 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* MIT Section */}
      <div className="py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Image 
              src="/mit-media-lab.png" 
              alt="MIT Media Lab" 
              width={40} 
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">MIT Media Lab</span>
          </div>
          <p className="text-lg text-gray-300">
            Spin out by researchers from MIT Media Lab who build cool tech projects.
          </p>
        </div>
      </div>

      {/* Download CTA */}
      <div className="py-16 px-4 sm:px-6 text-center bg-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Join us in redefining communication
        </h2>
        <DownloadButton />
      </div>

      {/* FAQs */}
      <FAQ faqs={FAQS} />

      {/* Footer */}
      <Footer />
    </div>
  )
}
