import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryBtn from "./button/primary";
import SecondaryBtn from './button/secondary';
import TertiaryBtn from "./button/tertiary";
import MiscBtn from "./button/btn-with-icon";
function AppContainer() {
  return (
    <Router>
      <Routes>
        <Route exact path="/primary-btn" element={<PrimaryBtn/>}/>
        <Route path="/secondary-btn" element={<SecondaryBtn/>}></Route>
        <Route path="/tertiary-btn" element={<TertiaryBtn/>}></Route>
        <Route path="/misc-btn" element={<MiscBtn/>}></Route>
      </Routes>
    </Router>
  );
}

export default AppContainer;
