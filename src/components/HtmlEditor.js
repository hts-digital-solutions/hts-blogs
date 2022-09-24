import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import styles from "../styles/components/HtmlEditor.module.css";

export default function HtmlEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };

  return (
    <div className={styles.html_editor__container}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName={styles.html_editor__box}
        toolbarClassName="toolbar-class"
      />
    </div>
  );
}
