const FAQS = [
  {
    question: 'What is Beeper?',
    answer: `Beeper is a universal chat app. With Beeper, you can send and receive messages to friends, family and colleagues on 14 different chat networks, all from a single app.

Beeper is free to use, with an optional paid subscription. You can use Beeper on all your devices — your messages sync seamlessly. Our apps are available on Android, iPhone, iPad, ChromeOS, macOS, Windows and Linux.

Our approach to chat is different than the other big chat apps. Chat is our only business. We love chat and are 100% dedicated to making the best chat app on earth.`
  },
  {
    question: 'Which networks can be used in Beeper?',
    answer: `Beeper supports:
- WhatsApp
- Facebook Messenger
- Twitter
- Android SMS
- Google Messages (SMS/RCS)
- Telegram
- Signal
- Matrix
- Slack
- Google Chat
- Instagram
- IRC (Libera.chat)
- Discord
- LinkedIn`
  },
  {
    question: 'Is Beeper affiliated with any other chat networks?',
    answer: 'No, Beeper is an entirely independent software product, with no relationship to, or endorsement by, Apple, Google, Facebook, or any other supported chat networks.'
  }
]

function FAQItem({ question, answer }) {
  return (
    <div className="bg-background-card rounded-xl p-6 shadow-card">
      <h3 className="text-lg font-medium text-primary-text mb-4">
        {question}
      </h3>
      <div className="text-base text-gray-600 whitespace-pre-line">
        {answer}
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="py-24 px-4 bg-background-light">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-primary-text">FAQs</h2>
          <button className="text-primary-text bg-white px-4 py-2 rounded-full shadow-sm">
            See All →
          </button>
        </div>
        
        <div className="space-y-6">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </div>
  )
}
