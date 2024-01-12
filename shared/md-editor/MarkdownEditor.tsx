"use client";
import React, { ChangeEvent, useId, useRef, useState } from "react";
import styled from "styled-components";
import { T_OptionCallback, options } from "./ToolbarOptions";

const EditorForm = styled.form`
    width: 100%;
    max-width: 700px;
`;

const Editor = styled.textarea`
    width: 100%;
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    background-color: #000;
    color: #fff;
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 1rem;
`;

const Toolbar = styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid white;
`;

const Option = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid white;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: inherit;

    &:hover {
        background-color: #333;
    }
`;

const MarkdownEditor = () => {
    const toolbarId = useId();
    const editorId = useId();
    const editorRef = useRef<HTMLTextAreaElement | null>(null);

    const [value, setValue] = useState("");
    const [cursor, setCursor] = useState({ start: 0, end: 0 });

    const handleMouseUpCapture = () => {
        if (editorRef.current) {
            setCursor({
                start: editorRef.current.selectionStart,
                end: editorRef.current.selectionEnd,
            });
        }
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const handleOptionClick = (callback: T_OptionCallback) => {
        const newVal = callback(value, cursor);
        newVal && setValue(newVal);
    };

    return (
        <>
            <EditorForm onSubmit={(e) => e.preventDefault()}>
                <Toolbar id={toolbarId}>
                    {options.map((e) => (
                        <Option key={e.name} onClick={() => handleOptionClick(e.callback)}>
                            {e.name}
                        </Option>
                    ))}
                </Toolbar>
                <Editor
                    id={editorId}
                    ref={editorRef}
                    value={value}
                    onChange={handleChange}
                    onMouseUpCapture={handleMouseUpCapture}
                />
            </EditorForm>
        </>
    );
};

export default MarkdownEditor;
