
import Link from 'next/link';

export default function Navbar() {
   return (
      <nav className="navbar container">
         <div className="logo">
            <Link href="/">
               <a className="logo__link">
                  Asunción CSS
               </a>
            </Link>
         </div>
         <button className="bars">
            <img className="bars__image" src="/menu.png" alt="menu" />
         </button>
      </nav>
   )
}