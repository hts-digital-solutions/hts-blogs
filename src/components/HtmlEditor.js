import React, { useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function HtmlEditor({ onChange }) {
  const editorRef = useRef();
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (state) => {
    setEditorState(state);
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  const handleFocus = (e) => {
    e.preventDefault();
    editorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log('hb');

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
