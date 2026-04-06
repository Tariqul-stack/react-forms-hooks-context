import "./App.css";
import ControlledFilled from "./components/ControlledField/ControlledFilled";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>React forms hooks context api</h1>
      {/* <SimpleForm /> */}
      {/* <FormAction /> */}
      {/* <ControlledFilled /> */}
      {/* <UnControlledField /> */}
      {/* <HookForm /> */}
      {/* <ProductManagement /> */}
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
