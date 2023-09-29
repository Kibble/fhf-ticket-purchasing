import './App.css';
import { Configuration } from "@react-md/layout";
//@ts-ignore
import { useRoutes } from "hookrouter";
import { Provider } from 'react-redux';

import store from './redux/store';
import routes from './router';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <Configuration>
      <Provider store={store}>
        <div className="App content">
          {routeResult}
        </div>
      </Provider>
    </Configuration>
  );
}

export default App;
