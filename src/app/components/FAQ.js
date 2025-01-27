'use client'

import { useState } from 'react'

export function FAQSection({ faqs }) {
  return (
    <div className="py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-[#7C3AED]">FAQs</h2>
          <button className="inline-flex items-center gap-2 text-[#7C3AED] hover:text-purple-700">
            See All
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQ key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQ({ question, answer }) {
  const paragraphs = answer.split('\\n').filter(p => p.trim() !== '')
  
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h3 className="text-[22px] font-semibold text-[#7C3AED] mb-6">{question}</h3>
      <div className="text-[15px] leading-relaxed text-gray-600 space-y-4">
        {paragraphs.map((paragraph, index) => {
          if (paragraph.startsWith('-')) {
            // Handle list items
            const items = paragraph.split('\\n').filter(item => item.trim() !== '')
            return (
              <div key={index} className="pl-4 space-y-2">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span>{item.replace('-', '').trim()}</span>
                  </div>
                ))}
              </div>
            )
          }
          return <p key={index} className="text-gray-600">{paragraph}</p>
        })}
      </div>
    </div>
  )
}
