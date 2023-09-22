import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-lg">
          <span className="text-coral-red ">Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience width
          unbeatable deals. From premier selections to incredible savings,
          you could potentially save upto 30% off our shoes.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilites designed to fulfill your unique
          desires, surpassing the loftiest expectations.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer