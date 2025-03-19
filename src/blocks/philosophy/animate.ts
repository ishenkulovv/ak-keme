'use client';

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimate = () => {
	const interval = 600;

	React.useEffect(() => {
		const blocks = Array.from(document.querySelectorAll('[id^="block_"]')).map(
			block => block.id
		);

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

		blocks.forEach((block, index) => {
			gsap.to(`#${block}`, {
				scrollTrigger: {
					trigger: '#main_ph',
					start: `${300 + interval * index}px`,
					end: `${300 + interval * (index + 1)}px`,
					scrub: 1,
					onEnter: () => {
						if (index > 0) {
							document
								.getElementById(blocks[index - 1])
								?.classList.add('leave');
						}
						document.getElementById(block)?.classList.add('animated');
					},
					onLeave: () => {
						if (index < blocks.length - 1) {
							document.getElementById(block)?.classList.add('leave');
							document
								.getElementById(blocks[index + 1])
								?.classList.add('animated');
						}
					},
					onEnterBack: () => {
						document.getElementById(block)?.classList.remove('leave');
						if (blocks[index + 1]) {
							document
								.getElementById(blocks[index + 1])
								?.classList.remove('animated');
						}
					},
					onLeaveBack: () => {
						if (index > 0) {
							document
								.getElementById(blocks[index - 1])
								?.classList.remove('leave');
						}
						document.getElementById(block)?.classList.remove('animated');
					},
				},
			});
		});
	}, []);
};
