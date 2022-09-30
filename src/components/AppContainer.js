import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryBtn from "./button/primary";
import SecondaryBtn from "./button/secondary";
import TertiaryBtn from "./button/tertiary";
import MiscBtn from "./button/btn-with-icon";
import TextField from "./input/text-field";
import CheckboxInput from "./input/checkbox";
function AppContainer() {
  return (
    <Router>
      <Routes>
        <Route exact path="/primary-btn" element={<PrimaryBtn />} />
        <Route path="/secondary-btn" element={<SecondaryBtn />}></Route>
        <Route path="/tertiary-btn" element={<TertiaryBtn />}></Route>
        <Route path="/misc-btn" element={<MiscBtn />}></Route>
        <Route path="/input/text-field" element={<TextField />}></Route>
        <Route path="/input/checkbox" element={<CheckboxInput />}></Route>
        <Route path="/input/radio" element={<TextField />}></Route>
        <Route path="/input/select" element={<TextField />}></Route>
      </Routes>
    </Router>
  );
}

export default AppContainer;
