import React from 'react'
import img1 from '../assets/img/fimg1.png'

import img3 from '../assets/img/peron1.jpg'
import img4 from '../assets/img/person2.jpg'
import img5 from '../assets/img/person3.png'
import shape1 from '../assets/img/shape-07-1.png'
import shape2 from '../assets/img/shape-10.png'


const Hero  = () => {
	return (
		<>
			<section
				className="text-center py-20 px-6 relative"
				data-aos="fade-down"
			>
				<div className="prodimg mb-4 md:mb-6">
					<img
						src={img1}
						className="w-32 md:w-40 mx-auto  bg-transparent"
						alt=""
					/>
				</div>

				<h1
					className="text-3xl md:text-6xl font-bold mb-4"
					data-aos="fade-down"
				>
					200+ Viral
					 <span className="highlight"> Content Prompts</span> for
					Creators
				</h1>
				<p className="sec md:text-xl mb-6" data-aos="fade-down">
					Dominate YouTube, Instagram, TikTok & More With High-Impact,
					AI-Powered Ideas!
				</p>

				<a
					href="#buy"
					className="bounce-glow custom-btn px-6 py-2 btn-5 "
					data-aos="zoom-in"
				>
					Get Instant Access
					<span>
						<i className="fa-solid fa-angle-right"></i>
					</span>
				</a>

				<div className="reviewstar bgmdlight rounded w-fit mx-auto mt-8">
					<div className="flex px-4 py-2 space-x-2 md:space-x-4 items-center shadow-2xl">
						<div className="sec w-[80%] md:w-full uppercase flex justify-center space-x-4 text-sm">
							<span>
								⭐️⭐️⭐️⭐️⭐️ 4.9/5 Rated by 1000+ Creators
							</span>
						</div>
						<div className="flex">
							<img
								src={img3}
								className="w-6 h-6 rounded-full border-2"
								alt=""
							/>
							<img
								src={img4}
								className="w-6 h-6 rounded-full -ml-2 border-2"
								alt=""
							/>
							<img
								src={img5}
								className="w-6 h-6 rounded-full -ml-2 border-2"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="absolute -top-16 md:top-0 -right-16 md:right-0 opacity-30">
					<img
						src={shape1}
						className="grayscale"
						alt=""
					/>
				</div>
				<div className="absolute bottom-0 md:bottom-20 -left-16 md:left-24 opacity-30">
					<img src={shape2} className="grayscale" alt="" />
				</div>
			</section>
		</>
	)
}

export default Hero
