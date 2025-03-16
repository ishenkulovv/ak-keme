'use client';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const useAnimate = () => {
	React.useEffect(() => {
		// ScrollTrigger.defaults({
		// 	scroller: '#main_wrapper',
		// });
		gsap.to('#animate_block', {
			scrollTrigger: {
				trigger: '#main_ph',
				start: '0px',
				toggleClass: { targets: '#animate_block', className: 'fixed' },
				end: 'bottom 100%',
				scrub: 1,
				onLeave: () =>
					document.querySelector('#animate_block')?.classList.add('leave'),
				onEnterBack: () => {
					document.querySelector('#animate_block')?.classList.remove('leave');
					document.querySelector('#animate_block')?.classList.add('fixed');
				},
			},
		});
		gsap.to('#block_1', {
			opacity: 0,
			transform: 'scale(0.7) translateY(100px)',
			scrollTrigger: {
				trigger: '#main_ph',
				start: '300px',
				end: '600px',
				scrub: 1,
				// markers: true,
			},
		});
		gsap.to('#block_2', {
			opacity: 1,
			transform: 'translateY(-700px)',
			scrollTrigger: {
				trigger: '#main_ph',
				start: '300px',
				end: '600px',
				scrub: 1,
				// markers: true,
			},
		});
		gsap.to('#block_3', {
			opacity: 1,
			transform: 'translateY(-700px)',
			scrollTrigger: {
				trigger: '#main_ph',
				start: '300px',
				end: '600px',
				scrub: 1,
				// markers: true,
			},
		});
		gsap.to('#block_2', {
			opacity: 0,
			transform: 'scale(0.7) translateY(-500)',
			scrollTrigger: {
				trigger: '#main_ph',
				start: '900px',
				end: '1200px',
				scrub: 1,
				markers: true,
			},
		});
		gsap.to('#block_3', {
			opacity: 1,
			transform: 'translateY(-1400px)',
			scrollTrigger: {
				trigger: '#main_ph',
				start: '900px',
				end: '1200px',
				scrub: 1,
				markers: true,
			},
		});
		// gsap.to(boxRef2.current, {
		// 	y: -760,
		// 	duration: 2,
		// 	ease: 'power1.inOut',
		// 	scrollTrigger: {
		// 		trigger: boxRef.current,
		// 		start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
		// 		end: 'top 30%',
		// 		scrub: 1, // Привязка анимации к скроллу
		// 	},
		// });
		// gsap.to(boxRef3.current, {
		// 	y: -1520,
		// 	duration: 2,
		// 	ease: 'power1.inOut',
		// 	scrollTrigger: {
		// 		trigger: boxRef2.current,
		// 		start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
		// 		end: 'top 30%',
		// 		scrub: 1, // Привязка анимации к скроллу
		// 	},
		// });
		// gsap.to(boxRef2.current, {
		// 	opacity: 0,
		// 	scale: 0.9,
		// 	duration: 2,
		// 	ease: 'power1.inOut',
		// 	scrollTrigger: {
		// 		trigger: boxRef2.current,
		// 		start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
		// 		end: 'top 30%',
		// 		scrub: 1, // Привязка анимации к скроллу
		// 	},
		// });
		// gsap.to(boxRef4.current, {
		// 	y: -2280,
		// 	duration: 2,
		// 	ease: 'power1.inOut',
		// 	scrollTrigger: {
		// 		trigger: boxRef3.current,
		// 		start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
		// 		end: 'top 30%',
		// 		scrub: 1, // Привязка анимации к скроллу
		// 	},
		// });
		// gsap.to(boxRef3.current, {
		// 	opacity: 0,
		// 	scale: 0.9,
		// 	duration: 2,
		// 	ease: 'power1.inOut',
		// 	scrollTrigger: {
		// 		trigger: boxRef3.current,
		// 		start: 'bottom 30%', // Анимация начинается, когда элемент на 80% виден
		// 		end: 'top 30%',
		// 		scrub: 1, // Привязка анимации к скроллу
		// 	},
		// });
	}, []);
};
