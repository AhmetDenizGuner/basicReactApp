import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="form-signin">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <input type="email" className="form-control"  placeholder="Email address"/>
              <input type="password" className="form-control"  placeholder="Password"/>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default App;
