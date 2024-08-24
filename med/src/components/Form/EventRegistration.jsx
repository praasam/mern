import React, { useState } from 'react';

const Step1 = ({ formData, handleChange, nextStep, formErrors }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange('name')}
          className={`border p-2 w-full ${formErrors.name && 'border-red-500'}`}
        />
        {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
      </div>
      <div className="flex justify-center">
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2">
          Next
        </button>
      </div>
    </div>
  );
};

const Step2 = ({ formData, handleChange, nextStep, prevStep, formErrors }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange('email')}
          className={`border p-2 w-full ${formErrors.email && 'border-red-500'}`}
        />
        {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
      </div>
      <div className="flex justify-between w-full">
        <a href="#" onClick={prevStep} className="text-gray-500 underline px-4 py-2">
          Back
        </a>
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2">
          Next
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ formData, handleChange, nextStep, prevStep, formErrors }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event">
          Event
        </label>
        <select
          id="event"
          value={formData.event}
          onChange={handleChange('event')}
          className={`border p-2 w-full ${formErrors.event && 'border-red-500'}`}
        >
          <option value="">Select an event</option>
          <option value="event1">Event 1</option>
          <option value="event2">Event 2</option>
          <option value="event3">Event 3</option>
        </select>
        {formErrors.event && <p className="text-red-500 text-xs italic">{formErrors.event}</p>}
      </div>
      <div className="flex justify-between w-full">
        <a href="#" onClick={prevStep} className="text-gray-500 underline px-4 py-2">
          Back
        </a>
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2">
          Next
        </button>
      </div>
    </div>
  );
};

const Confirm = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl mb-5 text-center">Confirm Your Details</h2>
      <ul className="mb-5 text-center">
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Event:</strong> {formData.event}</li>
      </ul>
      <div className="flex justify-between w-full">
        <a href="#" onClick={prevStep} className="text-gray-500 underline px-4 py-2">
          Back
        </a>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
          Confirm & Submit
        </button>
      </div>
    </div>
  );
};

const Success = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl mb-5">Success!</h2>
      <p>You have successfully registered for the event.</p>
    </div>
  );
};

const EventRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const validateStep1 = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    return errors;
  };

  const validateStep2 = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };

  const validateStep3 = () => {
    let errors = {};
    if (!formData.event) errors.event = "Event selection is required";
    return errors;
  };

  const nextStep = () => {
    let errors = {};
    switch (step) {
      case 1:
        errors = validateStep1();
        break;
      case 2:
        errors = validateStep2();
        break;
      case 3:
        errors = validateStep3();
        break;
      default:
        break;
    }
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const renderStep = () => {
    if (isSubmitted) {
      return <Success />;
    }
    
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} formErrors={formErrors} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} formErrors={formErrors} />;
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} formErrors={formErrors} />;
      case 4:
        return <Confirm formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="https://i.pinimg.com/564x/a6/d8/74/a6d874a59afe33aa04cfd58bd3584e1f.jpg" alt="Event" className="mt-20 object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
          <h1 className="text-2xl mt-10 mb-0 text-center font-bold">Event Registration</h1>
          <form onSubmit={handleSubmit} className="flex-grow flex flex-col items-center justify-center">
            {renderStep()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
