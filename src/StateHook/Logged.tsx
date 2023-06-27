import { ChangeEvent, FormEvent, useState } from "react";

export const Logged = () => {
  const userInfo = {
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirm: ""
  };
  const [form, setForm] = useState(userInfo);
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(true);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogout(false);
  };
  const Allhandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: [e.target.value] });
    console.log({ ...form });
  };

  const Handler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        User login:
        {login ? (
          <form>
            <input type="text" placeholder="username" />
            <br />
            <input type="text" placeholder="password" />
            <br />
            <button>Sign In</button>
          </form>
        ) : (
          "logout"
        )}
      </div>
      <br />
      <br />
      <div>
        Sign UP:
        {logout ? (
          <form onSubmit={(e) => Handler(e)}>
            <label htmlFor="firstname"></label>
            <input
              type="text"
              id="firstname"
              placeholder="firstname"
              onChange={(e) => Allhandler(e)}
            />
            <br />
            <label htmlFor="lasttname"></label>
            <input type="text" id="lastname" placeholder="lastname" />
            <br />
            <label htmlFor="mobile"></label>
            <input type="text" id="mobile" placeholder="mobile number" />
            <br />
            <label htmlFor="email"></label>
            <input type="text" id="email" placeholder="email" />
            <br />
            <label htmlFor="password"></label>
            <input type="text" id="password" placeholder="password" />
            <br />
            <label htmlFor="confrim"></label>
            <input type="text" id="confirm" placeholder="confirm" />
            <br />
            <button>Sign Up</button>
          </form>
        ) : (
          "logout"
        )}
      </div>
    </div>
  );
};
