import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Welcome to the Oak Island Subdivision Owners' Association website!
					</div>
					<div class={style.author}>- good stuff coming soon!</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
					<a href="https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=FeiNumber&directionType=Initial&searchNameOrder=592778728N155840&aggregateId=domnp-n15584-96a36bd7-156b-4f21-bdf8-78bffde2beb5&searchTerm=592778728&listNameOrder=592778728N155840"
target="_blank">Direct link to Florida Sunbiz corporation info - N15584</a>
				</p>
				<p class={style.bioright}>
					
				</p>
			</div>
		</div>
	);
};

export default Home;
