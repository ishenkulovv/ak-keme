import Image from 'next/image';
import styles from './header.module.css';

function Header() {
	return (
		<div className={styles.header}>
			<img src='/images/sky.png' alt='Sky' className={styles.sky} />
		</div>
	);
}

export default Header;
