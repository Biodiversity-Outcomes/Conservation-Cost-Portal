import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import About from "./pages/About";
import Collecting from "./pages/Collecting";
import Reporting from "./pages/Reporting";
import Studies from "./pages/Studies_Data";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/collecting" element={<Collecting />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/studies_data" element={<Studies />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppLayout>
  );
}

export default App
