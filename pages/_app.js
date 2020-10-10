import "../css/tailwind.css";
import "../css/Main.css";
import { SidebarProvider } from "../context/SidebarState";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
