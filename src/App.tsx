import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button';
import Title from './components/atoms/Title';
import Textbox from './components/atoms/Textbox';

const App = () => (
  <>
    <h1>Komponenter</h1>
    <h2>Atomer</h2>
    <hr/>
    <h3>Title</h3>
    <Title>Kaffeappen</Title>
    <pre>{`<Title>Kaffeappen</Title>`}</pre>
    <h3>Button</h3>
    <hr/>
    <Button>Logga in</Button><br/>
    <pre>{`<Button>Logga in</Button>`}</pre>
    <hr/>
    <Button variant="secondary">Registrera</Button>
    <pre>{`<Button variant="secondary">Registrera</Button>`}</pre>
    <hr/>
    <Button fullWidth={true} variant="secondary">Klicka här</Button>
    <pre>{`<Button fullWidth={true} variant="secondary">Klicka här</Button>`}</pre>
    <hr/>
    <h3>Textbox</h3>
    <Textbox placeholder="användarnamn" />
    <pre>{`<Textbox placeholder="användarnamn" />`}</pre>
    <Textbox isValid={false} />
    <pre>{`<Textbox isValid={false} />`}</pre>

    <hr/>
    <h2>Molekyler</h2>
    <p>Kommer sen!</p>
    <hr/>
    <h2>Organismer</h2>
    <p>Kommer sen!</p>


  </>
)

export default App;
