"use client";

import { useState } from "react";

export default function Feedback() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  function submit() {
    if (text.trim().length === 0) return;
    setDone(true);
    setText("");
  }

  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="font-semibold mb-2">Feedback</h3>

      <textarea
        data-testid="feedback-input"
        className="border w-full p-2 rounded"
        placeholder="Write feedback..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        data-testid="feedback-submit"
        onClick={submit}
        className="mt-2 border px-4 py-2 rounded"
      >
        Submit
      </button>

      {done && (
        <p data-testid="feedback-success-message" className="mt-2">
          Thanks for your feedback!
        </p>
      )}
    </div>
  );
}
