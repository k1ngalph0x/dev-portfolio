import Portfolio from "./pages/Portfolio";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <Portfolio />
      <Analytics />
    </>
  );
}

export default App;
