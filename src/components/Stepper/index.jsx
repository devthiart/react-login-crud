import {
  StyleWrapperSteppers,
  StyleIconContainer,
  StyleLabel,
  StyleStepConnector,
  StyleIconCheck
} from "./styles";
import IconCheck from '../../assets/img/tick.svg';

function Stepper({ labels, activeStep }) {

  const structure = labels.map(
    (label, index) => {
      const needStepConnector = (index < labels.length - 1);
      const stepCompleted = (index < activeStep);
      const thisStepIsActive = (index === activeStep);
      let stepConnector = null;

      if(needStepConnector) {
        stepConnector = <StyleStepConnector />
      }

      return (
        <>
          <Step index={index} active={thisStepIsActive} stepCompleted={stepCompleted}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
          { stepConnector }
        </>
      )
    }
  );

  return (
    <StyleWrapperSteppers>
      { structure }
    </StyleWrapperSteppers>
  )
}

function Step({ children, index, active, stepCompleted }) {
  const valueIcon = stepCompleted ? (<StyleIconCheck src={IconCheck} alt="Ícone check" />) : (index + 1);
  const color = stepCompleted || active ? '#6070E0' : '#CCCCCC';

  return (
    <>
      <StyleIconContainer color={color}>
        {valueIcon}
      </StyleIconContainer>
      { children}
    </>
  );
}

function StepLabel({ children }) {
  return (
    <StyleLabel>
      { children }
    </StyleLabel>
  );
}

export default Stepper;