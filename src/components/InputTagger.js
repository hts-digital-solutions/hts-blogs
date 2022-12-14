import React, { useState } from "react";

import styles from "../styles/components/InputTagger.module.css"

function InputTagger({ value = [], onChange }) {
  const [currentTag, setCurrentTag] = useState("");

  const handleCurrentTagChange = (e) => {
    setCurrentTag(e.target.value);
  };

  const handleTag = (e) => {
    e.preventDefault();
    if (/(,)/.test(e.key) && e.target.value !== ",") {
      onChange([...value, currentTag.replace(",", "")]);
      setCurrentTag("");
    }

    if (/(Backspace)/.test(e.key) && value.length > 0 && e.target.value === "") {
      onChange(value.filter((_, index) => index !== value.length - 1));
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    const _index = e.target.getAttribute("data-remove");
    onChange(value.filter((_, index) => index !== parseInt(_index)));
  };

  console.log('tag');

  return (
    <div className={styles?.post__input_tags}>
      <div className={styles?.post_tags}>
        {value?.map((tag, index) => (
          <p key={index}>
            {tag}{" "}
            <i
              className="la la-times"
              data-remove={index}
              onClick={handleRemove}
            ></i>
          </p>
        ))}
        <input
          type="text"
          placeholder="Tags"
          value={currentTag}
          onChange={handleCurrentTagChange}
          onKeyUp={handleTag}
        />
      </div>
    </div>
  );
}

export default React.memo(InputTagger);
