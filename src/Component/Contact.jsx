import "./Contact.css";


const Contact = () => {
  return (
<>
<div className="contact-section" id="contact">
      <div className="container">
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Message:</label>
            <textarea name="message" />
            <button className="--btn-contact">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    </>
    
  );
};

export default Contact;
