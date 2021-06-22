import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
          <Redirect from="/" exact to="/search" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
