import React, { useState } from "react";
import styled from "styled-components";
import parse from "../utils/parser";

const CodeEditorWrapper = styled.div`
  padding: 20px;
  position: relative;
  text-decoration: none;
  text-align: left;
  background-color: #333;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
  min-height: 300px;
  max-height: 600px;
  color: #fff;
`;

const CodeEditorHeader = styled.div`
  position: absolute;
  left: 20px;
  top: 30px;
`;

const CodeBlock = styled.span`
  padding: 5px;
  padding-top: 0px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
  background: #fff;
  color: #000;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const CodeEditorText = styled.textarea`
  position: absolute;
  top: 80px;
  padding-left: 20px;
  background: transparent;
  width: 80%;
  border: 0px;
  resize: none;
  color: inherit;
  font-size: 20px;
  -moz-appearance: none;
  outline: currentColor none medium;
  height: 200px;
  max-height: 200px;
  overflow: scroll;
`;

const P = styled.a`
  position: absolute;
  top: 81px;
  ::before {
    content: ">";
  }
`;

const CodeEditor = ({ code }) => {
  const [userCode, setUserCode] = useState("+(1,4)");
  const [output, setOutput] = useState("");
  const handleChange = e => {
    let val = e.target.value;
    if (val[val.length - 1] !== "\n") {
      setUserCode(e.target.value);
      return;
    }
    handleEnter();
  };
  const handleEnter = () => {
    let out = parse(userCode);
    setOutput(JSON.stringify(out));
  };
  return (
    <CodeEditorWrapper>
      <CodeEditorHeader>
        {code
          .split(" ")
          .map((word, index) =>
            word[0] === `"` && word[word.length - 1] === `"` ? (
              <CodeBlock key={index}> {word.replace(/"/g, "")} </CodeBlock>
            ) : (
              ` ${word}`
            )
          )}
      </CodeEditorHeader>
      <P />
      <CodeEditorText
        spellCheck="false"
        autoCapitalise="off"
        autoCorrect="off"
        wrap="off"
        value={userCode}
        onChange={handleChange}
      />
      <div style={{ position: "absolute", bottom: 10 }}>{output}</div>
    </CodeEditorWrapper>
  );
};

export default CodeEditor;
