import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import Team from "./pages/Team";
import WebDevelopment from "./pages/WebDevelopment";
import MobDevelopment from "./pages/MobDevelopment";
import Testing from "./pages/Testing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="team" element={<Team />} />
          <Route path="webdev" element={<WebDevelopment />} />
          <Route path="mobiledev" element={<MobDevelopment />} />
          <Route path="testing" element={<Testing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
