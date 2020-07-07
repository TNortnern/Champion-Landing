import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const HeroText = () => {
  const url =
    "https://championsround.us20.list-manage.com/subscribe/post?u=44b2ca89ff52f128d609cb138&amp;id=f58c83fc50";
  let email;
  const cardClasses =
    "bg-white shadow-lg relative sm:absolute mt-3 mb-3 sm:mt-2 sm:mb-0 w-full rounded-sm py-2 px-3 z-50 text-xs sm:text-sm text-center sm:text-left";
  return (
    <div className="w-11/12 text-left lg:w-11/25 xl:w-1/2 pt-8 xl:pt-8 flex flex-col px-4 sm:px-0 sm:block">
      <div className="text-mobile-h2 sm:text-5xl lg:text-4xl xl:text-5xl uppercase mb-4 font-black font-circular-black text-left whitespace-no-wrap block sm:inline-flex sm:flex-col sm:items-center w-full lg:block">
        <h2 className="h-8 sm:h-12 lg:h-8 xl:h-12">
          Fantasy Sports.
        </h2>
        <h2>
          For Every Season.
        </h2>
      </div>
      <p className="mb-6 text-xl xl:max-w-lg font-light lg:px-0">
        Competing with friends doesn’t stop at the final whistle - neither
        should your fantasy league.{" "}
        <span className="block sm:inline mt-6 sm:mt-0">
          Champions Round is building the arena, where your favorite sports and
          athletes are always in-play.
        </span>
      </p>
      <p className="text-xl mb-5 font-light lg:px-0">
        Join our mailing list for the latest news & updates.
      </p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              subscribe({
                EMAIL: email.value,
              });
            }}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate
            className="flex flex-wrap lg:flex-no-wrap space-y-2 lg:space-y-0 justify-start lg:space-x-4 validate px-0"
          >
            <div className="w-full lg:w-64 relative">
              <input
                placeholder="Your Email"
                className="border-2 border-gray-300 rounded-md w-full lg:w-64 pl-3 py-2"
                type="email"
                name="EMAIL"
                ref={(node) => (email = node)}
                id="mce-EMAIL"
                required
              />

              {status === "sending" && (
                <div className={`${cardClasses} text-blue-700`}>
                  Subscribing...
                </div>
              )}
              {status === "error" && (
                <div
                  dangerouslySetInnerHTML={{ __html: message }}
                  target="_blank"
                  className={`${cardClasses} text-red-600 mailchimp`}
                ></div>
              )}
              {status === "success" && (
                <div className={`${cardClasses} text-green-700`}>
                  Your are now subscribed to Champions Round!
                </div>
              )}
            </div>
            <div className="w-full lg:w-auto">
              <button
                type="submit"
                className={`bg-main-pink-500 text-white hover:bg-main-pink-400 rounded-md py-2 px-6 w-full lg:w-auto ${
                  status === "sending"
                    ? "opacity-50 pointer-events-none focus:outline-none"
                    : ""
                }`}
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default HeroText;
