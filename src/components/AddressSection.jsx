import FormInput from "./FormInput";
import CheckboxField from "./CheckboxField";

function AddressSection({ formData, errors, onChange }) {
  return (
    <section className="section">
      <h2>Shipping Address</h2>

      <div className="grid">
        <FormInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          error={errors.fullName}
          placeholder="Enter your full name"
        />

        <FormInput
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          error={errors.phone}
          placeholder="9876543210"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          error={errors.email}
          placeholder="example@mail.com"
        />
      </div>

      <FormInput
        label="Shipping Address"
        name="shippingAddress"
        value={formData.shippingAddress}
        onChange={onChange}
        error={errors.shippingAddress}
        placeholder="House no, street, city, pincode"
      />

      <CheckboxField
        label="Use same address for billing"
        name="sameBilling"
        checked={formData.sameBilling}
        onChange={onChange}
      />
    </section>
  );
}

export default AddressSection;
