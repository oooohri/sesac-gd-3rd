// export default function PracContainer({ children }) {
// -> const {children} = props;와 같다.
export default function PracContainer({ children }) {
  return (
    <>
      <header>PostList 🐬</header>
      <main>{children}</main>
      <footer>footer 🐝</footer>
    </>
  );
}
