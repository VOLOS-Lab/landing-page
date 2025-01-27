const FEATURES = [
  {
    title: 'Securely connect your chat networks',
    image: '/features/networks.png',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'New Pro inbox reading mode',
    image: '/features/inbox.png',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Updated, clean & modern chat',
    image: '/features/chat.png',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Works across desktop & iOS',
    image: '/features/devices.png',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Never miss a chat with native bubbling',
    image: '/features/notifications.png',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Get things done on foldables',
    image: '/features/foldable.png',
    gradient: 'from-violet-500 to-purple-500',
  },
]

function FeatureCard({ title, image, gradient }) {
  return (
    <div className="bg-background-card rounded-2xl shadow-card overflow-hidden">
      <div className={`p-6 h-48 bg-gradient-to-br ${gradient}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-primary-text">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}
