const Dashboard = ({ setAuthorized }) => {
  const teste = () => {
    setAuthorized(false);
  };
  return (
    <>
      <button onClick={() => teste()}>aaaaaaaaaaaaaaaa</button>
    </>
  );
};

export default Dashboard;
