import {RouterProvider} from "react-router-dom"
import { MainRouter } from "./Router/MainRouter";
import {Provider} from "react-redux"
import { store } from "./Component/Global/store";

const App = ()=>{
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={MainRouter}/>
      </Provider>
    </div>
  );
}

export default App;
