import React from "react";
import { useNavigate } from "react-router-dom";

const Moredetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-45 py-7">
      <h1 className="text-3xl font-bold mb-4">Nepal: Gorkha Earthquake 2015</h1>
      <img
        src="https://www.preventionweb.net/sites/default/files/styles/ultrawide_16_6/public/Nepal-earthquake-2015-min.jpg?h=450ea96f&itok=fDvjCWdv"
        alt=""
      />
      <p className=" py-5">
        The Gorkha Earthquake in Nepal occurred on 25 April 2015 and had a
        magnitude of 7.6. Its epicentre was about 76km northwest of the capital
        Kathmandu. It was followed by more than 300 aftershocks. Around 9,000
        people were killed, of whom approximately 55 per cent were female, and
        over 100,000 people were injured. Overall eight million people have been
        impacted, which is almost one-third of the population of Nepal. The
        housing sector was by far the most affected, also given that numerous
        houses in poorer rural areas did not have any seismic-resistant
        features. Over 500,000 houses were destroyed and another 269,000
        damaged, which included historical and cultural monuments recognized as
        UNESCO World Heritage Sites. In addition to destroyed or damaged key
        infrastructure livelihoods, e.g. in the agriculture and tourism sector,
        have been also critically impacted. According to the Post Disaster Needs
        Assessment by the UN, World Bank and the EU the total value of the
        damages and losses of the disaster was estimated at US$7.1 billion,
        while the estimated needs for recovery were US$ 6.7 billion. The damages
        and losses of the housing sub-sector and the resulting recovery needs
        accounted for almost half of the total amount respectively. According to
        the latest Independent Impacts and Recovery Monitoring by the Asia
        Foundation around five years after the earthquake the large majority of
        the affected people live again in their own houses. Out of all
        households with damaged houses three-quarters now live in either a
        rebuilt or repaired house or another house not damaged by the
        earthquake. However, others continue to occupy damaged houses or those
        without seismic-resistant features. For many households the recovery
        from the earthquake remains a financial burden, demonstrated by
        prevalent borrowing. Four per cent who are still living in temporary
        shelters are in particular need of support.
      </p>

      <button
        onClick={handleGoBack}
        className="bg-[#ec068e] px-6 py-2 text-white font-semibold hover:bg-pink-600 transition mt-4 cursor-pointer"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default Moredetails;
