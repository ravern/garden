import Node from "./components/Node";

export default function Page({ page, onClick }) {
  const doc = page.content;

  return (
    <article onClick={onClick}>
      <Node node={doc} />
    </article>
  );
}
