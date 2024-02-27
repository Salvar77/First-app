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
      "Zakupiłam niedawno kilka pamiątek ozdobnych z NGE i muszę przyznać, że jestem zachwycona! Każdy przedmiot jest wykonany z niezwykłą dbałością o szczegóły, a unikalne wzornictwo sprawia, że są to nie tylko dekoracje, ale także piękne wspomnienia, które zdobią mój dom. Obsługa klienta była wyjątkowa, a wszystko dotarło do mnie szybko i w idealnym stanie. Z pewnością będę wracać po więcej!",
    title: "Anna Kowalska",
  },
  {
    id: "review2",
    image: picture2,
    description:
      "Zakupy w NGE to czysta przyjemność! Koszulka, którą zamówiłem, przyszła szybciej niż się spodziewałem i jakość jest po prostu niesamowita. Widać, że dbają o każdy szczegół. Na pewno tu wrócę po więcej!",
    title: "Norman Nowak",
  },
  {
    id: "review3",
    image: picture3,
    description:
      "Kupiłem koszulkę jako prezent i byłem pod ogromnym wrażeniem poziomu obsługi klienta. Ekipa z NGE zrobiła wszystko, by prezent był wyjątkowy, włącznie z pięknym opakowaniem. Prezent był hitem!",
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
