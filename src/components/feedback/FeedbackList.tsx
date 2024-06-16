import { useEffect, useState } from "react";

import FeedbackItem from "./FeedbackItem";
import { TFeedbackItem } from "../../lib/types";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        const data = await response.json();
        console.log(data.feedbacks);
        setFeedbacks(data.feedbacks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <ol className='feedback-list'>
      {feedbacks.map((feedback: TFeedbackItem) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </ol>
  );
}
