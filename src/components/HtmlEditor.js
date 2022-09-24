import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function HtmlEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };

  return (
    <div className="html_editor__container">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        editorClassName="html_editor__box"
      />
    </div>
  );
}
