import { Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import EnquiryPage from "./pages/EnquiryPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlePage />} />
      <Route path="/enquiry" element={<EnquiryPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
    </Routes>
  );
}

export default App;
