import { Card, Button, Row, Col } from "antd";
// import Image from "next/image";
// import { ShoppingCart, Heart, ArrowRight, Star } from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "Organic Mixed Nuts Premium Pack",
    price: 12.99,
    oldPrice: 15.99,
    rating: 4,
    reviews: 42,
    image: "/placeholder.svg?height=120&width=120",
    sale: true,
    description: "Premium quality mixed nuts selection.",
  },
  {
    id: 2,
    name: "Green Tea Powder Organic",
    price: 8.99,
    oldPrice: 10.99,
    rating: 5,
    reviews: 28,
    image: "/placeholder.svg?height=120&width=120",
    sale: true,
    description: "100% organic matcha green tea powder.",
  },
  {
    id: 3,
    name: "Pure Honey Bottle",
    price: 6.99,
    oldPrice: null,
    rating: 4,
    reviews: 36,
    image: "/placeholder.svg?height=120&width=120",
    sale: true,
    description: "Natural honey from organic farms.",
  },
  {
    id: 4,
    name: "Chocolate Donut Premium",
    price: 3.99,
    oldPrice: 4.99,
    rating: 4,
    reviews: 15,
    image: "/placeholder.svg?height=120&width=120",
    sale: true,
    description: "Delicious premium chocolate donuts.",
  },
  {
    id: 5,
    name: "Organic Green Vegetables Mix",
    price: 7.99,
    oldPrice: null,
    rating: 5,
    reviews: 24,
    image: "/placeholder.svg?height=120&width=120",
    sale: true,
    description: "Fresh mix of organic green vegetables.",
  },
];

const categories = [
  { name: "Trái cây & Rau củ", icon: "🍎" },
  { name: "Thịt & Hải sản", icon: "🥩" },
  { name: "Đồ ăn vặt", icon: "🍿" },
  { name: "Thú cưng", icon: "🐾" },
  { name: "Đồ gia dụng", icon: "🧹" },
  { name: "Sữa", icon: "🥛" },
];

const Home = () => {
  return (
    <main className="container mx-auto p-4 pt-8 mb-10 max-w-[1200px]">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-[#f8f9fa] rounded-lg overflow-hidden mb-8 shadow-lg">
        <div className="absolute inset-0 z-10 flex flex-col justify-center p-8 md:p-12">
          <span className="text-sm text-green-600 font-medium mb-2">
            Khám phá sản phẩm tươi ngon
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Chào mừng đến với
            <br />
            Shop của chúng tôi!
          </h1>
          <p className="mt-2 text-lg mb-4">
            Nơi cung cấp những sản phẩm tốt nhất cho bạn
          </p>
          <Button type="primary" className="bg-green-600 hover:bg-green-700">
            Mua ngay
          </Button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2">
          {/* <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Fresh fruit tarts with berries"
            width={600}
            height={400}
            className="object-cover h-full"
          /> */}
        </div>
      </section>

      {/* Category Icons */}
      <Row gutter={[16, 16]} className="mb-8">
        {categories.map((category, index) => (
          <Col key={index} xs={8} md={4}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 rounded-full flex items-center justify-center mb-2">
                <div className="w-6 h-6 md:w-8 md:h-8 text-green-600">
                  {category.icon}
                </div>
              </div>
              <span className="text-xs md:text-sm text-center">
                {category.name}
              </span>
            </div>
          </Col>
        ))}
      </Row>

      {/* Top Of The Chart Section */}
      <section className="mt-8 bg-blue-50 p-4 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sản phẩm nổi bật
          </h2>
          <div className="flex items-center text-sm text-gray-500">
            <span>Xem tất cả</span>
            {/* <ArrowRight className="w-4 h-4 ml-1" /> */}
          </div>
        </div>

        <Row gutter={[16, 16]}>
          {topProducts.map((product) => (
            <Col key={product.id} xs={12} sm={12} md={8} lg={6} xl={4.8}>
              <Card
                hoverable
                cover={
                  <div className="relative pt-4 px-4">
                    {product.sale && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                        SALE
                      </span>
                    )}
                    {/* <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="object-contain h-[120px] mx-auto"
                    /> */}
                  </div>
                }
                className="shadow-md h-full"
                bodyStyle={{ padding: "12px" }}
              >
                {/* <div className="flex items-center mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < product.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div> */}

                <Card.Meta
                  title={
                    <span className="text-sm font-medium line-clamp-2">
                      {product.name}
                    </span>
                  }
                  description={
                    <span className="text-xs text-gray-500">
                      {product.description}
                    </span>
                  }
                />

                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <span className="font-bold text-sm">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 text-xs line-through ml-1">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="default"
                      shape="circle"
                      size="small"
                      //   icon={<Heart className="w-3 h-3" />}
                    />
                    <Button
                      type="primary"
                      shape="circle"
                      size="small"
                      className="bg-green-600 hover:bg-green-700"
                      //   icon={<ShoppingCart className="w-3 h-3" />}
                    />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Promotional Banners */}
      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={24} md={12}>
          <div className="relative h-[150px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="absolute inset-0 z-10 flex flex-col justify-center p-6">
              <h3 className="text-lg font-bold">Trái cây nhiệt đới</h3>
              <p className="text-sm mb-2">Tươi ngon mỗi ngày</p>
              <Button
                type="primary"
                size="small"
                className="bg-green-600 hover:bg-green-700 w-fit"
              >
                Mua ngay
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              {/* <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Tropical fruits"
                width={200}
                height={150}
                className="object-cover h-full"
              /> */}
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="relative h-[150px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="absolute inset-0 z-10 flex flex-col justify-center p-6">
              <h3 className="text-lg font-bold">Rau củ hữu cơ</h3>
              <p className="text-sm mb-2">Sạch & An toàn</p>
              <Button
                type="primary"
                size="small"
                className="bg-green-600 hover:bg-green-700 w-fit"
              >
                Mua ngay
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              {/* <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Organic vegetables"
                width={200}
                height={150}
                className="object-cover h-full"
              /> */}
            </div>
          </div>
        </Col>
      </Row>

      {/* Footer */}
      <Row gutter={[16, 16]} className="py-8 border-t">
        <Col xs={12} md={6}>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
              🚚
            </div>
            <h4 className="text-sm font-medium">Miễn phí vận chuyển</h4>
            <p className="text-xs text-gray-500">Cho đơn hàng trên 500k</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
              🛎️
            </div>
            <h4 className="text-sm font-medium">Hỗ trợ 24/7</h4>
            <p className="text-xs text-gray-500">Tư vấn nhiệt tình</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
              ↩️
            </div>
            <h4 className="text-sm font-medium">Đổi trả 30 ngày</h4>
            <p className="text-xs text-gray-500">Bảo đảm hoàn tiền</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
              🔒
            </div>
            <h4 className="text-sm font-medium">Thanh toán an toàn</h4>
            <p className="text-xs text-gray-500">Bảo mật 100%</p>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
