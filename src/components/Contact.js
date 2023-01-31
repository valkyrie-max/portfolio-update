import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("moqkayqd");
    if (state.succeeded) {
        return <p>Thanks for your message! I'll get back to you as soon as I can.</p>;
    }

    return (
        <div className="contact-content">
            <h2>Contact me</h2>

            <h3>Wanna chat with me about anything?</h3>
            <p>I’m open to chat about everything cool, fun, and life-changing! Reach out to me through any of the following:</p>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    required 
                    id="email"
                    placeholder="your email" 
                    type="email" 
                    name="email"
                />
                <input 
                    required 
                    id="personName" 
                    placeholder="your name" 
                    type="text" 
                    name="personName"/>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact