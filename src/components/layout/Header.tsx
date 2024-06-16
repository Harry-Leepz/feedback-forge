import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../shared/Logo";
import PageHeading from "../shared/PageHeading";
import Pattern from "../shared/Pattern";

type THeaderProps = {
  handleAddToList: (newFeedback: string) => void;
};

export default function Header({ handleAddToList }: THeaderProps) {
  return (
    <header>
      <Pattern />

      <Logo />

      <PageHeading />

      <FeedbackForm handleAddToList={handleAddToList} />
    </header>
  );
}
