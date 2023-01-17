export default function Section({ id, classprops, children }) {
  return (
    <section id={id} className={classprops}>
      {children}
    </section>
  );
}
