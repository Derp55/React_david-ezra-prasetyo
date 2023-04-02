import { Provider } from "react-redux";
import { Persistgate } from "redux-persist/integration/react";
import Store, {persiststore} from "./component/store";
import Counter from "./component/Counterview";

function App() {
  return (
    <Provider store={Store}>
      <Counter />
    </Provider>
  );
}

export default App;
