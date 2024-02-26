import { useState } from 'react';
import styles from './flip.module.scss';
import classNames from 'classnames';

function Flip() {
	/**
	 * UP, DOWN, NONE 3가지 타입으로 지정 (기본값 NONE)
	 * 기본값은 서버에서 값 내려오는걸로처리해줄거임
	 * up - 올라감
	 * down - 내려감
	 * NONE - 선택안함
	 */
	const [flipAni, setFlipAni] = useState<'UP' | 'DOWN' | 'NONE'>('NONE');

	return (
		<div className={styles.wrapper}>
			{/* 기본 카드 버튼 */}
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
			{/* flip 애니메이션 */}
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

			{/* 다시하기 버튼 */}
			<button className={styles.button} onClick={() => setFlipAni('NONE')}>
				기본 상태로 리셋
			</button>
		</div>
	);
}

export default Flip;
