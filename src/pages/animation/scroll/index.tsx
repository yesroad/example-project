'use client';
import styles from './scrollAnimation.module.scss';
import { useEffect, useRef } from 'react';

function ScrollAnimation() {
	const elRef = useRef<(HTMLElement | null)[]>([]);

	const onScroll = () => {
		const scrollY = window.scrollY;
		elRef.current.map((item) => {
			if (scrollY > (item?.offsetTop || 0) - 200) {
				item?.classList.add(styles.animation);
			}
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<main>
			<section
				ref={(el) => (elRef.current[0] = el)}
				className={styles.section}
				onScroll={(e) => console.log(e)}
			>
				컨텐츠 1
			</section>
			<section ref={(el) => (elRef.current[1] = el)} className={styles.section}>
				컨텐츠 2
			</section>
			<section ref={(el) => (elRef.current[2] = el)} className={styles.section}>
				컨텐츠 3
			</section>
			<section ref={(el) => (elRef.current[3] = el)} className={styles.section}>
				컨텐츠 4
			</section>
			<section ref={(el) => (elRef.current[4] = el)} className={styles.section}>
				컨텐츠 5
			</section>
		</main>
	);
}

export default ScrollAnimation;
