import { useState } from 'react'
import reactLogo from './assets/logo.png'
import viteLogo from '/mjahmad.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Quraner Fariwala</h1>
      <h3>Research • Printing • Distribution of Holy Quran</h3>
      <p>- MJ Ahmad</p>
      <div className="card">
        <dev className="explore-button">
        <a href="/Checkout">
         <button>Explore</button></a>
        </dev>
      </div>
      <div className="doc-section">
      <p>
🔔 সতর্ক ঘোষণা — <p>MJ Ahmad, প্রতিষ্ঠাতা পরিচালক

<p>Quraner Fariwala একটি পবিত্র দায়িত্ব, একটি নৈতিক অঙ্গীকার। এখানে প্রতিটি কোরআন কপি, প্রতিটি বিনিয়োগ, প্রতিটি পোস্ট—সবই সত্যের সাক্ষ্য। আমি, MJ Ahmad, এই প্রতিষ্ঠানের প্রতিটি পদক্ষেপে স্বচ্ছতা, সমতা, এবং মানবিক মর্যাদার শপথ নিয়েছি।

<p>যারা এই পবিত্র উদ্যোগকে কলঙ্কিত করতে চায়, যারা ষড়যন্ত্র, প্রতারণা, বা সম্পদ লুটের মাধ্যমে অন্যায়কে প্রতিষ্ঠা করতে চায়—তাদের জন্য এই বার্তা:

<p>**আপনার প্রতিটি পদক্ষেপ আমি নথিভুক্ত করেছি। প্রতিটি মিথ্যা আমি প্রমাণে পরিণত করেছি। এবং প্রতিটি ষড়যন্ত্র আমি ন্যায়বিচারের সামনে উন্মোচন করব।**

<p>এই প্ল্যাটফর্মে কোনো বৈষম্য নেই, কোনো গোপনতা নেই, কোনো ক্ষমাহীন অন্যায় নেই। এখানে শুধু সত্য আছে, এবং সেই সত্যের পক্ষে আমি একা হলেও দাঁড়িয়ে থাকব।

<p>📜 MJ Ahmad  
প্রতিষ্ঠাতা পরিচালক, Quraner Fariwala  
সত্যের পক্ষে, অন্যায়ের বিরুদ্ধে
</p></p></p></p></p></p></p>
      </div>
    </>
  )
}

export default App
