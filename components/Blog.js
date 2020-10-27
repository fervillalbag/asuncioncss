
import Link from 'next/link';

export default function Blog() {
   return (
      <Link href="/blog">
         <a className="blog__link">
            <div className="blog__item">
               <h3 className="blog__title">Content Ideas to Elevate Your Creative Thinking</h3>
               <p className="blog__description">Reader will be distracted by the readable content of a page when looking at its layout.</p>
               <small className="blog__date">Aug 20, 2020</small>
            </div>
         </a>
      </Link>
   );
} 