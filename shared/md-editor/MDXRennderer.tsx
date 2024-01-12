"use server";
import { MDXRemote } from "next-mdx-remote/rsc";
import { HTMLAttributes } from "react";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

const CodeBlock = (props: HTMLAttributes<HTMLElement>) => {
    hljs.registerLanguage("typescript", typescript);
    return (
        <code
            className="typescript"
            dangerouslySetInnerHTML={{
                __html:
                    typeof props.children === "string" && hljs.highlight(props.children, { language: "typescript" }).value,
            }}
        />
    );
};

export default CodeBlock;

export const CustomMDX = ({ src }: { src: string }) => {
    const components = {
        h1: (props: HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ color: "tomato" }} {...props} />,
        pre: (props: HTMLAttributes<HTMLElement>) => (
            <pre style={{ backgroundColor: "black", padding: "1rem", color: "white" }} {...props} />
        ),
        code: (props: HTMLAttributes<HTMLElement>) => <CodeBlock {...props} />,
    };

    return <MDXRemote source={src} components={components} />;
};
