import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Movies from "./components/Movies";
import Admin from "./components/Admin";
import Home from "./components/Home";
import OneMovie from "./components/OneMovie";
import Genres from "./components/Genres";
import OneGenre from "./components/OneGenre";
import EditMovie from "./components/EditMovie";
import { Component } from "react/cjs/react.production.min";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      jwt: "",
    };
    this.handleJwtChange(this.handleJwtChange.bind(this));
  }

  handleJwtChange = (jwt) => {
    this.setState({ jwt: jwt });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <h1 className="mt-3">Go Watch a Movie!</h1>
            <hr className="mb-3"></hr>
          </div>

          <div className="row">
            <div className="col-md-2">
              <nav>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/movies">Movies</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/by-genres">Genres</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/admin/movie/0">Add Movie</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/admin/movie">Manage Catalogue</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-md-10">
              <Switch>
                <Route path="/movies/:id" component={OneMovie} />
                <Route path="/movies" component={Movies} />
                <Route path="/genre/:id" component={OneGenre} />
                <Route exact path="/by-genres" component={Genres} />
                <Route path="/admin/movie/:id" component={EditMovie} />
                <Route path="/admin/movie" component={Admin} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function Movie() {
  let { id } = useParams();

  return <h2>Movie id {id}</h2>;
}
