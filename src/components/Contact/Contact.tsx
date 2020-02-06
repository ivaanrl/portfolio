import React, { useState } from 'react';
import './Contact.scss';
import * as emailjs from 'emailjs-com';
const Contact = () => {
  const [feedback, setFeedback] = useState();
  const [email, setEmail] = useState();

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.currentTarget.id === 'email') {
      setEmail(event.currentTarget.value);
    } else {
      setFeedback(event.currentTarget.value);
    }
  };

  const handleSubmit = () => {
    const templateId = 'template_6UyWUtVR';
    sendFeedback(templateId, {
      message_html: feedback,
      from_email: email
    });
    resetForm();
  };

  const sendFeedback = (templateId: string, variables: {}) => {
    emailjs.send('gmail', templateId, variables, 'user_Tqu4Qb768TWFhX3VukiG7');
  };

  const resetForm = () => {
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="container" id="contact">
      <div className="title-container">
        <div className="title contact-main-title">Contact</div>
      </div>
      <form className="test-mailing">
        <h1>Feel Free to Contact Me</h1>
        <div>
          <label>Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            required
            placeholder="Email@example.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            id="test-mailing"
            name="test-mailing"
            onChange={handleChange}
            placeholder="Insert your message here"
            required
            value={feedback}
          />
        </div>
        <button type="button" className="btn-contact" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
