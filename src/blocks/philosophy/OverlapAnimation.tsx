import { motion, useScroll, useTransform } from 'framer-motion';

function OverlapAnimation() {
	const { scrollY } = useScroll();

	// Преобразуем значение скролла для первого блока
	const yFirst = useTransform(scrollY, [0, 100], [0, -50]);
	console.log(scrollY);
	// Преобразуем значение скролла для второго блока
	const ySecond = useTransform(scrollY, [0, 300], [0, -100]);
	return (
		<div style={{ height: '200vh', position: 'relative' }}>
			{/* Первый блок */}
			<motion.div
				style={{
					position: 'sticky',
					top: 0,
					width: '100%',
					height: '100vh',
					background: 'rgba(255, 0, 0, 0.6)',
					y: yFirst,
					zIndex: 1,
				}}
				whileInView={{ opacity: 1 }}
			>
				<h2 style={{ textAlign: 'center', paddingTop: '40vh' }}>Блок 1</h2>
			</motion.div>

			{/* Второй блок */}
			<motion.div
				style={{
					position: 'sticky',
					top: 0,
					width: '100%',
					height: '100vh',
					background: 'rgba(0, 0, 255, 0.6)',
					y: ySecond,
					zIndex: 2,
				}}
				whileInView={{ opacity: 0 }}
			>
				<h2 style={{ textAlign: 'center', paddingTop: '40vh' }}>Блок 2</h2>
			</motion.div>
		</div>
	);
}

export default OverlapAnimation;
