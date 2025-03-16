'use client';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const useAnimate = () => {
	React.useEffect(() => {
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
			scrollTrigger: {
				trigger: '#main_ph',
				start: '300px',
				end: '900px',
				scrub: 1,
				onLeave: () => {
					document.getElementById('block_1')?.classList.add('leave');
					document.getElementById('block_2')?.classList.add('animated');
				},
				onLeaveBack: () =>
					document.getElementById('block_1')?.classList.remove('leave'),
				onEnterBack: () => {
					document.getElementById('block_2')?.classList.remove('animated');
					document.getElementById('block_1')?.classList.remove('leave');
				},
			},
		});
		gsap.to('#block_3', {
			scrollTrigger: {
				trigger: '#main_ph',
				start: '1500px',
				end: '2100px',
				scrub: 1,
				onEnter: () => {
					document.getElementById('block_2')?.classList.add('leave');
					document.getElementById('block_3')?.classList.add('animated');
				},
				onLeave: () => {
					document.getElementById('block_3')?.classList.add('leave');
					document.getElementById('block_4')?.classList.add('animated');
				},
				onEnterBack: () => {
					document.getElementById('block_3')?.classList.remove('leave');
					document.getElementById('block_4')?.classList.remove('animated');
				},
				onLeaveBack: () => {
					document.getElementById('block_2')?.classList.remove('leave');
					document.getElementById('block_3')?.classList.remove('animated');
				},
			},
		});
	}, []);
};
