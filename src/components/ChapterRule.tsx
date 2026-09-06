export function ChapterRule({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <p className="chapter-rule">
      <span>{index}</span>
      <span className="chapter-rule-line" aria-hidden />
      <span>{title}</span>
    </p>
  );
}
