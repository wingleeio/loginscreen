export default function SignIn() {
  return (
    <div className="panel">
      <h1>Login</h1>
      <p>Enter your username and password to login.</p>
      <form>
        <div>
          <input type="text" placeholder="Enter your username" name="username" />
        </div>
        <div>
          <input type="text" placeholder="Enter your username" name="username" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
