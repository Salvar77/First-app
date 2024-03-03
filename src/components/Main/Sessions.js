import classes from "./Sessions.module.scss";
import Image from "next/image";
import Link from "next/link";

export const sessionsData = [
  {
    id: "sessions1",
    image: "/buddha_640.jpg",
    description:
      "W naszym asortymencie znajdziesz posążki przedstawiające różnorodne bóstwa hinduistyczne, takie jak: Ganesha - bóg mądrości, usuwający przeszkody, patron nauki i pisarzy, często czczony jako pierwszy przed rozpoczęciem nowych przedsięwzięć. Lakshmi - bogini pomyślności, bogactwa, czystości i hojności, a także uosobienie piękna i uroku. Shiva - niszczyciel zła i transformator, przedstawiany jako źródło dobra i opiekun medytacji i sztuk. Krishna - bóg miłości, współczucia i dobroci, znany z Bhagawadgity jako duchowy mentor Arjuny. Saraswati - bogini wiedzy, muzyki, sztuki i mądrości, inspirująca uczących się i poszukujących duchowego rozwoju.	",
    title: "Sesja Online",
    amount: "50",
  },
  {
    id: "sessions2",
    image: "/cobra_640.jpg",
    description:
      "Autentyczność: Każdy posążek jest wykonany z należytą starannością i uwagą do detali, zachowując autentyczność i duchowość. Rękodzieło: Nasze produkty są ręcznie robione przez wykwalifikowanych rzemieślników, co nadaje im unikalny charakter. Jakość Materiałów: Używamy tylko najlepszej jakości materiałów, takich jak brąz, marmur, mosiądz i kamień, aby zapewnić trwałość i estetyczne piękno. Duchowość: Posążki te nie tylko ozdobią Twój dom, ale mogą również służyć jako przedmioty kultu w domowym sanktuarium, przynosząc pokój i harmonię. Idealny Prezent: Doskonały wybór na prezent dla bliskich, którzy cenią duchowość i kulturę indyjską, czy to z okazji świąt, urodzin, czy jako symbol szczęścia i dobrobytu.",
    title: "Sesja Całościowa",
    amount: "100",
  },
  {
    id: "sessions3",
    image: "/buddha_640.jpg",
    description:
      "Naszym celem jest dostarczanie produktów, które nie tylko są piękne wizualnie, ale także mają głębokie znaczenie duchowe. Zapraszamy do przeglądania naszej kolekcji i odkrywania piękna i spokoju, jakie mogą przynieść do Twojego życia te wyjątkowe dzieła sztuki.",
    title: "Sesja Odczyt Kart Tarota",
    amount: "150",
  },
];

const Sessions = () => {
  return (
    <section id="sessions" className={classes.sessions}>
      <h2 className={classes.sessions__container}>Sklep NGE</h2>

      <div className={classes.sessions__wrapper}>
        {sessionsData.map((session) => (
          <div key={session.id} className={classes.sessions__box}>
            <Image
              className={classes.sessions__img}
              src={session.image}
              alt="Opis grafiki"
              width={500}
              height={300}
            />
            <div>
              <p className={classes.sessions__text}>{session.title}</p>
              <Link
                href={`/Sessions/${session.id}`}
                className={classes.sessions__btn}
              >
                Dodaj do koszyka
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sessions;
