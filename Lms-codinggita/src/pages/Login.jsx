import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DUMMY_USERS = [
  { role: "Student", identifier: "108711", password: "123456" },
  { role: "Mentor", identifier: "mentor@example.com", password: "mentorpassword" },
  { role: "Admin", identifier: "admin@example.com", password: "adminpassword" }
];

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState(() => localStorage.getItem("login_role") || "Student")
  const [identifier, setIdentifier] = useState(() => localStorage.getItem("login_identifier") || "")
  const [password, setPassword] = useState(() => localStorage.getItem("login_password") || "")
  const [error, setError] = useState("")

  const handleLogin = () => {
    const user = DUMMY_USERS.find(
      (u) => u.role === role && u.identifier === identifier && u.password === password
    );

    if (user) {
      localStorage.setItem("login_role", role);
      localStorage.setItem("login_identifier", identifier);
      localStorage.setItem("login_password", password);
      setError("");
      console.log("Logged in and saved data to local storage!");
      navigate("/student-dashboard");
    } else {
      setError("Wrong data entered");
    }
  };

  return (
    <div>

      <div className="border border-zinc-800 w-110 p-8 rounded-2xl flex flex-col gap-2 mt-30">

        <div className="text-center">
          <h1 className="text-3xl font-semibold">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to your account</p>
        </div>

        <div>
          <p className="text-sm mb-2 text-gray-300">Role</p>

          <div className="flex gap-3">

            <button
              onClick={() => { setRole("Student"); setError(""); }}
              className={`px-4 py-2 rounded-lg border ${role === "Student"
                ? "bg-white text-black"
                : "border-zinc-700 text-white"
                }`}
            >
              Student
            </button>

            <button
              onClick={() => { setRole("Mentor"); setError(""); }}
              className={`px-4 py-2 rounded-lg border ${role === "Mentor"
                ? "bg-white text-black"
                : "border-zinc-700 text-white"
                }`}
            >
              Mentor
            </button>

            <button
              onClick={() => { setRole("Admin"); setError(""); }}
              className={`px-4 py-2 rounded-lg border ${role === "Admin"
                ? "bg-white text-black"
                : "border-zinc-700 text-white"
                }`}
            >
              Admin
            </button>

          </div>
        </div>

        <div>
          <p className="text-sm mb-2 text-gray-300">
            {role === "Student" ? "University UID" : "Email"}
          </p>

          <input
            type={role === "Student" ? "text" : "email"}
            value={identifier}
            onChange={(e) => { setIdentifier(e.target.value); setError(""); }}
            placeholder={
              role === "Student"
                ? "Enter your University UID"
                : "name@example.com"
            }
            className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-gray-500"
          />
        </div>

        <div>
          <p className="text-sm mb-2 text-gray-300">Password</p>

          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            placeholder="••••••••"
            className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-gray-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-gray-200 text-black py-3 rounded-lg font-medium hover:bg-white transition"
        >
          Sign in
        </button>

        <p className="text-center text-xs text-gray-500">
          Use your role-based credentials. Contact admin if you need help.
        </p>

      </div>

    </div>
  )
}