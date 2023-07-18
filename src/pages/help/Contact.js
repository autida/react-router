import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <lable>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </lable>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
