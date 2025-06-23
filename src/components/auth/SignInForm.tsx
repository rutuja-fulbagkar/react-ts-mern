import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (email === "admin" && password === "123456") {
      // Save static token
      localStorage.setItem("accessToken", "demo-static-token-123");

      // Navigate to dashboard
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            className="w-full p-2 border rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
