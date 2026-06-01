export function validateForm(formData) {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    errors.phone = "Enter a valid 10-digit phone number";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!formData.shippingAddress.trim()) {
    errors.shippingAddress = "Shipping address is required";
  }

  if (!formData.sameBilling && !formData.billingAddress.trim()) {
    errors.billingAddress = "Billing address is required";
  }

  if (!formData.paymentMethod) {
    errors.paymentMethod = "Select a payment method";
  }

  if (formData.paymentMethod === "card" || formData.paymentMethod === "debit") {
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits";
    }

    if (!/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = "CVV must be 3 digits";
    }

    if (!formData.expiry.trim()) {
      errors.expiry = "Expiry date is required";
    }
  }

  if (formData.paymentMethod === "upi") {
    if (!/^[\w.-]+@[\w.-]+$/.test(formData.upiId)) {
      errors.upiId = "Enter a valid UPI ID";
    }
  }

  return errors;
}
