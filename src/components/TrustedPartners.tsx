
import placeholder from "@/assets/placeholder.svg";

const TrustedPartners = () => {
  const partners = [
    { name: "Ghana Commercial Bank", logo: placeholder },
    { name: "International Logistics Corp", logo: placeholder },
    { name: "Gold Coast Manufacturing", logo: placeholder },
    { name: "Accra Digital Ventures", logo: placeholder },
    { name: "Tema Port Holdings", logo: placeholder },
  ];

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the most innovative businesses in Ghana
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partners.map((partner) => (
            <img
              key={partner.name}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={partner.logo}
              alt={partner.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
