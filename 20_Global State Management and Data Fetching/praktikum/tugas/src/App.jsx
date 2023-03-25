import { Provider } from "react-redux";
import Store from "./component/store";
import Counter from "./component/Counterview";

function App() {
  return (
    <Provider store={Store}>
      <Counter />
    </Provider>
  );
}

export default App;
