import classNames from 'classnames';
import styles from './slowFade.module.scss';
import Image from 'next/image';

import img01 from '@/images/slow-fade/img01.png';
import img02 from '@/images/slow-fade/img02.png';

function Slow() {
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
							<li className={styles.list}>
								<h4>
									최대 5.94% 연 보상률로
									<br />
									매일 리워드가 쌓여요
									<span>* 매일 00시 00분 스냅샷 시점 기준으로 진행됩니다.</span>
								</h4>
							</li>
							<li className={styles.list}>
								<h4>
									거래 및 입출금을
									<br />
									자유롭게 이용해요
									<span>* 조건이나 락업 없이 자유롭게 이용 가능합니다.</span>
								</h4>
							</li>
							<li className={styles.list}>
								<h4>
									보유만 하고 있으면
									<br />
									받을 수 있어요
									<span>* 쉽고 편리한 가상자산 투자를 경험해 보세요.</span>
								</h4>
							</li>
						</ul>
						<div className={classNames([styles.block, styles.sticky])}>
							<ul className={classNames([styles.box, styles.first])}>
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
							<div className={classNames([styles.box, styles.second])}>
								<Image src={img01} width={379} height={343} alt='이미지' />
							</div>
							<div className={classNames([styles.box, styles.second])}>
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

export default Slow;