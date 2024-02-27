import Image from "next/image";
import coursesPicture1 from "../../assets/image/serpent_640.jpg";
import coursesPicture2 from "../../assets/image/King.jpg";
import coursesPicture3 from "../../assets/image/King.jpg";
import Link from "next/link";
import classes from "./Courses.module.scss";

export const coursesData = [
  {
    id: "courses1",
    image: coursesPicture1,
    description:
      "Odkryj wyjątkową kolekcję pamiątkowych koszulek od NGE, stworzoną z myślą o tym, by celebrować i zachować wspomnienia z Twoich niezapomnianych chwil. Każda koszulka w naszej ofercie to nie tylko stylowy element garderoby, ale także osobisty znak pamiątkowy, który przenosi Cię z powrotem do tych wyjątkowych momentów w życiu.",
    title: "Czerwień",
    amount: "200",
  },
  {
    id: "courses2",
    image: coursesPicture2,
    description:
      "Odkryj wyjątkową kolekcję pamiątkowych koszulek od NGE, stworzoną z myślą o tym, by celebrować i zachować wspomnienia z Twoich niezapomnianych chwil. Każda koszulka w naszej ofercie to nie tylko stylowy element garderoby, ale także osobisty znak pamiątkowy, który przenosi Cię z powrotem do tych wyjątkowych momentów w życiu.",
    title: "Złoto",
    amount: "400",
  },
  {
    id: "courses3",
    image: coursesPicture3,
    description:
      "Odkryj wyjątkową kolekcję pamiątkowych koszulek od NGE, stworzoną z myślą o tym, by celebrować i zachować wspomnienia z Twoich niezapomnianych chwil. Każda koszulka w naszej ofercie to nie tylko stylowy element garderoby, ale także osobisty znak pamiątkowy, który przenosi Cię z powrotem do tych wyjątkowych momentów w życiu.",
    title: "Czerń",
    amount: "600",
  },
];

const Courses = () => {
  return (
    <section id="courses" className={classes.courses}>
      <h2 className={classes.courses__container}>Koszulki NGE</h2>

      {coursesData.map((course) => (
        <div key={course.id} className={classes.singleCourse}>
          <div>
            <Image
              className={classes.courses__img}
              src={coursesPicture1}
              alt="Opis grafiki"
            />
          </div>
          <div>
            <h2 className={classes.courses__text}>{course.title}</h2>
            <Link
              href={`/Courses/${course.id}`}
              className={classes.courses__btn}
            >
              Click
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Courses;
