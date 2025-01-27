export default function Hero() {
  return (
    <div className="text-center py-24 bg-background-light">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-primary-text">
          All your chats in one app
        </h1>
        
        <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <span className="mr-2 text-sm">Download Now</span>
          <span className="text-sm text-gray-500">Free! No waitlist!</span>
          <div className="ml-4 flex gap-2">
            <img src="/android.svg" alt="Android" className="h-5 w-5" />
            <img src="/apple.svg" alt="iOS" className="h-5 w-5" />
            <img src="/windows.svg" alt="Desktop" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
