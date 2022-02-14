import Link from 'next/link';
import styles from '../styles/main.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<h4>Hungry Neighbors</h4>
				<p>You can't just eat good food. You've got to talk about it too. And you've got to talk about it to somebody who understands that kind of food.</p>
			</div>
			<div>
				<h4>Our Socials</h4>
				<ul>
					<li>
						<Link href='https://www.instagram.com/hungryneighbors/'>
							<a>Instagram</a>
						</Link>
					</li>
					<li>
						<Link href='https://www.facebook.com/hungryneighbors'>
							<a>Facebook</a>
						</Link>
					</li>
					<li>
						<Link href='https://twitter.com/hungryneighbors'>
							<a>Twitter</a>
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<h4>Say hello!</h4>
				<ul>
					<li>
						<Link href='mailto:hello@hungryneighbors.com'>
							<a>hello@hungryneighbors.com</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.footerDisclaimer}>
				<p>
					The information provided by Hungry Neighbors ("we," "us", or "our") on
					<a href='http://www.hungryneighbors.com'>http://www.hungryneighbors.com</a>
					is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your
					use of the site and your reliance on any information on the site is solely at your own risk.
				</p>
			</div>
		</footer>
	);
}
