import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
// View more styles here: https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/

export default function CodeViewer({ codeString }: { codeString: string }) {
  return (
    <SyntaxHighlighter language="javascript" style={anOldHope}>
      {codeString}
    </SyntaxHighlighter>
  );
}
