import './App.css';
import { Configuration } from "@react-md/layout";
//@ts-ignore
import { useRoutes, A } from "hookrouter";

import routes from './router';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <Configuration>
      <div className="App content">
        {routeResult}
      </div>
    </Configuration>
  );
}

export default App;
