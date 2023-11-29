
import './App.css';


   function App() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Facebook</title>
        <link rel="stylesheet" href="App.css" />
        <div className="box">
          <div className="title-box">
            <img src="https://i.postimg.cc/NMyj90t9/logo.png" alt="Facebook" />
            <p>Facebook helps you connect and share with the people in your life.</p>
          </div>
      
          <div className="form-box">
            <form action="#">
              <input type="text" placeholder="Email address or phone number" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log In</button>
              <a href="#">Forgotten Password</a>
            </form>
            <hr />
            <div className="create-btn">
              <a href="#">Create New Account</a>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default App
