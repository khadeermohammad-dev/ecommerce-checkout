import FormInput from "./FormInput";

function BillingSection({ formData, errors, onChange }) {
  if (formData.sameBilling) return null;

  return (
    <section className="section">
      <h2>Billing Address</h2>

      <FormInput
        label="Billing Address"
        name="billingAddress"
        value={formData.billingAddress}
        onChange={onChange}
        error={errors.billingAddress}
        placeholder="Enter billing address"
      />
    </section>
  );
}

export default BillingSection;
