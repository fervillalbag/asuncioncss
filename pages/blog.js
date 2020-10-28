
import Head from 'next/head';
import BlogPost from "../components/BlogPost";
import Navbar from '../components/Navbar';

export default function Blog() {
   return (
      <div>

         <Head>
            <title>Blog</title>
            <link
               href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&display=swap"
               rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />
         <main className="container container--blogpost">

            <div>
               <BlogPost />
            </div>
         </main>

      </div>
   );
}