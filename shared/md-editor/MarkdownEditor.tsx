"use client";
import React, { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction, useId, useRef, useState } from "react";
import styled from "styled-components";

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
    justify-content: flex-end;
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

export type T_OptionCallback = (value: string, cursor: number, setValue: Dispatch<SetStateAction<string>>) => void;

export type T_Option = {
    name: string;
    callback: T_OptionCallback;
};

const addLinkCallback: T_OptionCallback = (value, cursor, setValue) => {
    const link = prompt("Enter link");

    const linkName = prompt("Enter link name");

    if (link) {
        const newValue = value.slice(0, cursor) + `[${link}](${linkName})` + value.slice(cursor);

        setValue(newValue);
    }
};

const options: T_Option[] = [{ name: "Add link", callback: addLinkCallback }];

const MarkdownEditor = () => {
    const toolbarId = useId();
    const editorId = useId();
    const editorRef = useRef<HTMLTextAreaElement | null>(null);

    const [value, setValue] = useState("");
    const [cursor, setCursor] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const handleMouseUp: MouseEventHandler<HTMLTextAreaElement> = (e) => {
        if (editorRef.current) {
            const selection = editorRef.current.selectionStart;

            setCursor(selection);
        }
    };

    console.log(value);

    return (
        <>
            <EditorForm onSubmit={(e) => e.preventDefault()}>
                <Toolbar id={toolbarId}>
                    {options.map((e) => (
                        <Option key={e.name} onClick={() => e.callback(value, cursor, setValue)}>
                            {e.name}
                        </Option>
                    ))}
                </Toolbar>
                <Editor
                    id={editorId}
                    ref={editorRef}
                    value={value}
                    onChange={handleChange}
                    onMouseUpCapture={handleMouseUp}
                />
            </EditorForm>
        </>
    );
};

export default MarkdownEditor;
