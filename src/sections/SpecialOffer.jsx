import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping expedition that transforms your journey with
          unmatched offers. From top-tier choices to remarkable savings, we
          provide incomparable worth that distinguishes us.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Embark on an odyssey of opportunities tailored to satisfy your
          distinct aspirations, exceeding even the highest anticipations. Your
          voyage with us is truly extraordinary.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
