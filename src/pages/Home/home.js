import React from 'react'
import User from "./container/User";
import Todo from "./container/Todo";

const Home = () => (
  <>
    <header>
      <h1>Todos</h1>
    </header>

    <main id="main">
      <User />
      <Todo />
    </main>

    <footer>
      <p>TodoMVC-Demo</p>
      <p>Doubleclick to edit your Todos</p>
      <p>Daniel Xu | 2020.1.25</p>
    </footer>
  </>
);

export default Home;