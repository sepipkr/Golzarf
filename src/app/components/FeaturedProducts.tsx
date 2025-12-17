import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./media/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "ظرف غذای مستطیلی",
    capacity: "۵۰۰ سی‌سی",
    description: "مقاوم، شفاف، با درب محکم",
    image: "https://images.unsplash.com/photo-1548690596-e4d33027b04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2hpdGUlMjBjb250YWluZXJ8ZW58MXx8fHwxNzY1OTI2MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "ظرف سالاد گرد",
    capacity: "۷۵۰ سی‌سی",
    description: "شفاف، درب قفل‌دار",
    image: "https://images.unsplash.com/photo-1589322448752-5c05f2e9ca21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhY2thZ2luZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5MjYwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "ظرف همبرگری",
    capacity: "استاندارد",
    description: "مقاوم، ضد روغن",
    image: "https://images.unsplash.com/photo-1648820945406-5f4bbedcfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHByb2R1Y3QlMjBtaW5pbWFsfGVufDF8fHx8MTc2NTkyNjA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FeaturedProducts() {
  return (
    <section id="products" className="py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'linear-gradient(#1B1464 1px, transparent 1px), linear-gradient(90deg, #1B1464 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }}></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: '#1B1464' }}></div>
            <span className="text-sm tracking-wide text-gray-500 uppercase" style={{ letterSpacing: '0.1em' }}>
              Products
            </span>
          </div>
          <h3 className="leading-tight mb-6" style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#0a0a0a',
            letterSpacing: '-0.01em'
          }}>
            محصولات <span style={{ color: '#1B1464' }}>گل‌ظرف</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            مجموعه‌ای جامع از ظروف یکبار مصرف برای کسب‌وکارهای غذایی
          </p>
        </div>

        {/* Products Grid - Asymmetric */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group ${index === 1 ? 'lg:mt-12' : ''}`}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1B1464] transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#1B1464] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl" style={{ fontWeight: 600, color: '#0a0a0a' }}>
                      {product.name}
                    </h4>
                    <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700" style={{ fontWeight: 500 }}>
                      {product.capacity}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className="flex items-center gap-2 text-[#1B1464] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm" style={{ fontWeight: 500 }}>جزئیات بیشتر</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Separated */}
        <div className="relative mt-24 pt-16 border-t border-gray-300">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h4 className="text-3xl mb-3" style={{ fontWeight: 600, color: '#0a0a0a' }}>
                کاتالوگ کامل محصولات
              </h4>
              <p className="text-gray-600 text-lg">
                بیش از ۱۰۰ مدل با مشخصات فنی کامل
              </p>
            </div>
            <a
              href="#products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all text-[15px] border-2 group/btn"
              style={{ 
                borderColor: '#1B1464',
                color: '#1B1464'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1B1464';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1B1464';
              }}
            >
              مشاهده کاتالوگ
              <ArrowLeft className="w-5 h-5 group-hover/btn:translate-x-[-4px] transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
