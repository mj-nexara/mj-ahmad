import React from 'react';
import '../styles/QuranGallery/QuranGallery.css'; // Reuse styling

const QuranPagesPreview = () => (
  <main className="gallery-container">
    <h2>📖 কোরআনের ভিতরের পৃষ্ঠা — পাড়া ভিত্তিক প্রিভিউ</h2>
    <p>
      এই পেইজে MJ Ahmad-এর CLI দ্বারা মুদ্রিত কোরআন মাজিদের ভিতরের পৃষ্ঠা গুলো পাড়া ভিত্তিক PDF আকারে উপস্থাপন করা হয়েছে। প্রতিটি পাড়া একটি ইবুকের মতো সুন্দরভাবে দেখা যাবে।
    </p>

    {[
      {
        title: '১ম পাড়া — আলিফ লাম মীম',
        file: 'para1.pdf',
        link: '/pdf/quran/Al-Quran-Para-1-3.pdf',
      },
      {
        title: '২য় পাড়া — সায়াকুল',
        file: 'para2.pdf',
        link: '/pdf/quran/para2.pdf',
      },
      {
        title: '৩য় পাড়া — তিলকাল রুসুল',
        file: 'para3.pdf',
        link: '/pdf/quran/para3.pdf',
      },
    ].map((para, index) => (
      <section key={index}>
        <h3>{para.title}</h3>
        <div className="pdf-preview">
          <iframe
            src={para.link}
            width="100%"
            height="600px"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            title={para.title}
          />
        </div>
        <div className="show-more">
          <a href={para.link} target="_blank" rel="noopener noreferrer" className="show-more-button">
            পূর্ণ PDF দেখুন →
          </a>
        </div>
      </section>
    ))}

    <h4>🛡️ MJ-এর বার্তা:</h4>
    <blockquote>
      “এই পৃষ্ঠাগুলো শুধু পাঠ নয়—এগুলো একটি জাতির নৈতিক দণ্ড। প্রতিটি পাড়া একটি স্মারক, একটি উত্তরাধিকার।”
    </blockquote>
  </main>
);

export default QuranPagesPreview;
