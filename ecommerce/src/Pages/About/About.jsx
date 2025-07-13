

const AboutPage = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="w-full py-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Hakkımızda</h1>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Biz, müşteri memnuniyetini en ön planda tutan ve kaliteli ürünler sunan bir
          mağaza olarak 2010 yılından beri sektördeyiz. Amacımız, sizlere en iyi alışveriş deneyimini
          yaşatmak ve beklentilerinizi karşılamaktır.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Ekibimiz, alanında uzman ve dinamik kişilerden oluşmaktadır. Sürekli gelişen teknoloji ve
          trendleri yakından takip ederek ürün yelpazemizi genişletmekteyiz.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Siz değerli müşterilerimize hizmet vermekten gurur duyuyoruz. Bizi tercih ettiğiniz için teşekkür ederiz.
        </p>

        <div className="mt-8">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Hakkımızda"
            className="rounded-lg shadow-md w-full object-cover max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
