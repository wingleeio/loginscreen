export default function SignUp() {
  return (
    <div className="panel">
      <h1>Register</h1>
      <p>Enter the following information to create your account.</p>
      <form>
        <div>
          <input type="text" placeholder="Enter your username" name="username" />
        </div>
        <div>
          <input type="text" placeholder="Enter your username" name="username" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
