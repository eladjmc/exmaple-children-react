import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <>
      <FormComponent>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" type="text" name="username" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input id="password" type="password" name="password" />
        </div>
      </FormComponent>
    </>
  );
}

export default App;
