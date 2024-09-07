import GPACalculator from "./pages/GPACalculator";
import Fileupload from "./pages/Fileupload";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CBSEQuestionBank from "./pages/CBSEQuestionBank";
import HomeScreen from "./pages/HomeScreen";
import VITQuestionBank from "./pages/VITQuestionBank";
import Footer from "./components/Footer";
import QuestionBankMenu from "./pages/QuestionBankMenu";
import About from "./pages/About";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/GPACalculator' element={<GPACalculator />} />
        <Route path='/CBSEQuestionBank' element={<CBSEQuestionBank />} />
        <Route path='/Fileupload' element={<Fileupload />} />
        <Route path='/VITQuestionBank' element={<VITQuestionBank />} />
        <Route path='/QuestionBankMenu' element={<QuestionBankMenu />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
