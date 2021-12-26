import "./styles/styles.css";
import Router from "./components/router.jsx";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <Router />
        </div>
      </main>

      <Footer />
    </>
  );
}
