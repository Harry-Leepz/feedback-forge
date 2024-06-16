import { useState } from "react";

import { MAX_CHAR_COUNT } from "../../lib/contsants";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const textCharCount = MAX_CHAR_COUNT - text.length;

  return (
    <form className='form'>
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
