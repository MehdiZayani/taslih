import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function nav() {
	const titleweb = "Lucci Design";
	return (
		<div className="Navbara">
			<nav className="flex flex-warp justify-between p-8 sticky top-0 h-8">
				<Link href="../homepage/homepage">
					<a>
						<h1 className="-ml-2.5 -m-0.5 bg-white flex flex-warp justify-between sticky top-0 h-8 font-body text-xl font-bold no-underline">{titleweb}</h1>
					</a>
				</Link>

				<div className="flex flex-warp">
					<Link href="/">
						<a>
					        <p className="text-lg mr-5 cursor-pointer">Cuisine</p>
					    </a>
					</Link>
					<Link href="/">
						<a>
							<p className="text-lg mr-5 cursor-pointer">Rangement</p>
						</a>
					</Link>
					<Link href="/">
						<a>
							<p className="text-lg mr-5 cursor-pointer">Chaises</p>
						</a>
					</Link>
					<Link href="/">
						<a>
						     <p className="text-lg mr-5 cursor-pointer	">Tables</p>
						</a>
					</Link>
					<Link href="/salon">
						<a>
							<p className="text-lg mr-5 cursor-pointer	">Salon</p>
						</a>
						</Link>
					<Link href="/">
						<a>
						    <p className="text-lg mr-5 cursor-pointer	">Décoration</p>
						</a>
					</Link>
					<Link href="/">
						<a>
						    <p className="text-lg mr-5 cursor-pointer	">Autres</p>
						</a>
					</Link>
					<Link href="/">
						<a>
							<p className="text-lg mr-5 cursor-pointer	">Notre vision</p>
						</a>
					</Link>
						   
					<form>
						<input type="search" placeholder="Rechercher" className="border-white border-none outline-none mt-1 mr-4 ml-6"/>
					</form>
					<Link href="../index">
						<a>
							<FontAwesomeIcon icon={faUserCircle}  className="mr-5"/>
						</a>
					</Link>
					<Link href="/Cart">
						<a>
							<FontAwesomeIcon icon={faShoppingCart} className="mr-4"/>
						</a>
					</Link>
				</div>
			</nav>
		</div>
	);
}
