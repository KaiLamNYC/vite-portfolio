import React from "react";

function Intro() {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
			<h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
				Kai
			</h1>
			<p className='text-base md:text-cl mb-3 font-medium'>
				Junior Fullstack Web Developer
			</p>
			<p className='text-sm max-w-xl mb-6 font-bold'>
				I'm a Junior Full-Stack Developer with a passion for crafting web
				solutions that blend creativity with functionality. Here, you'll find a
				collection of my projects and experiences, showcasing my dedication to
				clean code, problem-solving, and continuous learning. Join me on this
				journey through the world of web development, where each project tells a
				story of growth and innovation. Let's build something incredible
				together.{" "}
				<a
					href='https://github.com/KaiLamNYC'
					target='_blank'
					className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
					rel='noreferrer noopener'
				>
					Git Hub
				</a>
			</p>
		</div>
	);
}

export default Intro;
