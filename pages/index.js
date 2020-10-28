
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import CardPost from '../components/CardPost';

export default function Home() {
   return (
      <div>
         <Head>
            <title>Asunción CSS</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />

         <main className="main container">

            <div className="main__header">
               <h2 className="main__title">Blogs</h2>
               <aside className="main__actions">
                  <span className="main__item">
                     <Link href="/">
                        <a className="main__link">Reciente</a>
                     </Link>
                  </span>
                  <span className="main__item">
                     <Link href="/">
                        <a className="main__link">Popular</a>
                     </Link>
                  </span>
               </aside>
            </div>

            <section className="blog">
               <CardPost />
               <CardPost />
               <CardPost />
               <CardPost />
               <CardPost />
               <CardPost />
               <CardPost />
               <CardPost />
               <CardPost />
            </section>

         </main>

      </div>
   )
}
