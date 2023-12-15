import classNames from 'classnames';
import styles from './slowFade.module.scss';
import Image from 'next/image';

import img01 from '@/images/slow-fade/img01.png';
import img02 from '@/images/slow-fade/img02.png';
import { useEffect, useRef, useState } from 'react';

function SlowFade() {
	// 각 DOM 을 담을 ref 생성
	const opacityRef = useRef<HTMLElement[]>([]);

	// opacity 값을 담을 배열
	const [opacity, setOpacity] = useState<number[]>([0, 0, 0]);

	const onScroll = () => {
		// 배열 복사
		let opacityData = [...opacity];

		// dom 을 담은 ref를 반복분으로 호출
		opacityRef.current.map((item: HTMLElement, index: number) => {
			// 각 dom의 높이, 포지션 정보 들
			const { height, top, bottom } = item.getBoundingClientRect();

			// 컨텐츠 상단과 상단 스크롤 위치의 거리
			const offsetTop = top - 96; // 96은 헤더 높이 값 (수정 가능)

			// 컨텐츠의 중간 값
			const median = height / 2 - 200; // 200 수치는 수정 가능

			// 중간 까지 거리의 opacity 구함
			const present = Math.abs(offsetTop) / median;

			if (0 > offsetTop && bottom > median) {
				console.log(present);
				present < 1.5 // 임의의 숫자
					? (opacityData[index] = present) // 중간 이전 1이 될 경우
					: (opacityData[index] = 1 - present * 0.2); // 중간 이후 0이 될 경우(추측으로 구함)
				return setOpacity(opacityData); // 구한 값을 useState에 할당
			}

			// 만약 위 if문 이 아니라면(영역을 벗어난 경우) 해당 순서의 opacity를 0으로 만듬
			opacityData[index] = 0;
			return setOpacity(opacityData); // 구한 값을 useState에 할당
		});
	};

	// scroll 이벤트
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div>
			<header className={styles.header}>
				<div className={styles.layout}>헤더</div>
			</header>

			<main className={styles.container}>
				<section className={styles.banner}>
					<div className={styles.layout}>메인 배너</div>
				</section>

				<section className={styles.contents}>
					<div className={classNames([styles.layout, styles.inner])}>
						<ul className={styles.block}>
							<li
								className={styles.list}
								// ref의 n번쨰  dom을 구함
								ref={(el: HTMLLIElement) => (opacityRef.current[0] = el)}
								// opacity를 useState에 담은 값을 반영
								style={{ opacity: opacity[0] }}
							>
								<h4>
									최대 5.94% 연 보상률로
									<br />
									매일 리워드가 쌓여요
									<span>* 매일 00시 00분 스냅샷 시점 기준으로 진행됩니다.</span>
								</h4>
							</li>
							<li
								className={styles.list}
								ref={(el: HTMLLIElement) => (opacityRef.current[1] = el)}
								style={{ opacity: opacity[1] }}
							>
								<h4>
									거래 및 입출금을
									<br />
									자유롭게 이용해요
									<span>* 조건이나 락업 없이 자유롭게 이용 가능합니다.</span>
								</h4>
							</li>
							<li
								className={styles.list}
								ref={(el: HTMLLIElement) => (opacityRef.current[2] = el)}
								style={{ opacity: opacity[2] }}
							>
								<h4>
									보유만 하고 있으면
									<br />
									받을 수 있어요
									<span>* 쉽고 편리한 가상자산 투자를 경험해 보세요.</span>
								</h4>
							</li>
						</ul>
						<div className={classNames([styles.block, styles.sticky])}>
							<ul
								className={classNames([styles.box, styles.first])}
								style={{ opacity: opacity[0] }}
							>
								<li>
									<span>- 복리효과로 수익 증가</span>
								</li>
								<li>
									<span>- 쉽고 편리한 가상자산 투자</span>
								</li>
								<li>
									<span>- 효율적인 가상자산 관리</span>
								</li>
							</ul>
							<div
								className={classNames([styles.box, styles.second])}
								style={{ opacity: opacity[1] }}
							>
								<Image src={img01} width={379} height={343} alt='이미지' />
							</div>
							<div
								className={classNames([styles.box, styles.second])}
								style={{ opacity: opacity[2] }}
							>
								<Image src={img02} width={296} height={378} alt='이미지' />
							</div>
						</div>
					</div>
				</section>

				<section className={styles.plus}>
					<div className={styles.layout}>
						<h3 className={styles.title}>플러스 가능 상품</h3>
					</div>
				</section>

				<section className={styles.faq}>
					<div className={styles.layout}>
						<h3 className={styles.title}>자주 묻는 질문</h3>
					</div>
				</section>
			</main>

			<footer>푸터</footer>
		</div>
	);
}

export default SlowFade;
