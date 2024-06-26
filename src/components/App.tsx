import HashtagList from "./hashtag/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";

import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider";

export default function App() {
  return (
    <div className='app'>
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}
