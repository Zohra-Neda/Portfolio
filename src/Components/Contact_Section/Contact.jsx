import React, { useRef } from 'react'
import './contact.scss'

// imported icons ==========================>
import { BsInstagram } from 'react-icons/bs'
import { TbArrowBigRightLines } from 'react-icons/tb'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

// EmailJS =================================>
  import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s79bjuo', 'template_xv7wx0v', form.current, {
        publicKey: 'jJED9zU-68yH_OmMU',
      })
      // .then(
      //   () => {
      //     console.log('SUCCESS!');
      //   },
      //   (error) => {
      //     console.log('FAILED...', error.text);
      //   },
      // );
      e.target.reset(); // the form will reset after submit
  };
  return (
    <section id='contact' className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className="icon"/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @zohraneda
              </span>

              <div>
                <a href="instagram.com" className="flex" target="_blank">
                  Send Message <TbArrowBigRightLines className="icon"/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiFillLinkedin className="icon"/>
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">
                Zohra Neda
              </span>

              <div>
                <a href="https://www.linkedin.com/in/zohra-neda/" className="flex" target="_blank">
                  Send Message <TbArrowBigRightLines className="icon"/>
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiOutlineTwitter className="icon"/>
              </div>
              <h4>Twitter</h4>
              <span className="userName">
                @zohraneda
              </span>

              <div>
                <a href="instagram.com" className="flex" target="_blank">
                  Send Message <TbArrowBigRightLines className="icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter your Name" name="name" />
            <input type="email" placeholder="Enter your Email" name="email" />
            <textarea name="message" placeholder="Enter your messgae"></textarea>
            <button type="submit" name="submit" className="formBtn">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
