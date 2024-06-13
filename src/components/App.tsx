import HashtagList from "./hashtag/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div className='app'>
      <Footer />

      <Container />

      <HashtagList />
    </div>
  );
}
