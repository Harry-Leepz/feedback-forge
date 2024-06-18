import { useState } from "react";

import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

type FeedbackProps = {
  feedback: TFeedbackItem;
};

export default function FeedbackItem({ feedback }: FeedbackProps) {
  const { badgeLetter, company, daysAgo, text, upvoteCount } = feedback;
  const [open, setOpen] = useState(false);
  const [upvote, setUpvote] = useState(upvoteCount);

  const handleOpenClick = () => {
    setOpen((prev) => !prev);
  };

  const handleUpvoteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // prevent the event bubbling up to the parent li element and disable button
    setUpvote((prev) => prev + 1);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={handleOpenClick}
      className={`feedback ${open && "feedback--expand"}`}
    >
      <button onClick={handleUpvoteClick}>
        <TriangleUpIcon />

        <span>{upvote}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo === 0 ? "NEW" : `${daysAgo}d`}</p>
    </li>
  );
}
