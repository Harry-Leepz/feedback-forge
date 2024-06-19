import { useState } from "react";

import useFeedbackItemsContext from "../../hooks/useFeedbackItemsContext";
import { MAX_CHAR_COUNT } from "../../lib/contsants";

export default function FeedbackForm() {
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [text, setText] = useState("");
  const { handleAddToList } = useFeedbackItemsContext();

  const textCharCount = MAX_CHAR_COUNT - text.length;

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextText = event.target.value;
    if (nextText.length > MAX_CHAR_COUNT) return;
    setText(nextText);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // validate text
    if (text.includes("#") && text.length > 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }

    handleAddToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
    >
      <textarea
        onChange={onTextChange}
        value={text}
        id='feedback-textarea'
        placeholder='test'
        spellCheck={false}
      />
      <label htmlFor='feedback-textarea'>
        Enter your feedback here, remember to hashtag the company.
      </label>

      <div>
        <p className='u-italic'>{textCharCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
