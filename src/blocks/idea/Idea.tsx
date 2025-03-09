import global from '@/src/styles/global_styles.module.css';
import styles from './idea.module.css';
import { Slider } from '@/src/components';
import clsx from 'clsx';

function Idea() {
	return (
		<div className={styles.main}>
			<div className={clsx(global.container, styles.wrapper)}>
				<div className={styles.content}>
					<div>
						<h3 className={styles.title}>
							Идейное вдохновение черпалось из произведения Великого писателя
							Чынгыза Айтматова, где «Ак Кеме» олицетворяет чистоту, надежду и
							стремление к идеалу.
						</h3>
						<p className={styles.descr}>
							Мы создаем место, где каждый гость будет чувствовать себя как на
							белоснежной лодке, плывущей к мечте.
						</p>
					</div>
					<div className={styles.quot}>
						<p>
							«Он думал: хорошо бы стать рыбкой, маленькой-пре­маленькой, чтобы
							никто не видел, и плыть, плыть, плыть, пока не доплывёшь до того
							берега. А там найти Белый пароход…»
						</p>
						<div>Чынгыз Айтматов, «Ак-Кеме»</div>
					</div>
				</div>
				<div className={styles.slider}>
					<Slider
						images={[
							'/images/author.png',
							'/images/parking-1.png',
							'/images/author.png',
						]}
						mini
					/>
				</div>
			</div>
		</div>
	);
}

export default Idea;
