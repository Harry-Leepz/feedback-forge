import { useState } from "react";

import { MAX_CHAR_COUNT } from "../../lib/contsants";

type FeedbackFormProps = {
  handleAddToList: (newFeedback: string) => void;
};

export default function FeedbackForm({ handleAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const textCharCount = MAX_CHAR_COUNT - text.length;

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextText = event.target.value;
    if (nextText.length > MAX_CHAR_COUNT) return;
    setText(nextText);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddToList(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmitHandler} className='form'>
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
