import { useRouter } from "next/router";
import { sessionsData } from "@/components/Main/Sessions";
import Link from "next/link";
import Image from "next/image";
import classes from "./SessionsPage.module.scss";

const SessionsPage = () => {
  const router = useRouter();
  const { sessionsId } = router.query;

  if (!sessionsId) return null;

  const session = sessionsData.find((c) => c.id === sessionsId);

  if (!sessionsId) return null;

  return (
    <section id="session1" className={classes.sessionsPage}>
      <div className={classes.sessionsPage__main}>
        <div>
          <Image
            src={session.image}
            className={classes.sessionsPage__img}
            width={500}
            height={300}
            alt="Opis grafiki"
          ></Image>
        </div>
        <div>
          <h2 className={classes.sessionsPage__header}>
            Posążek Buddha Anantaśesza
          </h2>
          <p className={classes.sessionsPage__text}>575 zł</p>
          <Link href="/PaySection" className={classes.sessionsPage__button}>
            Zamów!
          </Link>
        </div>
      </div>
      <div>
        <p className={classes.sessionsPage__text}>{session.description}</p>
      </div>
      <div className={classes.sessionsPage__box}>
        <Image
          src="/dragon_640.jpg"
          width={500}
          height={400}
          className={classes.sessionsPage__img}
          alt="sesja"
        ></Image>
        <p className={classes.sessionsPage__text}>{session.description}</p>
        <p className={classes.sessionsPage__text}>
          Inwestycja w siebie to 555 zł. PS Po dokonaniu zakupu kontaktuje się z
          Tobą poprzez adres e-mail, podany przy zamówieniu, i ustalamy dogodny
          dla każdej ze stron termin.
        </p>
      </div>
    </section>
  );
};

export default SessionsPage;
