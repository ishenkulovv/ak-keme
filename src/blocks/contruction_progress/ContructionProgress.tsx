/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import global from '@/src/styles/global_styles.module.css';
import styles from './contruction_progress.module.css';
import clsx from 'clsx';
import { Select } from '@/src/ui';
import { convertYouTubeLinkToEmbed } from '@/src/utils/convertYoutubeLinkToEmbed';

function ConstructionProgress({
	data,
	lang = 'ru',
}: {
	data: any;
	lang?: 'ru' | 'kg';
}) {
	const [datas, setDatas] = React.useState(data?.construction_progresses[0]);

	const handleSelect = (value: any) => {
		setDatas(value);
	};
	return (
		<section className={styles.main}>
			<div className={clsx(global.container, styles.container)}>
				<h2 className={styles.title}>
					{data.footer_construction_progress[lang]}
				</h2>
				<div className={styles.content}>
					<div className={styles.select}>
						<Select
							options={data?.construction_progresses}
							lang={lang}
							onChange={handleSelect}
						/>
					</div>

					<div className={styles.video}>
						<iframe
							width='560'
							height='315'
							src={convertYouTubeLinkToEmbed(datas.value) as string}
							title='YouTube video player'
						></iframe>
					</div>
					<div className={styles.date}>{datas?.deadline_text[lang]}</div>
				</div>
			</div>
		</section>
	);
}

export default ConstructionProgress;
