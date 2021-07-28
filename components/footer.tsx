import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function footer(){
    return(
        <div>
            <footer className='-mt24 bg-black text-white flex flex-warp justify-between p-8 bottom-0'>
         <p className="copyright ">&copy; Contactez-nous au 51838528</p>
     <div className="social-media flex">
         <Link href=""> 
            <a>
              <FontAwesomeIcon icon={faFacebook}  className="mr-5 float-left text-left"/>
            </a>
         </Link>
         <Link href="">
           <a>
              <FontAwesomeIcon icon={faInstagram} className="mr-5 float-left text-left"/>
           </a>
         </Link>
     </div>
    </footer>
        </div>
    )
} 