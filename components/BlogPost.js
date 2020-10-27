
import Navbar from '../components/Navbar';

export default function BlogPost() {
   return (
      <article className="blogpost">

         <Navbar />

         <h3 className="blogpost__title">Content Ideas to Elevate Your Creative Thinking</h3>
         <hr />
         <small className="blogpost__date">Aug 20, 2020</small>

         <p className="blogpost__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic sunt placeat rerum tempore necessitatibus deserunt magni velit! Tempore hic voluptate explicabo quibusdam nostrum possimus error quisquam, repellat minima, velit nobis magnam fuga, molestias temporibus.</p>
         <p className="blogpost__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic sunt placeat rerum tempore necessitatibus deserunt magni velit! Tempore hic voluptate explicabo quibusdam nostrum possimus error quisquam, repellat minima, velit nobis magnam fuga, molestias temporibus.</p>

         <div className="blogpost__media">
            <img src="/blogpost1.jpg" alt="" />
         </div>

         <p className="blogpost__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic sunt placeat rerum tempore necessitatibus deserunt magni velit! Tempore hic voluptate explicabo quibusdam nostrum possimus error quisquam, repellat minima, velit nobis magnam fuga, molestias temporibus.</p>
         <p className="blogpost__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, hic sunt placeat rerum tempore necessitatibus deserunt magni velit! Tempore hic voluptate explicabo quibusdam nostrum possimus error quisquam, repellat minima, velit nobis magnam fuga, molestias temporibus.</p>

      </article>
   );
}