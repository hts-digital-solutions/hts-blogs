import React, { useRef } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function HtmlEditor() {
  const editorRef = useRef();
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };

  const handleFocus = (e) => {
    e.preventDefault();
    editorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="html_editor__container" ref={editorRef}>
      <Editor
        editorState={editorState}
        onFocus={handleFocus}
        onEditorStateChange={handleEditorStateChange}
        editorClassName="html_editor__box"
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "image",
            "embedded",
          ],
        }}
      />
    </div>
  );
}

export default React.memo(HtmlEditor);
