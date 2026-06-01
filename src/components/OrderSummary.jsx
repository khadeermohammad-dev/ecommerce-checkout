function OrderSummary({ isValid }) {
  return (
    <aside className="summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <strong>₹2,499</strong>
      </div>

      <div className="summary-row">
        <span>Delivery</span>
        <strong>₹49</strong>
      </div>

      <div className="summary-row discount">
        <span>Discount</span>
        <strong>-₹250</strong>
      </div>

      <div className="summary-total">
        <span>Total</span>
        <strong>₹2,298</strong>
      </div>

      <button type="submit" disabled={!isValid}>
        Place Order
      </button>

      {!isValid && <p className="hint">Complete all required fields</p>}
    </aside>
  );
}

export default OrderSummary;
