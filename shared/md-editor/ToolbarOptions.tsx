import { RefObject } from "react";

export type T_OptionCallback = (value: string, cursor: { start: number; end: number }) => string | null;

export type T_Option = {
    name: string;
    callback: T_OptionCallback;
};

export type T_PatternMatch = {
    regex: RegExp;
    string: string;
};

const extractPatternFromString = (input: string, pattern: RegExp) => {
    const matches = [];
    let match;

    while ((match = pattern.exec(input))) {
        matches.push(match.index);
    }

    return matches;
};

export const handleSelectionLogic = (value: string, pattern: T_PatternMatch) => {
    let newVal = value.split(pattern.regex);
    const matchs = extractPatternFromString(value, pattern.regex);

    if (matchs.length == 0 || matchs.length % 2 === 0) {
        return [pattern.string, ...newVal, pattern.string].join("");
    } else {
        return newVal.join("");
    }
};

const addLinkCallback: T_OptionCallback = (value, cursor) => {
    const link = prompt("Enter link");

    const linkName = prompt("Enter link name");

    if (link && linkName) {
        const newValue = value.slice(0, cursor.start) + `[${link}](${linkName})` + value.slice(cursor.start);

        return newValue;
    } else {
        return null;
    }
};

const handleBoldCallback: T_OptionCallback = (value, cursor) => {
    if (!cursor || cursor.start == cursor.end) {
        return null;
    }
    const boldPattern: T_PatternMatch = {
        regex: /\*\*(.*?)\*\*/g,
        string: "**",
    };
    const matched = handleSelectionLogic(value.slice(cursor.start, cursor.end), boldPattern);
    console.log(cursor);
    console.log(matched);
    const newValue = value.slice(0, cursor.start) + matched + value.slice(cursor.end);

    return newValue;
};

const handleItalicCallback: T_OptionCallback = (value, cursor) => {
    if (!cursor || cursor.start == cursor.end) {
        return null;
    }
    const italicPattern: T_PatternMatch = {
        regex: /_([^_]+)_/g,
        string: "_",
    };

    console.log(cursor);
    const matched = handleSelectionLogic(value.slice(cursor.start, cursor.end), italicPattern);
    const newValue = value.slice(0, cursor.start) + matched + value.slice(cursor.end);
    return newValue;
};

export const options: T_Option[] = [
    { name: "Bold", callback: handleBoldCallback },
    { name: "Italic", callback: handleItalicCallback },
    { name: "Add link", callback: addLinkCallback },
];
