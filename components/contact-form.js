import React from "react";
import { ContactFormTitle } from "@/data";

const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10">
            <form
              action="#"
              method="post"
              className="contactFrom"
              id="contactForm"
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required text-right"
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="الاسم الاول"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required text-right"
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="اسم العائلة"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required text-right"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="البريد الالكتروني"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form text-right"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="الجوال"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required text-right"
                    name="con_message"
                    id="con_message"
                    placeholder="الرسالة"
                  ></textarea>
                </div>
              </div>
              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
              >
                <span>ارسال</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
