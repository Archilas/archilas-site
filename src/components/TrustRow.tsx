export function TrustRow({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex h-fit flex-wrap items-center gap-x-6 gap-y-2">
      {items.map((item) => (
        <li key={item} className="label">
          {item}
        </li>
      ))}
    </ul>
  );
}
