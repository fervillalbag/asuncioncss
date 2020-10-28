
import Link from 'next/link';

export default function Post() {
   return (
      <Link href="/post">
         <a className="blog__link">
            <div className="blog__item">
               <main className="blog__body">
                  <h3 className="blog__title">Content Ideas to Elevate Your Creative Thinking</h3>
                  <p className="blog__description">Reader will be distracted by the readable content of a page when looking at its layout.</p>
               </main>
               <footer className="blog__footer">
                  <div className="blog__author">
                     <img src="/profile.jpg" className="blog__profile" />
                     <span className="blog__writer">Fernando Villalba</span>
                  </div>
                  <small className="blog__date">Aug 20, 2020</small>
               </footer>
            </div>
         </a>
      </Link>
   );
} 