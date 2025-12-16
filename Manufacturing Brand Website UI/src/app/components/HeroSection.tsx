export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#fafafa]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03]">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full" style={{ backgroundColor: '#1B1464' }}></div>
        <div className="absolute bottom-20 left-[15%] w-[300px] h-[300px] rounded-full" style={{ backgroundColor: '#1B1464' }}></div>
      </div>

      {/* Subtle Lines */}
      <div className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-[30%] w-px h-48 bg-gradient-to-b from-gray-300 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content - Asymmetric Layout */}
          <div className="lg:col-span-7 text-right">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-12 h-px" style={{ backgroundColor: '#1B1464' }}></div>
              <span className="text-sm tracking-wide text-gray-600 uppercase" style={{ letterSpacing: '0.1em' }}>
                Manufacturing Excellence
              </span>
            </div>

            {/* Main Heading - Editorial Style */}
            <h2 className="mb-8 leading-[1.15]" style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#0a0a0a',
              letterSpacing: '-0.02em'
            }}>
              کیفیت و دقت در
              <br />
              <span style={{ color: '#1B1464' }}>هر محصول</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-xl leading-relaxed" style={{ fontWeight: 400 }}>
              تولید ظروف یکبار مصرف با استانداردهای جهانی برای کسب‌وکارهای حرفه‌ای
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#products"
                className="inline-flex items-center px-8 py-4 rounded-lg transition-all text-[15px] shadow-sm"
                style={{ 
                  backgroundColor: '#1B1464',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#140f4d';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(27, 20, 100, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1B1464';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }}
              >
                مشاهده محصولات
              </a>
            </div>
          </div>

          {/* Visual Element - Abstract Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Large Number Background */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none"
                style={{ fontSize: '20rem', fontWeight: 700, color: '#1B1464', lineHeight: 1 }}
              >
                01
              </div>

              {/* Stats Cards */}
              <div className="relative space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="text-5xl mb-2" style={{ fontWeight: 700, color: '#1B1464' }}>۱۰۰+</div>
                  <div className="text-gray-600">مدل محصول</div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mr-12">
                  <div className="text-5xl mb-2" style={{ fontWeight: 700, color: '#1B1464' }}>۱۵+</div>
                  <div className="text-gray-600">سال تجربه</div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="text-5xl mb-2" style={{ fontWeight: 700, color: '#1B1464' }}>۲۴/۷</div>
                  <div className="text-gray-600">پشتیبانی</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
