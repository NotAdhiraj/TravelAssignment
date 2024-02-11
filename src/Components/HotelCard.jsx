const HotelCard = ({ image, title, price }) => {
	return (
		<div className='flex flex-row rounded-xl mt-10 border-[2px] border-gray-200 w-full hover:bg-gray-100'>
			<div className=''>
				<img
					src={image}
					alt='img'
					className='md:h-36 h-40 w-44 rounded-l-xl object-fill'
				/>
			</div>
			<div className='mt-2 ml-3 mr-2'>
				<h3 className='font-bold text-lg'>{title}</h3>
				<p className='text-sm'>Feb 29 - 30</p>
				<p className='mt-5 text-sm'>Amazing View, Great Food Nearby </p>
				<div className='flex justify-end mt-5 w-full text-right mr-2'>
					<p className='md:mr-0 mr-1'>₹{price}</p>
				</div>
			</div>
		</div>
	);
};

export default HotelCard;
