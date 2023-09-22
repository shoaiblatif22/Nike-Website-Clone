import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about us"
      className="flex justify-between items-center
      max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike
          </span> Shoes
        </h2>
        <p className="font-montserrate text-slate-gray text-lg-8 mt-6 mb-14 sm:max-w-sm">
          Discover 
          our stylish Nike arrivals, 
          quality comfort and a necessity
          for your active life.
        </p>
        <Button label="View details" />
      </div>

    </section>
  )
}

export default SuperQuality