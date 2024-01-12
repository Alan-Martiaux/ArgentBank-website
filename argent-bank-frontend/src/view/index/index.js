import Banner from "../../components/banner/banner";
import ArrayFeatures from "../../components/features/featuresItem.json";
import Features from "../../components/features/feature";
import "../../css/main.css";

function HomePage() {
  return (
    <main>
      <Banner />
      <section className="features">
        {ArrayFeatures.map((features, index) => (
          <Features
            key={index}
            image={features.image}
            alt={features.alt}
            title={features.title}
            content={features.content}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
