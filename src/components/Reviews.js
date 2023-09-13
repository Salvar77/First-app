import Slider from "react-slick";
import classes from "./Reviews.module.scss";

const Review = ({ imgSrc, alt, text, name }) => {
	return (
		<div className={classes.reviews__box}>
			<div className={classes.reviews__boxImg}>
				<img src={imgSrc} alt={alt} />
			</div>
			<div className="reviews__box-info">
				<div className={classes.reviews__boxQuote}>
					<i className="fas fa-quote-right"></i>
				</div>
				<p className={classes.reviews__boxText}>{text}</p>
				<strong>{name}</strong>
			</div>
		</div>
	);
};

export default function Reviews() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<Slider {...settings}>
			<Review
				imgSrc="/review-1.png"
				alt="Anna Nowak"
				text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolor eligendi iusto harum amet nam accusamus atque id sequi placeat."
				name="Anna Nowak"
			/>
			<Review
				imgSrc="/review-2.jpg"
				alt="Jan Kowalski"
				text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolor eligendi iusto harum amet nam accusamus atque id sequi placeat."
				name="Jan Kowalski"
			/>
			<Review
				imgSrc="/review-3.jpg"
				alt="Maria Wiśniewska"
				text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolor eligendi iusto harum amet nam accusamus atque id sequi placeat."
				name="Maria Wiśniewska"
			/>
		</Slider>
	);
}
