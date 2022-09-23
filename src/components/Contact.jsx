import React, { useEffect } from "react";
import $ from "jquery";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import gsap from "gsap";
import { useRef } from "react";

const Contact = () => {
  $("input").focus(function () {
    $(this).parents(".form-group").addClass("focused");

    $("input").blur(function () {
      const inputValue = $(this).val();
      if (inputValue === "") {
        $(this).parents(".form-group").removeClass("focused");
      }
    });
  });

  $("textarea").focus(function () {
    $(this).parents(".form-group").addClass("focused");

    $("textarea").blur(function () {
      const inputValue = $(this).val();
      if (inputValue === "") {
        $(this).parents(".form-group").removeClass("focused");
      }
    });
  });

  $("#textarea-container").on("keydown", "textarea", function (e) {
    $(this).css("height", "auto");
    $(this).height(this.scrollHeight);
  });
  $("#textarea-container").find("textarea").keydown();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("meqdgerw");

  const [validEmail, setValidEmail] = useState(false);

  const [taSize, settaSize] = useState(0);
  const sizeref = useRef(null);

  const handleSubmit2 = () => {
    gsap.to("#contactform", {
      opacity: 0,
      duration: 0.5,
    });

    setTimeout(() => {
      $("#contactform").addClass("nodisplay");
    }, 510);

    setTimeout(() => {
      $("#dotspinner").removeClass("nodisplay");
      $("#dotspinner").addClass("fadeincontact");
    }, 530);

    setTimeout(() => {
      $("#dotspinner").addClass("nodisplay");
      $("#thankyoumessage").removeClass("nodisplay");
      $("#thankyoumessage").addClass("fadeincontact");
    }, 2500);
  };

  const isValidEmail = (v) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(v.toLowerCase());
  };

  const handleSubmit3 = (e) => {
    console.log(handleSubmit);
    $("#error-email").addClass("nodisplay");
    $("#error-name").addClass("nodisplay");
    $("#error-message").addClass("nodisplay");
    $("#emailform").css("margin-bottom", "4vh");
    $("#nameform").css("margin-bottom", "4vh");
    $("#messageform").css("margin-bottom", "4vh");

    if (!validEmail) {
      $("#emailform").css("margin-bottom", "9vh");
      $("#error-email").removeClass("nodisplay");
    }

    if (name === "") {
      $("#nameform").css("margin-bottom", "9vh");
      $("#error-name").removeClass("nodisplay");
    }

    if (message === "") {
      $("#messageform").css("margin-bottom", "9vh");
      $("#error-message").removeClass("nodisplay");
    }

    if (message === "" || name === "" || !validEmail) {
      e.preventDefault();
      return;
    }
  };

  useEffect(() => {
    const height = sizeref.current.offsetHeight;
    settaSize((100 * height) / window.innerHeight + 100);
  }, [message]);

  useEffect(() => {
    setValidEmail(isValidEmail(email));
  }, [email]);

  return (
    <div
      style={{
        height: `${taSize}vh`,
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        paddingTop: "5vh",
      }}
      id='parentcontact'
    >
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <div className='message-top'>Contact Me</div>
        <div
          className='message-top'
          style={{ fontStyle: "italic", fontSize: "30px" }}
        >
          Feel Free to send an email to{" "}
          <a
            href='mailto:yingsonyu@gmail.com'
            style={{
              textDecoration: "underline",
              fontStyle: "italic",
              color: "white",
            }}
          >
            yingsonyu@gmail.com
          </a>
        </div>
        <div
          className='message-top'
          style={{ marginBottom: "4vh", fontSize: "30px" }}
        >
          Otherwise, you can send a message below!
        </div>

        <form
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          method='POST'
          onSubmit={
            message !== "" && name !== "" && validEmail
              ? (e) => {
                  e.preventDefault();
                  handleSubmit(e);
                  handleSubmit2();
                }
              : (e) => handleSubmit3(e)
          }
          id='contactform'
        >
          <div className='form-group' id='nameform'>
            <label
              for='name-contactform'
              className='label-contactform'
              id='name-label-contact'
            >
              Name
            </label>
            <input
              id='name-contactform'
              className='input-contactform'
              type='text'
              onChange={(e) => setName(e.target.value)}
              name='name'
            />
            <div className='errortext nodisplay' id='error-name'>
              Do you not have a name?
            </div>
          </div>

          <div className='form-group' id='emailform'>
            <label
              for='email-contactform'
              className='label-contactform'
              id='email-label-contact'
            >
              Email
            </label>
            <input
              id='email-contactform'
              className='input-contactform'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              name='email'
            />
            <div className='errortext nodisplay' id='error-email'>
              Please enter a valid email!
            </div>
          </div>

          <div className='form-group' id='textarea-container'>
            <label
              for='message-contactform'
              className='label-contactform-textarea'
              id='message-label-contact'
            >
              Message
            </label>
            <textarea
              id='message-contactform'
              className='input-contactform'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
              ref={sizeref}
            />
            <div className='errortext nodisplay' id='error-message'>
              Message must not be empty!
            </div>
            <button
              type='submit'
              disabled={state.submitting}
              id='submit-contactform'
              style={{
                top: "50%",
                position: "relative",
                left: "50%",
                transform: "translate(-50%,-50%)",
                marginTop: "30px",
              }}
            >
              Send
            </button>
          </div>
        </form>
        <div class='lds-roller nodisplay' id='dotspinner'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          style={{ color: "white", fontSize: "30px", marginTop: "35px" }}
          className='nodisplay'
          id='thankyoumessage'
        >
          Thank you. Your message has been received.
        </div>
      </div>
    </div>
  );
};

export default Contact;
