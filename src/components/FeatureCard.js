import Image from 'next/image'

export function FeatureCard({ title, description, image, gradient = 'from-purple-500 to-blue-500' }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className={`p-6 h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        {/* <Image 
          src={image} 
          alt={title} 
          width={200} 
          height={200} 
          className="w-full h-full object-contain"
          priority
        /> */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        {description && (
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}
