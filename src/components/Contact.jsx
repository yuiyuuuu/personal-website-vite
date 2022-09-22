import React from "react";
import $ from "jquery";

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
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        paddingTop: "5vh",
      }}
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
        <div className='form-group'>
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
          />
        </div>

        <div className='form-group'>
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
            type='text'
          />
        </div>

        <div className='form-group' id='textarea-container'>
          <label
            for='message-contactform'
            className='label-contactform-textarea'
            id='message-label-contact'
          >
            Message
          </label>
          <textarea id='message-contactform' className='input-contactform' />
          <div
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
