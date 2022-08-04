import { useEffect } from "react";

const Dashboard = ({ setAuthorized, user, navigate, token }) => {
  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <header>
        <h1>Kenzie Hub</h1>
        <button onClick={() => logout()}>Sair</button>
      </header>
      <div>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </div>
      <div>
        <h2>Que pena! Estamos em desenvolvimento</h2>
        <h3>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h3>
      </div>
    </>
  );
};

export default Dashboard;
