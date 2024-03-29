import React from "react";
import Link from "next/link";
import { TrustClientData } from "@/data";

const TrustedClient = ({ extraClassName }) => {
  const { image, title, text, url } = TrustClientData;
  return (
    <section className={`commonSection trustClient ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="CL_content">
              <img src={image} alt="" />
              <div className="abc_inner">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 col-md-5"></div>
                  <div className="col-lg-7 col-sm-12 col-md-7">
                    <div className="abci_content">
                      <h2 className="text-right">{title}</h2>
                      <p className="text-right">{text}</p>
                      <div className="text-right">
                      <Link href={url}>
                        <a className="common_btn red_bg">
                          <span>المزيد</span>
                        </a>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClient;
