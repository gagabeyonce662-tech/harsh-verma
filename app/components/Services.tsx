export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Engine Repair</h3>
            <p>
              Comprehensive engine diagnostics and repairs to keep your truck
              running smoothly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Transmission Service</h3>
            <p>
              Expert transmission repairs and maintenance for optimal
              performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Brake Service</h3>
            <p>
              Professional brake inspection and repair to ensure your safety on
              the road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
