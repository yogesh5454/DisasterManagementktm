import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" text-white bg-[#0a2240]">
        <div className="px-45 flex flex-row py-10">
          {" "}
          <div className="contact basis-1/3 pr-5">
            <h1 className="text-xl font-bold pb-2">
              Kathmandu Metropolitan City, Office of Municipal Executive,
              Bagmati Province
            </h1>
            <div className="flex flex-col space-y-3  font-semibold">
              {" "}
              <h3>Bagdurbar, Kathmandu</h3>
              <h3>Email: info@Kathmandu.com</h3>
              <h3>Phone: +977 14231481</h3>
              <h3>Mobile: +977 9823846252</h3>
            </div>
          </div>
          <div className="ktmmap basis-1/3 pl-4">
            <h1 className="text-lg font-semibold pb-6">Google Map</h1>
            <iframe
              className="h-60 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.65322787261!2d85.24373135767756!3d27.708935957714655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1741333015422!5m2!1sen!2snp"
              frameborder="0"
            ></iframe>
          </div>
          <div className="basis-1/3">
            <h1 className="pb-5 text-xl font-bold">Important Links</h1>
            <div className="flex flex-col space-y-3 font-semibold">
              <a href="">ERCC - Emergency Response Coordination Centre</a>
              <a href="">Union Civil Protection Knowledge Network</a>
              <a href="">Follow the Disaster Recovery on social media</a>
              <a href="">ERCC - Emergency Response Coordination Centre</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-500 text-white text-center py-3">
        <h3>
          काठमाडौँ महानगरपालिका, नगर कार्यपालिकाको कार्यालय, वाग्मती प्रदेश |
          काठमाडौँ महानगरपालिका, नगर कार्यपालिकाको कार्यालय, वाग्मती प्रदेश
        </h3>
      </div>
    </div>
  );
};

export default Footer;
