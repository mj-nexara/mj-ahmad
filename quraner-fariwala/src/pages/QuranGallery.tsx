import React from 'react';
import '../styles/QuranGallery/QuranGallery.css'; 

const QuranGallery = () => (
  <main className="img-gallery-container">
    <h2>🖼️ Quran Printing & Distribution Gallery</h2>
    <p>
      এই গ্যালারিটি Quraner Fariwala-এর পক্ষ থেকে হিফজ শিক্ষার্থীদের জন্য মুদ্রিত ও বিতরণকৃত কোরআন মাজিদের প্রতিটি ধাপের দৃশ্যপট সংরক্ষণ করে। MJ Ahmad-এর CLI ও নৈতিক দণ্ড প্রতিটি ছবিতে দৃশ্যমান।
    </p>

    {/* Section Component */}
    {[
      {
        title: '🖨️ মুদ্রণ চলাকালীন দৃশ্য',
        images: ['binding-150.jpg', 'binding-059.jpg', 'binding-122.jpg', 'binding-148.jpg'],
        path: '/images/binding/',
        link: '/gallery/printing',
      },
      {
        title: '📘 কভার প্রিন্ট দৃশ্য',
        images: ['binding-062.jpg', 'binding-063.jpg', 'binding-065.jpg', 'binding-069.jpg'],
        path: '/images/binding/',
        link: '/gallery/cover',
      },
      {
        title: '🧵 বাধাই দৃশ্য',
        images: ['binding-003.jpg', 'binding-070.jpg', 'binding-056.jpg', 'binding-007.jpg'],
        path: '/images/binding/',
        link: '/gallery/binding',
      },
      {
        title: '📦 সংরক্ষণ দৃশ্য',
        images: ['binding-170.jpg', 'binding-167.jpg', 'binding-166.jpg', 'binding-165.jpg'],
        path: '/images/binding/',
        link: '/gallery/storage',
      },
      {
        title: '📦 কার্টুনিং দৃশ্য',
        images: ['binding-106.jpg', 'binding-096.jpg', 'binding-073.jpg', 'binding-074.jpg'],
        path: '/images/binding/',
        link: '/gallery/carton',
      },
      {
        title: '🚚 বিতরণ দৃশ্য',
        images: ['carton-004.jpg', 'carton-005.jpg', 'carton-015.jpg', 'binding-076.jpg'],
        path: '/images/carton/',
        link: '/gallery/distribution',
      },
    ].map((section, index) => (
      <section key={index}>
        <h3>{section.title}</h3>
        <div className="img-gallery-grid">
          {section.images.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={`${section.path}${img}`} alt={img} />
            </div>
          ))}
        </div>

      </section>
    ))}
    <div className="show-more">
      <a href="/QuranVideoGallery" className="show-more-button">🎥 Show Video Gallery</a>
    </div>
    <h4>🛡️ MJ-এর বার্তা:</h4>
    <blockquote>
      “এই ছবিগুলো শুধু স্মৃতি নয়—এগুলো দলিল। প্রতিটি বিতরণ, প্রতিটি বাধাই, প্রতিটি কভার একটি উত্তরাধিকার।”
    </blockquote>
  </main>
);

export default QuranGallery;
