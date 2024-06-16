import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

type FeedbackProps = {
  feedback: TFeedbackItem;
};

export default function FeedbackItem({ feedback }: FeedbackProps) {
  const { badgeLetter, company, daysAgo, text, upvoteCount } = feedback;
  return (
    <li className='feedback'>
      <button>
        <TriangleUpIcon />

        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo}d ago</p>
    </li>
  );
}
