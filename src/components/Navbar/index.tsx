import { GridOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "/", active: true },
		{ title: "Our Features", path: "/", active: false },
		{ title: "About Us", path: "/", active: false },
		{ title: "Our Plans", path: "/", active: false },
		{ title: "Our blog", path: "/", active: false },
		{ title: "Contact Us", path: "/", active: false },
	];
	return (
		<div className="z-[2] w-full my-auto mx-0 h-16 md:px-[200px] px-12 py-10 flex items-center justify-between absolute top-[20px]">
			<span className="text-white text-[40px] font-semibold"></span>
			<div className="md:flex hidden items-center gap-7">
				{navLinks.map((navLink) => {
					return (
						<Link
							to={navLink.path}
							key={navLink.title}
						>
							<span
								className={`font-medium ${navLink.active ? "text-blue-400" : "text-white"}`}
							>
								{navLink.title}
							</span>
						</Link>
					);
				})}
				<button className="bg-blue-400 rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-white hover:text-blue-400">
					Book Now
				</button>
			</div>
			<div className="cursor-pointer md:hidden block">
				<GridOutline color="#fff" />
			</div>
		</div>
	);
};

export default Navbar;
