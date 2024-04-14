import Slider from "react-slick";
import Link from "next/link";
import classes from "./Reviews.module.scss";
import Image from "next/image";
import picture1 from "../../assets/image/review-1.png";
import picture2 from "../../assets/image/review-2.jpg";
import picture3 from "../../assets/image/review-3.jpg";

const reviewsData = [
  {
    id: "review1",
    image: picture1,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    title: "Anna Kowalska",
  },
  {
    id: "review2",
    image: picture2,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    title: "Norman Nowak",
  },
  {
    id: "review3",
    image: picture3,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    title: "Janusz Polański",
  },
];

const Review = ({ imgSrc, alt, text, name }) => {
  return (
    <div className={classes.reviews__box}>
      <div className={classes.reviews__boxImg}>
        <Image src={imgSrc} alt={alt} />
      </div>
      <div className={classes.reviews__boxInfo}>
        <div className={classes.reviews__boxQuote}>
          <i className="fas fa-quote-right"></i>
        </div>
        <p className={classes.reviews__boxText}>{text}</p>
        <p>
          <strong className={classes.reviews__strong}>{name}</strong>
        </p>
      </div>
    </div>
  );
};

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className={classes.reviews}>
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <Review
            key={review.id}
            imgSrc={review.image}
            alt={review.title}
            text={review.description}
            name={review.title}
          />
        ))}
      </Slider>
      <div className={classes.linkWrapper}>
        <Link href={`/Reviews/${reviewsData[1].id}`}>
          <button className={classes.reviews__btn}>
            Zobacz wszystkie opinie o sklepie!
          </button>
        </Link>
      </div>
    </div>
  );
}
