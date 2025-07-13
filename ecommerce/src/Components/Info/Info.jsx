import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const infoItems = [
  {
    icon: <Percent className="w-10 h-10" />,
    title: "İndirim",
    description: "%50 ye varan indirim",
  },
  {
    icon: <Truck className="w-10 h-10 " />,
    title: "Kargo Bedava",
    description: "Tüm ürünlerde geçerli",
  },
  {
    icon: <Clock3 className="w-10 h-10" />,
    title: "Müşteri Temsilcisi",
    description: "7/24 Hizmet",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 " />,
    title: "Güvenli Ödeme",
    description: "%100 Güvenli ödeme",
  },
];

const Info = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {infoItems.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow cursor-default"
            >
              <div>{icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
