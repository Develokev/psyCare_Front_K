import { FooterBar } from "./Home/Components/FooterBar";
import NavBarHome from "./Home/Components/NavBarHome";
import { AppRouters } from "./Routers/AppRouters";

export function App() {

  return (

    <>
      <header>
          <NavBarHome /> 
      </header>

      <main>
          <AppRouters />
      </main>

      <footer>
          <FooterBar />
      </footer>
    </>
  )
}
