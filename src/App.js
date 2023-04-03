import { BrowserRouter, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Test from "./pages/Test";
import End from "./pages/End";

function App() {
  
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/test/:id">
          <Test/>
        </Route>

        <Route path="/end">
          <End/>
        </Route>

        <Route path="/">
          <Start/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

// 라우터 주소 긴걸 위에서부터 적어야함 예를들어 /가 제일 위에 있으면 거기에 걸려서 다른 페이지 못감ㅋ
