import FeedbackItem from "./FeedbackItem";
import Loading from "../shared/Loading";
import ErrorMessage from "../shared/ErrorMessage";

import useFeedbackItemsContext from "../../hooks/useFeedbackItemsContext";
import { TFeedbackItem } from "../../lib/types";

export default function FeedbackList() {
  const { filteredFeedbacks, loading, errorMessage } =
    useFeedbackItemsContext();

  return (
    <ol className='feedback-list'>
      {loading && <Loading />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {filteredFeedbacks.map((feedback: TFeedbackItem) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </ol>
  );
}
