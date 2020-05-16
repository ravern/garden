import NavigationBar from "~/components/NavigationBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}
