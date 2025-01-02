import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";

import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/work"; 
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ContactUs } from "./pages/Contact/Contact";
function App() {
  const [theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <MobileNav/>
     <Layout/>
    <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp /> {/* Corrected component usage */}
        <ContactUs/>
        </div>

        <div className="footer pb-3 ms-3">
     
            <h6 className="text-center">Developed With ❤️ by Nikhil Jain &copy; 2024</h6>
          
        </div>
        </div>
        <ScrollToTop smooth
        color="#f29f67"
        style={{backgroundColor:"#1e1e2c", borderRadius:"80px"}}/>
       
      

    </>
  );
}
export default App