import HomePage from "./HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
