import Image from 'next/image';

import styles from './footer_socials.module.css';

function FooterSocials() {
	return (
		<div className={styles.socials}>
			<a href='' className={styles.social}>
				<Image
					src='/icons/whatsapp.svg'
					alt='WhatsApp'
					width={20}
					height={20}
				/>
			</a>
			<a href='' className={styles.social}>
				<Image
					src='/icons/instagram.svg'
					alt='Instagram'
					width={20}
					height={20}
				/>
			</a>
			<a href='' className={styles.social}>
				<Image src='/icons/mail.svg' alt='Mail' width={20} height={20} />
			</a>
			<a href='' className={styles.social}>
				<Image
					src='/icons/pinterest.svg'
					alt='Pinterest'
					width={20}
					height={20}
				/>
			</a>
			<a href='' className={styles.social}>
				<Image src='/icons/youtube.svg' alt='Youtube' width={20} height={20} />
			</a>
		</div>
	);
}

export default FooterSocials;
