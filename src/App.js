import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [steps] = useState([
    { title: 'Step 1' },
    { title: 'Step 2' },
    { title: 'Step 3' },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    address: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted values:', inputValues);
  };
  return (
    <div>
      
      <Stepper
        steps={steps}
        activeStep={currentStep}
        activeColor="#007bff"
        completeColor="#28a745"
      />
      <div className='container'>
      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <div className='form-group'>
            <label htmlFor="name">Name:</label>
            <input  className='form-control' type="text" name="name" value={inputValues.name} onChange={handleInputChange} />
          </div>
        )}
        {currentStep === 1 && (
          <div className='form-group'>
            <label htmlFor="email">Email:</label>
            <input  className='form-control' type="email" name="email" value={inputValues.email} onChange={handleInputChange} />
          </div>
        )}
        {currentStep === 2 && (
          <div className='form-group'>
            <label htmlFor="address">Address:</label>
            <input className='form-control' type="text" name="address" value={inputValues.address} onChange={handleInputChange} />
          </div>
        )}
        <div>
          {currentStep > 0 && (
            <button className='btn btn-primary mt-4 me-4' type="button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button className='btn btn-primary mt-4 me-4' type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className='btn btn-primary mt-4' type="submit">Submit</button>
          )}
        </div>
      </form>
      </div>
    </div>
  );
};

export default App;