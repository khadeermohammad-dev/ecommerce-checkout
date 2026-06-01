import { useState } from "react";
import AddressSection from "./components/AddressSection";
import BillingSection from "./components/BillingSection";
import PaymentSection from "./components/PaymentSection";
import OrderSummary from "./components/OrderSummary";
import { validateForm } from "./utils/validation";

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  shippingAddress: "",
  sameBilling: true,
  billingAddress: "",
  paymentMethod: "",
  cardNumber: "",
  cvv: "",
  expiry: "",
  upiId: "",
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const validationErrors = validateForm(formData);
  const isFormValid = Object.keys(validationErrors).length === 0;

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setOrderPlaced(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const currentErrors = validateForm(formData);

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      setOrderPlaced(false);
      return;
    }

    setErrors({});
    setOrderPlaced(true);
  }

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <p>Secure Checkout</p>
          <h1>E-Commerce Checkout Form</h1>
          <span>Complete your address and payment details</span>
        </header>

        <form className="checkout-layout" onSubmit={handleSubmit}>
          <div className="form-card">
            <AddressSection
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />

            <BillingSection
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />

            <PaymentSection
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />

            {orderPlaced && (
              <p className="success">Order placed successfully!</p>
            )}
          </div>

          <OrderSummary isValid={isFormValid} />
        </form>
      </div>
    </main>
  );
}

export default App;
