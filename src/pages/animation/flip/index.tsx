import { useState } from 'react';
import styles from './flip.module.scss';
import classNames from 'classnames';

function Flip() {
	const [flipAni, setFlipAni] = useState(false);

	return (
		<div className={styles.wrapper}>
			<div
				className={classNames(styles.default, {
					[styles.fadeOutAniActive]: flipAni,
				})}
				onClick={() => setFlipAni(true)}
			>
				기본 배경
			</div>
			<div className={styles.flipBox}>
				{flipAni && (
					<div
						className={classNames(styles.flip, {
							[styles.flipAniActive]: flipAni,
						})}
					>
						<div className={styles.front}>앞면</div>
						<div className={styles.back}>뒷면</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Flip;
