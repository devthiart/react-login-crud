import Stepper from "./components/Stepper";

function App() {
  const arrayLabels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <>
      <h1>Formulário de Cadastro</h1>
      <Stepper 
        activeStep={2}
        labels={arrayLabels}
      />
    </>
  );
}

export default App;
