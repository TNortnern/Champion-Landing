import React from 'react';

const HeroText = () => {
    return (
      <div className="w-11/12 text-left sm:text-center lg:text-left lg:w-11/25 xl:w-1/2 pt-4 xl:pt-20">
        <h2 className="text-2xl lg:text-3xl xl:text-5xl uppercase mb-4">
          Fantasy Sports. For Every Season.
        </h2>
        <p className="mb-6 text-xl xl:max-w-lg">
          Competing with friends doesn’t stop at the final whistle - neither
          should your fantasy league. <span className="block sm:inline mt-6 sm:mt-0">Champions Round is building the arena,
          where your favorite sports and athletes are always in-play.</span>
        </p>
        <p className="text-xl mb-5">
          Join our mailing list for the latest news & updates.
        </p>
        <div className="flex flex-wrap space-y-2 sm:space-y-0 justify-center lg:justify-start sm:space-x-4">
          <input
            type="text"
            placeholder="Email"
            className="border-2 border-gray-300 rounded-md w-full sm:w-64 pl-3 py-2"
          />
          <button className="bg-pink-500 text-white rounded-md py-2 px-6 w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    );
}

export default HeroText;