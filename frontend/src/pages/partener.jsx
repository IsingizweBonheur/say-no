import centerLogo from "../assets/centor.jpg";
import police from "../assets/police.jpg";
import adepr from "../assets/adepr.jpg";
export default function Partner() {
  const partners = [
    {
      name: "QCentor",
      logo: centerLogo,
    },
    {
      name: "Rwanda National Police",
      logo: police,
    },
    {
      name: "ADEPR",
      logo: adepr,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black">
          Our Partners
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          We are proud to collaborate with organizations that share our vision
          of empowering communities through innovation, security, and
          sustainable development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 object-contain mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}