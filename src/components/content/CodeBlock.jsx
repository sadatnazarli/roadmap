import CodeEditor from '../interactive/CodeEditor';

export default function CodeBlock({ lang = 'bash', filename, title, showLineNumbers = false, children }) {
    return (
        <CodeEditor lang={lang} filename={filename} title={title} showLineNumbers={showLineNumbers}>
            {children}
        </CodeEditor>
    );
}
