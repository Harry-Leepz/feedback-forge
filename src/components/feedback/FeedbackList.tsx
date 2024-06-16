import FeedbackItem from "./FeedbackItem";
import Loading from "../shared/Loading";
import ErrorMessage from "../shared/ErrorMessage";
import { TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  feedbacks: TFeedbackItem[];
  loading: boolean;
  errorMessage: string;
};

export default function FeedbackList({
  feedbacks,
  loading,
  errorMessage,
}: FeedbackListProps) {
  return (
    <ol className='feedback-list'>
      {loading && <Loading />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {feedbacks.map((feedback: TFeedbackItem) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </ol>
  );
}
