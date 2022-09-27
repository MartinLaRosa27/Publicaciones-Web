import { Footer } from "./components/Footer.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { PublicacionesProvider } from "./context/PublicacionesProvider.jsx";

function App() {
  return (
    <>
      <PublicacionesProvider>
        <NavBar />
        <Footer />
      </PublicacionesProvider>
    </>
  );
}

export default App;
