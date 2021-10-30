
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";



function App() {
  return (
    <div>
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
