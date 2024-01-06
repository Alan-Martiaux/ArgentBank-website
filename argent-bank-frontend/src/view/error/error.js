import Banner from "../../components/banner/banner";
import "../../css/main.css";

function Error() {
  return (
    <main>
      <Banner />
      <section className="features">
        <div className="errorPage">
          <h2> Erreur !</h2>
          <p>La page que vous demandez est innaccesible ou n'existe pas !</p>
          <p>Veuillez vous connecter !</p>
        </div>
      </section>
    </main>
  );
}

export default Error;
