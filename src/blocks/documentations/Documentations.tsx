/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import styles from './documentations.module.css';
import global from '@/src/styles/global_styles.module.css';
import clsx from 'clsx';

function Documentations({
	data,
	lang = 'ru',
}: {
	data: any;
	lang?: 'ru' | 'kg';
}) {
	const [content, setContent] = React.useState(null);
	const [mimeType, setMimeType] = React.useState('');
	const [viewModal, setViewModal] = React.useState(false);

	React.useEffect(() => {
		const handleKeyDown = (event: any) => {
			if (event.key === 'Escape') {
				setViewModal(false);
				console.log('test');
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		// Очистка обработчика при размонтировании компонента
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const downloadFile = async (fileUrl: string | URL | Request) => {
		try {
			const response = await fetch(fileUrl);
			const data = await response.json();

			if (data.error) {
				throw new Error(data.error);
			}

			setContent(data.content);
			setMimeType(data.mimeType);
			setViewModal(true);
		} catch (err) {
			console.error('Error downloading file:', err);
		}
	};

	const renderContent = () => {
		if (!content) return null;

		const decodedContent = atob(content);

		if (mimeType.includes('image')) {
			return (
				<img
					src={`data:${mimeType};base64,${content}`}
					alt={'title'}
					style={{ width: '100%' }}
				/>
			);
		}

		if (mimeType.includes('pdf')) {
			return (
				<iframe
					src={`data:${mimeType};base64,${content}`}
					// className='w-full h-[500px]'
					style={{ width: '100%', height: '100%' }}
					title={'title'}
				/>
			);
		}

		if (mimeType.includes('text')) {
			return <pre className='whitespace-pre-wrap'>{decodedContent}</pre>;
		}

		return <div>Preview not available for this file type</div>;
	};

	return (
		<>
			<section className={styles.main}>
				<div className={styles.documentations}>
					<div className={clsx(global.container, styles.container)}>
						<h2 className={styles.title}>{data.documentation[lang]}</h2>
						<div className={styles.documents}>
							{data?.documentations?.map((document: any, index: number) => (
								<div className={styles.block} key={index}>
									<h5 className={styles.doc_title}>{document.title[lang]}</h5>
									<p className={styles.doc_date}>{document.date}</p>
									<div
										className={styles.doc_link}
										onClick={() => downloadFile(document.file)}
									>
										<svg
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M11.668 2.5V5.83333C11.668 6.05435 11.7558 6.26631 11.912 6.42259C12.0683 6.57887 12.2803 6.66667 12.5013 6.66667H15.8346M11.668 2.5H5.83464C5.39261 2.5 4.96868 2.67559 4.65612 2.98816C4.34356 3.30072 4.16797 3.72464 4.16797 4.16667V15.8333C4.16797 16.2754 4.34356 16.6993 4.65612 17.0118C4.96868 17.3244 5.39261 17.5 5.83464 17.5H14.168C14.61 17.5 15.0339 17.3244 15.3465 17.0118C15.659 16.6993 15.8346 16.2754 15.8346 15.8333V6.66667M11.668 2.5L15.8346 6.66667'
												stroke='currentColor'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{viewModal && (
				<div className={styles.modal}>
					<div className={styles.modal_content}>{renderContent()}</div>
					<div
						className={styles.modal_bg}
						onClick={() => setViewModal(false)}
					></div>
				</div>
			)}
		</>
	);
}

export default Documentations;
