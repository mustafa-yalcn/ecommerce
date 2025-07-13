

const StorePage = () => {
  return (
    <div className="lg:container mx-auto py-4">
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80"
          alt="Mağaza Görseli"
          className="rounded-lg shadow-md w-full h-64 object-cover"
        />
      </div>

      <div className="flex justify-center">
      <div className="w-full max-w-3xl p-8 ">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Mağazamız</h1>
        <p className="mb-6 text-gray-600 text-lg">
          Size en kaliteli ürünleri en uygun fiyatlarla sunmaktan gurur duyuyoruz.
          Mağazamıza bekleriz!
        </p>

        <div className=" space-y-4 text-gray-700 text-left">
          <div>
            <h3 className="font-semibold text-lg">Adres</h3>
            <p>İstiklal Caddesi No:123, Beyoğlu, İstanbul</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Telefon</h3>
            <p>+90 212 555 1234</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">E-posta</h3>
            <p>iletisim@bizimmagaza.com</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StorePage;
