import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const HeroText = () => {
  const url =
    "https://championsround.us20.list-manage.com/subscribe/post?u=44b2ca89ff52f128d609cb138&amp;id=f58c83fc50";
const SimpleForm = () => <MailchimpSubscribe url={url} />;

    return (
      <div className="w-11/12 text-left sm:text-center lg:text-left lg:w-11/25 xl:w-1/2 pt-4 xl:pt-20">
        <h2 className="text-2xl lg:text-3xl xl:text-5xl uppercase mb-4">
          Fantasy Sports. For Every Season.
        </h2>
        <p className="mb-6 text-xl xl:max-w-lg font-light">
          Competing with friends doesn’t stop at the final whistle - neither
          should your fantasy league.{" "}
          <span className="block sm:inline mt-6 sm:mt-0">
            Champions Round is building the arena, where your favorite sports
            and athletes are always in-play.
          </span>
        </p>
        <p className="text-xl mb-5 font-light">
          Join our mailing list for the latest news & updates.
        </p>
        <SimpleForm />
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <form
              onSubmit={(formData) => subscribe(formData)}
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              novalidate
              className="flex flex-wrap lg:flex-no-wrap space-y-2 sm:space-y-0 justify-center lg:justify-start sm:space-x-4 validate"
            >
              {status === "sending" && (
                <div style={{ color: "blue" }}>sending...</div>
              )}
              {status === "error" && (
                <div
                  style={{ color: "red" }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <div style={{ color: "green" }}>Subscribed !</div>
              )}
              <input
                placeholder="Your Email"
                className="border-2 border-gray-300 rounded-md w-full sm:w-64 pl-3 py-2"
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
              />
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md py-2 px-6 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          )}
        />
      </div>
    );
}

export default HeroText;