export default function SpanError({ text }) {
    if (!text) {
        return null;
    }
    return <span className="mt-2 text-xs text-red-500">{text}</span>;
}
