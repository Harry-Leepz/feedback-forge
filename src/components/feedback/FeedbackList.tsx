import { useEffect, useState } from "react";

import FeedbackItem from "./FeedbackItem";
import Loading from "../shared/Loading";
import { TFeedbackItem } from "../../lib/types";
import ErrorMessage from "../shared/ErrorMessage";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error("An error occurred while fetching feedbacks.");
        }
        const data = await response.json();
        console.log(data.feedbacks);
        setFeedbacks(data.feedbacks);
      } catch (error) {
        setError("An error occurred while fetching feedbacks.");
      } finally {
        setLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <ol className='feedback-list'>
      {loading && <Loading />}
      {error && <ErrorMessage errorMessage={error} />}
      {feedbacks.map((feedback: TFeedbackItem) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </ol>
  );
}
