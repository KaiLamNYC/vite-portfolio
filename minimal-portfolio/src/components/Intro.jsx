import React from "react";

function Intro() {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
			<h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
				Kai
			</h1>
			<p className='text-base md:text-cl mb-3 font-medium'>
				Fullstack Developer
			</p>
			<p className='text-sm max-w-xl mb-6 font-bold'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae
				elementum curabitur. Link to something cool{" "}
				<a
					href='https://www.rickowens.eu/en/US/men/section/all'
					target='_blank'
					className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
					rel='noreferrer noopener'
				>
					Rick Owens
				</a>
			</p>
		</div>
	);
}

export default Intro;
