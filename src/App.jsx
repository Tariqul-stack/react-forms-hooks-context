import "./App.css";
import ControlledFilled from "./components/ControlledField/ControlledFilled";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>React forms hooks context api</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledFilled></ControlledFilled> */}
      {/* <UnControlledField></UnControlledField> */}
      <HookForm></HookForm>
    </>
  );
}

export default App;
