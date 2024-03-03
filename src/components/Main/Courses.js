import Image from "next/image";
import coursesPicture1 from "../../assets/image/serpent_640.jpg";
import coursesPicture2 from "../../assets/image/King.jpg";
import coursesPicture3 from "../../assets/image/King.jpg";
import heroImageMobile from "../../assets/image/temple_640.jpg";
import heroImageDesktop from "../../assets/image/temple_1920.jpg";
import Link from "next/link";
import classes from "./Courses.module.scss";
import { useState, useEffect } from "react";

export const coursesData = [
  {
    id: "courses1",
    image: coursesPicture1,
    description:
      "Odkryj wyjątkową kolekcję pamiątkowych koszulek od NGE, stworzoną z myślą o tym, by celebrować i zachować wspomnienia z Twoich niezapomnianych chwil. Każda koszulka w naszej ofercie to nie tylko stylowy element garderoby, ale także osobisty znak pamiątkowy, który przenosi Cię z powrotem do tych wyjątkowych momentów w życiu.",
    title: "Czerwień",
    amount: "50",
  },
  {
    id: "courses2",
    image: coursesPicture2,
    description:
      "Odkryj wyjątkową kolekcję pamiątkowych koszulek od NGE, stworzoną z myślą o tym, by celebrować i zachować wspomnienia z Twoich niezapomnianych chwil. Każda koszulka w naszej ofercie to nie tylko stylowy element garderoby, ale także osobisty znak pamiątkowy, który przenosi Cię z powrotem do tych wyjątkowych momentów w życiu.",
    title: "Złoto",
    amount: "100",
  },
  {
    id: "courses3",
    image: coursesPicture3,
    description:
      "Odkryj wyjątkową kolekcję pamiątkowych koszulek od NGE, stworzoną z myślą o tym, by celebrować i zachować wspomnienia z Twoich niezapomnianych chwil. Każda koszulka w naszej ofercie to nie tylko stylowy element garderoby, ale także osobisty znak pamiątkowy, który przenosi Cię z powrotem do tych wyjątkowych momentów w życiu.",
    title: "Czerń",
    amount: "150",
  },
];

const Courses = () => {
  const [activeImage, setActiveImage] = useState(heroImageMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleMediaQueryChange = (e) => {
      setActiveImage(e.matches ? heroImageDesktop : heroImageMobile);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <section id="courses" className={classes.courses}>
      <div className={classes.coursesBackground}>
        <Image
          src={activeImage}
          alt="Tło sekcji kursów"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <h2 className={classes.courses__container}>Koszulki NGE</h2>
      <div className={classes.coursesContent}>
        {coursesData.map((course) => (
          <div key={course.id} className={classes.singleCourse}>
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={300}
              className={classes.courses__img}
            />
            <h3 className={classes.courses__text}>{course.title}</h3>
            <Link
              href={`/Courses/${course.id}`}
              className={classes.courses__btn}
            >
              Click
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
