import { useState } from 'react';
import styles from './flip.module.scss';
import classNames from 'classnames';

function Flip() {
	const [flipAni, setFlipAni] = useState<'UP' | 'DOWN' | 'NONE'>('NONE');

	return (
		<div className={styles.wrapper}>
			<div
				className={classNames(styles.defaultWrapper, {
					[styles.fadeOutAniActive]: flipAni !== 'NONE',
				})}
			>
				<div className={styles.default} onClick={() => setFlipAni('UP')}>
					UP 기본 배경
				</div>
				<div className={styles.default} onClick={() => setFlipAni('DOWN')}>
					DOWN 기본 배경
				</div>
			</div>
			<div className={styles.flipBox}>
				{flipAni === 'UP' && (
					<div className={classNames([styles.flip, styles.flipAniActive])}>
						<div className={styles.front}>UP 앞면</div>
						<div className={styles.back}>UP 뒷면</div>
					</div>
				)}
				{flipAni === 'DOWN' && (
					<div className={classNames([styles.flip, styles.flipAniActive])}>
						<div className={styles.front}>DOWN 앞면</div>
						<div className={styles.back}>DOWN 뒷면</div>
					</div>
				)}
			</div>
			<button className={styles.button} onClick={() => setFlipAni('NONE')}>
				기본 상태로 리셋
			</button>
		</div>
	);
}

export default Flip;
