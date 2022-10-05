import React, { useState } from "react";

function InputTagger({ styles, value = [], onChange }) {
  const [currentTag, setCurrentTag] = useState("");

  const handleCurrentTagChange = (e) => {
    setCurrentTag(e.target.value);
  };

  const handleTag = (e) => {
    e.preventDefault();
    if (e.keyCode === 188 && e.target.value !== ",") {
      onChange([...value, currentTag.replace(",", "")]);
      setCurrentTag("");
    }

    if (e.keyCode === 8 && value.length > 0 && e.target.value === "") {
      onChange(value.filter((_, index) => index !== value.length - 1));
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    const _index = e.target.getAttribute("data-remove");
    onChange(value.filter((_, index) => index !== parseInt(_index)));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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
