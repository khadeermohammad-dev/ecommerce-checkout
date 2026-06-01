import FormInput from "./FormInput";
import RadioGroup from "./RadioGroup";
import { paymentMethods } from "../data/paymentMethods";

function PaymentSection({ formData, errors, onChange }) {
  const showCardFields =
    formData.paymentMethod === "card" || formData.paymentMethod === "debit";

  const showUpiField = formData.paymentMethod === "upi";

  return (
    <section className="section">
      <h2>Payment Method</h2>

      <RadioGroup
        label="Choose payment option"
        name="paymentMethod"
        options={paymentMethods}
        selected={formData.paymentMethod}
        onChange={onChange}
        error={errors.paymentMethod}
      />

      {showCardFields && (
        <div className="grid">
          <FormInput
            label="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={onChange}
            error={errors.cardNumber}
            placeholder="16 digit card number"
          />

          <FormInput
            label="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={onChange}
            error={errors.cvv}
            placeholder="123"
          />

          <FormInput
            label="Expiry"
            name="expiry"
            value={formData.expiry}
            onChange={onChange}
            error={errors.expiry}
            placeholder="MM/YY"
          />
        </div>
      )}

      {showUpiField && (
        <FormInput
          label="UPI ID"
          name="upiId"
          value={formData.upiId}
          onChange={onChange}
          error={errors.upiId}
          placeholder="username@upi"
        />
      )}

      {formData.paymentMethod === "wallet" && (
        <p className="hint">Wallet payment will be processed securely.</p>
      )}
    </section>
  );
}

export default PaymentSection;
