import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

import { TFeedbackItem } from "../../lib/types";

type TContainerProps = {
  loading: boolean;
  errorMessage: string;
  feedbackItems: TFeedbackItem[];
  handleAddToList: (newFeedback: string) => void;
};

export default function Container({
  loading,
  errorMessage,
  feedbackItems,
  handleAddToList,
}: TContainerProps) {
  return (
    <main className='container'>
      <Header handleAddToList={handleAddToList} />

      <FeedbackList
        loading={loading}
        errorMessage={errorMessage}
        feedbacks={feedbackItems}
      />
    </main>
  );
}
