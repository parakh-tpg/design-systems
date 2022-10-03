import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryBtn from "./button/primary";
import SecondaryBtn from "./button/secondary";
import TertiaryBtn from "./button/tertiary";
import MiscBtn from "./button/btn-with-icon";
import TextField from "./input/text-field";
import CheckboxInput from "./input/checkbox";
import RadioInput from "./input/radio";
import SelectInput from "./input/select";
function AppContainer() {
  return (
    <Router>
      <Routes>
        <Route exact path="/button/primary-btn" element={<PrimaryBtn />} />
        <Route
          exact
          path="/button/secondary-btn"
          element={<SecondaryBtn />}
        ></Route>
        <Route
          exact
          path="/button/tertiary-btn"
          element={<TertiaryBtn />}
        ></Route>
        <Route exact path="/button/misc-btn" element={<MiscBtn />}></Route>
        <Route exact path="/input/text-field" element={<TextField />}></Route>
        <Route exact path="/input/checkbox" element={<CheckboxInput />}></Route>
        <Route exact path="/input/radio" element={<RadioInput />}></Route>
        <Route exact path="/input/select" element={<SelectInput />}></Route>
      </Routes>
    </Router>
  );
}

export default AppContainer;
