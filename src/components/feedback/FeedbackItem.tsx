import { useState } from "react";

import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

type FeedbackProps = {
  feedback: TFeedbackItem;
};

export default function FeedbackItem({ feedback }: FeedbackProps) {
  const [open, setOpen] = useState(false);
  const { badgeLetter, company, daysAgo, text, upvoteCount } = feedback;

  const handleOpenClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <li
      onClick={handleOpenClick}
      className={`feedback ${open && "feedback--expand"}`}
    >
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

      <p>{daysAgo === 0 ? "NEW" : `${daysAgo}d`}</p>
    </li>
  );
}
