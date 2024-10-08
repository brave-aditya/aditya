import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Quotes = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios
      .get("https://quotes-api-self.vercel.app/quote")
      .then((response) => {
        setQuote(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mx-auto pb-1 w-fit bg-gradient-to-br from-[#ff0039] via-[#fc00ff] to-[#ff0039] mb-4">
        <span className="block top-0 bg-[#121212] text-4xl font-bold text-white py-2 px-2">
          Quote of the Day
        </span>
      </div>
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-4 text-white">
        {quote ? (
          <div>
            <p className="text-center text-xl">
               <TypeAnimation
              sequence={[
                `'${quote.quote}'`,
                1000,
              ]}
              wrapper="span"
              cursor={false}
              speed={50}
              repeat={Infinity}
            /></p>
            <p className="text-center font-bold text-xl mt-2">
            <TypeAnimation
              sequence={[
                `- ${quote.author}`,
                1000,
              ]}
              wrapper="span"
              cursor={false}
              speed={50}
              repeat={Infinity}
            />
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Quotes;
