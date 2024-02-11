import React, { useEffect, useState } from "react";
import { MdCardTravel, MdFlight } from "react-icons/md";
import { IoMdHome, IoMdSearch } from "react-icons/io";
import { BiSolidHotel } from "react-icons/bi";
import HotelCard from "./Components/HotelCard";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { Loader } from "@googlemaps/js-api-loader";

const buttons = [
	{
		title: "Travel",
		icon: <MdCardTravel size={25} />,
	},
	{
		title: "Explore",
		icon: <IoMdSearch size={25} />,
	},
	{
		title: "Flights",
		icon: <MdFlight size={25} />,
	},
	{
		title: "Hotels",
		icon: <BiSolidHotel size={25} />,
	},
	{
		title: "Vacation Rentals",
		icon: <IoMdHome size={25} />,
	},
];

const hotels = [
	{
		image: "https://i.insider.com/5f15f6711918247799320f67?width=700",
		title: "New Delhi",
		price: 6000,
		category: "Travel",
	},
	{
		image:
			"https://img.veenaworld.com/wp-content/uploads/2022/06/9-Intriguing-Facts-About-America.jpg",
		title: "America",
		price: 12000,
		category: "Travel",
	},
	{
		image:
			"https://img.etimg.com/thumb/width-640,height-480,imgsize-104894,resizemode-75,msid-105355936/news/international/uae/dubai-and-the-uae-a-global-wealth-nexus.jpg",
		title: "Dubai",
		price: 25000,
		category: "Explore",
	},
];

function App() {
	const [isElementClicked, setIsElementClicked] = useState(false);
	const [category, setCategory] = useState("Travel");
	// GOOGLE MAPS API

	// const [placesData, setPlacesData] = useState([]);

	// const handleSearch = async () => {
	// 	if (!window.google || !window.google.maps) {
	// 		return console.log("Google Maps API not loaded yet");
	// 	}

	// 	navigator.geolocation.getCurrentPosition(
	// 		async (position) => {
	// 			const service = new window.google.maps.places.PlacesService(
	// 				document.createElement("div")
	// 			);

	// 			const request = {
	// 				location: {
	// 					lat: position.coords.latitude,
	// 					lng: position.coords.longitude,
	// 				},
	// 				radius: 5000,
	// 				type: "restaurant", // Change this to other place types as needed
	// 			};

	// 			service.nearbySearch(request, (results, status) => {
	// 				if (status === window.google.maps.places.PlacesServiceStatus.OK) {
	// 					const placesJson = results.map((place) => ({
	// 						name: place.name,
	// 						address: place.formatted_address,
	// 						rating: place.rating,
	// 						// Add other desired place details as needed
	// 					}));
	// 					setPlacesData(placesJson);
	// 					console.log("Nearby places:", JSON.stringify(placesJson)); // You can use this data in your app
	// 				} else {
	// 					console.error("Error fetching nearby places:", status);
	// 				}
	// 			});
	// 		},
	// 		(error) => {
	// 			console.error("Error getting user location:", error);
	// 		}
	// 	);
	// };

	// useEffect(() => {
	// 	handleSearch();
	// 	console.log(JSON.stringify(placesData, null, 2));
	// });

	// console.log(category);

	return (
		<div>
			<div className='flex items-center justify-center'>
				<img
					src='https://www.gstatic.com/travel-frontend/animation/hero/trips_4.svg'
					alt='banner'
					className='rounded-xl md:h-[18rem] h-[8rem] object-cover'
				/>
			</div>
			<div className='flex items-center justify-center flex-col'>
				<h2 className='text-[3.6rem] mb-5'>Travel</h2>
				<div className='relative text-gray-400 focus-within:text-gray-600 block'>
					<IoMdSearch className='pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3' />

					<input
						type='text'
						className='border-2 border-gray-300 rounded-full w-96 py-3 px-6 pl-10 text-black shadow-lg'
						placeholder='Search for flights, hotels and more'
					/>
				</div>
			</div>
			<div className='flex flex-wrap justify-center items-center'>
				{buttons.map((button) => (
					<button
						onClick={() => setCategory(button.title)}
						className='flex items-center flex-col justify-center gap-4 hover:bg-[#F1F3F4] p-4 rounded-xl'
						key={button.title}>
						{button.icon}
						<h3 className='text-[0.8rem] font-semibold'>{button.title}</h3>
					</button>
				))}
			</div>
			<div
			// className='sm:px-[25rem] px-2 mb-40'
			>
				<div className=' mt-5 flex md:flex-row flex-col gap-10 justify-center items-start'>
					<div className='w-full flex-1 flex-col'>
						<div className='flex justify-center md:ml-80'>
							<h3 className='font-semibold text-2xl flex justify-end items-center text-left'>
								Popular Destinations
							</h3>
						</div>
						{hotels.filter(hotel => hotel.category === category).map((hotel) => (
						    <button
						        onClick={() => setIsElementClicked(true)}
						        className='text-left flex justify-start items-center md:ml-auto ml-0  shadow-xl'
						        key={hotel.title}>
						            <HotelCard {...hotel} />
						    </button>
						))}
					</div>
					<div className='my-20 flex-1 flex md:justify-start justify-center items-center w-full'>
						{isElementClicked ? (
							<h2 className='md:w-[600px] w-full'>Element is clicked!</h2>
						) : (
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6827956668!2d54.89784328683704!3d25.076280454847193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1707637997548!5m2!1sen!2sin'
								width='600'
								height='330'
								style={{ border: 0 }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								className='md:w-[600px] w-full'></iframe>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
