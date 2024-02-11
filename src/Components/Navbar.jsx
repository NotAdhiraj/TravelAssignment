import React, { useState } from "react";
import { MdCardTravel, MdFlight } from "react-icons/md";
import { IoMdHome, IoMdSearch } from "react-icons/io";
import { BiSolidHotel } from "react-icons/bi";
import { TbGridDots } from "react-icons/tb";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const buttons = [
	{
		title: "Travel",
		icon: <MdCardTravel color='#0160EF' />,
	},
	{
		title: "Explore",
		icon: <IoMdSearch color='#0160EF' />,
	},
	{
		title: "Flights",
		icon: <MdFlight color='#0160EF' />,
	},
	{
		title: "Hotels",
		icon: <BiSolidHotel color='#0160EF' />,
	},
	{
		title: "Vacation Rentals",
		icon: <IoMdHome color='#0160EF' />,
	},
];

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<nav className='flex items-center justify-left p-3 border-b-[1px] border-gray-300 shadow-lg mx-auto'>
			<div className='flex items-center justify-center'>
				<div
					onClick={() => setNav(!nav)}
					className='cursor-pointer mr-5 mb-1 ml-3 hover:bg-gray-100 rounded-full p-2'>
					<AiOutlineMenu size={22} />
				</div>
			</div>
			<div className='flex items-center flex-shrink-0 text-white mr-2'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
					alt='logo'
					className='h-6 select-none'
				/>
			</div>
			<div className='ml-10 gap-2 hidden md:flex'>
				{buttons.map((button) => (
					<button
						className='flex items-center justify-center gap-2 hover:bg-[#E0EBFC] transition-all duration-75 py-2 rounded-full px-4 text-[#0160EF text-black font-semibold text-sm border-[1.5px]'
						key={button.title}>
						{button.icon}
						{button.title}
					</button>
				))}
			</div>
			<div className='flex justify-end w-[65rem]'>
				<TbGridDots size={25} color='gray' />
			</div>
			{/* SIDE MENU */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-[300px] h-screen bg-transparent z-10 duration-300"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-transparent z-10 duration-300"
				}>
				<AiOutlineMenu
					onClick={() => setNav(!nav)}
					size={22}
					className='absolute left-8 top-5 cursor-pointer'
					color='black'
				/>

				<nav>
					<ul className='flex flex-col p-4 text-gray-800 bg-white md:mt-16 mt-[3.1rem] border-r-2 border-gray-300 h-screen'>
						{buttons.map(({ icon, title }, index) => {
							return (
								<div
									key={index}
									className='py-2 flex items-center justify-center text-left'>
									<li className='text-lg flex items-center justify-left gap-5 cursor-pointer w-full text-left rounded-full p-2 hover:bg-[#E8F0FE]'>
										{icon} {title}
									</li>
								</div>
							);
						})}
					</ul>
				</nav>
			</div>
		</nav>
	);
};

export default Navbar;
