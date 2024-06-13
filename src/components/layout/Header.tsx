import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../shared/Logo";
import PageHeading from "../shared/PageHeading";
import Pattern from "../shared/Pattern";

export default function Header() {
  return (
    <header>
      <Pattern />

      <Logo />

      <PageHeading />

      <FeedbackForm />
    </header>
  );
}
