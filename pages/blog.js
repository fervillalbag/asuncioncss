
import Head from 'next/head';
import BlogPost from "../components/BlogPost";

export default function Blog() {
   return (
      <div>

         <Head>
            <title>Create Next App</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="container">
            <BlogPost />
         </div>

      </div>
   );
}