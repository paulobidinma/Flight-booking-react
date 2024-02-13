import { CheckmarkCircleOutline } from "react-ionicons";
import mask from "../../assets/images/mask.png";

const About = () => {
	return (
		<div className="w-full md:px-[200px] px-4 flex md:flex-row flex-col items-center justify-between py-10 md:gap-4 gap-16">
			<div
				className="md:w-[700px] md:h-[700px] w-[350px] h-[350px] bg-no-repeat bg-cover relative plane-mask"
				style={{ backgroundImage: `url(${mask})` }}
			/>
			<div className="flex flex-col md:w-[48%] w-full md:px-0 px-4">
				<span className="text-[15px] text-blue-600 font-semibold">ABOUT US</span>
				<span className="text-[30px] font-medium text-gray-700 mt-1">
				Welcome to Luxury Flights 
				</span>
				<p className="max-w-[650px] text-gray-600 leading-7 mt-5">
				We are a team of travel enthusiasts committed to crafting seamless and unforgettable journeys. 
				{/* Our tech-driven approach, passion for travel, and customer-centric focus redefine the way you explore the world. */}
				</p>
				<span className="text-[30px] font-medium text-gray-700 mt-1">
				Why Choose Us? 
				</span>
				<div className="flex flex-col gap-3 mt-5">
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Innovation: Cutting-edge solutions for a seamless booking experience.</span>
					</div>
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Passion for Travel: Creating exceptional journeys for every adventurer.</span>
					</div>
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Customer-Centric: Your satisfaction is our priority.</span>
					</div>
				</div>
				<span className="text-[30px] font-medium text-gray-700 mt-1">
				Our Commitment:
				</span>
				<div className="flex flex-col gap-3 mt-5">
						<span>Transparency, trust, and continuous improvement are at the core of our mission. 
							Join us on a journey where every detail is crafted for extraordinary experiences. 
							Luxury Flights - where travel dreams take flight.</span>
				</div>
				<button className="border-[2px] bg-blue-400 border-blue-400 px-6 py-3 text-white font-semibold rounded-full w-[200px] mt-12 shadow-md hover:bg-white hover:text-blue-400">
					Discover More
				</button>
			</div>
		</div>
	);
};

export default About;
