import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button';
import Title from './components/atoms/Title';
import Textbox from './components/atoms/Textbox';
import AlertList from './components/atoms/AlertList';
import LoginForm, { FormData } from './components/molecules/LoginForm';

const App = () => {

  return (
    <>
      <h1>Komponenter</h1>
      <h2>Atomer</h2>
      <hr />
      <h3>Title</h3>
      <Title>Kaffeappen</Title>
      <pre>{`<Title>Kaffeappexn</Title>`}</pre>
      <h3>Button</h3>
      <hr />
      <Button>Logga in</Button><br />
      <pre>{`<Button>Logga in</Button>`}</pre>
      <hr />
      <Button variant="secondary">Registrera</Button>
      <pre>{`<Button variant="secondary">Registrera</Button>`}</pre>
      <hr />
      <Button fullWidth={true} variant="secondary">Klicka här</Button>
      <pre>{`<Button fullWidth={true} variant="secondary">Klicka här</Button>`}</pre>
      <hr />
      <h3>Textbox</h3>
      <Textbox placeholder="användarnamn" />
      <pre>{`<Textbox placeholder="användarnamn" />`}</pre>
      <Textbox isValid={false} />
      <pre>{`<Textbox isValid={false} />`}</pre>
      <Textbox fullWidth={true} />
      <pre>{`<Textbox fullWidth={true} />`}</pre>
      <h3>AlertList</h3>
      <AlertList variant="danger">
        <li>Användarnamnet är upptaget</li>
        <li>Lösenorden stämmer inte överens</li>
      </AlertList>
      <pre>{`
<AlertList>
  <li>Användarnamnet är upptaget</li>
  <li>Lösenorden stämmer inte överens</li>
</AlertList>`}</pre>
      <AlertList variant="success">
        <li>Du har nu blivit registerad. Nu kan du logga in!</li>
      </AlertList>
      <pre>{`
<AlertList variant="success">
  <li>Du har nu blivit registerad. Nu kan du logga in!</li>
</AlertList>`}</pre>
      <hr />
      <h2>Molekyler</h2>
      <h3>LoginForm</h3>
      <LoginForm onSubmit={(formData: FormData) => console.log(formData)} />
      <pre>{`<LoginForm onSubmit={(formData: FormData) => console.log(formData)} />`}</pre>
      <hr />
      <h2>Organismer</h2>
      <p>Kommer sen!</p>


    </>
  )
}

export default App;
