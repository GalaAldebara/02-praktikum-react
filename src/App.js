import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import Example from './Example';
import ToDo from './ToDo';

function Header () {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Aplikasi React Saya</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Greeting name="Makmur"></Greeting>
      <Counter/>
      <Footer/>
      <Example/>
      <ToDo/>
    </div>
  );
}

export default App;
