export function WhyGolzarf() {
  return (
    <section id="about" className="py-32 bg-white relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-[20%] w-px h-32 bg-gradient-to-b from-gray-300 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: '#1B1464' }}></div>
              <span className="text-sm tracking-wide text-gray-500 uppercase" style={{ letterSpacing: '0.1em' }}>
                Why Choose Us
              </span>
            </div>
            <h3 className="leading-tight" style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0a0a0a',
              letterSpacing: '-0.01em'
            }}>
              چرا <span style={{ color: '#1B1464' }}>گل‌ظرف</span>؟
            </h3>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              ما با ترکیب تجربه، تکنولوژی و تعهد به کیفیت، شریک قابل اعتماد کسب‌وکار شما هستیم
            </p>
          </div>
        </div>

        {/* Features - Distinctive Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature 1 - Variety */}
          <div className="group relative">
            <div className="bg-[#fafafa] p-10 rounded-2xl border border-gray-200 hover:border-[#1B1464] transition-all duration-300 h-full">
              {/* Number */}
              <div 
                className="text-7xl mb-6 opacity-10 select-none"
                style={{ fontWeight: 700, color: '#1B1464', lineHeight: 1 }}
              >
                01
              </div>

              {/* Content */}
              <div className="relative">
                <h4 className="text-2xl mb-4" style={{ fontWeight: 600, color: '#0a0a0a' }}>
                  تنوع محصول
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  بیش از ۱۰۰ مدل ظرف یکبار مصرف در سایزها، فرم‌ها و کاربردهای مختلف
                </p>
                <div className="w-12 h-px bg-[#1B1464] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Quality */}
          <div className="group relative lg:mt-12">
            <div className="bg-[#fafafa] p-10 rounded-2xl border border-gray-200 hover:border-[#1B1464] transition-all duration-300 h-full">
              {/* Number */}
              <div 
                className="text-7xl mb-6 opacity-10 select-none"
                style={{ fontWeight: 700, color: '#1B1464', lineHeight: 1 }}
              >
                02
              </div>

              {/* Content */}
              <div className="relative">
                <h4 className="text-2xl mb-4" style={{ fontWeight: 600, color: '#0a0a0a' }}>
                  کیفیت برتر
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  استفاده از مواد اولیه درجه یک و رعایت استانداردهای بین‌المللی در تولید
                </p>
                <div className="w-12 h-px bg-[#1B1464] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Pricing */}
          <div className="group relative">
            <div className="bg-[#fafafa] p-10 rounded-2xl border border-gray-200 hover:border-[#1B1464] transition-all duration-300 h-full">
              {/* Number */}
              <div 
                className="text-7xl mb-6 opacity-10 select-none"
                style={{ fontWeight: 700, color: '#1B1464', lineHeight: 1 }}
              >
                03
              </div>

              {/* Content */}
              <div className="relative">
                <h4 className="text-2xl mb-4" style={{ fontWeight: 600, color: '#0a0a0a' }}>
                  قیمت رقابتی
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  بهترین نرخ برای خرید عمده با شرایط پرداخت منعطف و تخفیف‌های ویژه
                </p>
                <div className="w-12 h-px bg-[#1B1464] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
