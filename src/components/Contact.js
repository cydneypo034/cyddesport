import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/434d7a00-33cc-11ee-b436-9790aa40195d";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <section className="hero is-small">
                <h1 className="h1Font">Contact Me 💌</h1>
                <h2 className="DocSubFont">Feel free to fill out the contact form below if you'd like to contact me in regards to employment and network opportunities.</h2>

    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
     <div className="field">
            <label className="label">Name</label>
            <div className="control">
            <input className="input" type="text" placeholder="Your name" name="name" required />
            </div>
    </div>
    <div className="field">
            <label className="label">Email</label>
            <div className="control">
            <input className="input" type="email" placeholder="Email" name="email" required />
            </div>
    </div>
    <div className="field">
                <label className="label">Message</label>
                <div className="control">
                <textarea className="textarea" placeholder="Your message" name="message" required />
                </div>
      </div>

      <div className="field">
                <div className="control">
                    <button className="button is-link" type="submit" style= {{ color: 'white', background: '#C18FC6'}}>Submit</button>
                </div>
        </div>
    </form>
    </section>

  );
};

export default ContactForm;