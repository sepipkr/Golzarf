import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white relative">
      {/* Decorative line */}
      <div className="absolute top-0 right-[15%] w-px h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Trust & Credibility */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: '#1B1464' }}></div>
              <span className="text-sm tracking-wide text-gray-500 uppercase" style={{ letterSpacing: '0.1em' }}>
                Let's Work Together
              </span>
            </div>

            <h3 className="leading-tight mb-8" style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0a0a0a',
              letterSpacing: '-0.01em'
            }}>
              شریک <span style={{ color: '#1B1464' }}>قابل اعتماد</span>
              <br />
              کسب‌وکار شما
            </h3>

            <p className="text-lg text-gray-600 mb-12 max-w-xl leading-relaxed">
              گل‌ظرف با سابقه درخشان در تولید و تعهد به کیفیت، همراه مطمئن کسب‌وکارهای بزرگ و کوچک در سراسر کشور است.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="border-r-2 pr-6" style={{ borderColor: '#1B1464' }}>
                <div className="text-4xl mb-2" style={{ fontWeight: 700, color: '#1B1464' }}>۱۵۰۰+</div>
                <div className="text-gray-600">مشتری فعال</div>
              </div>
              <div className="border-r-2 pr-6" style={{ borderColor: '#1B1464' }}>
                <div className="text-4xl mb-2" style={{ fontWeight: 700, color: '#1B1464' }}>۹۸٪</div>
                <div className="text-gray-600">رضایت مشتری</div>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1B1464' }}></div>
                <span className="text-gray-700">تولید با استانداردهای بین‌المللی</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1B1464' }}></div>
                <span className="text-gray-700">تحویل سریع به سراسر کشور</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1B1464' }}></div>
                <span className="text-gray-700">پشتیبانی تخصصی ۲۴/۷</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5">
            <div className="bg-[#fafafa] rounded-2xl p-10 border border-gray-200">
              <h4 className="text-2xl mb-8" style={{ fontWeight: 600, color: '#0a0a0a' }}>
                تماس با ما
              </h4>

              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#1B1464] transition-colors">
                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-[#1B1464] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">تلفن تماس</div>
                    <div className="text-gray-900" dir="ltr" style={{ fontWeight: 500 }}>021-12345678</div>
                    <div className="text-gray-700" dir="ltr">0912-1234567</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#1B1464] transition-colors">
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-[#1B1464] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">ایمیل</div>
                    <div className="text-gray-900" dir="ltr" style={{ fontWeight: 500 }}>info@golzarf.com</div>
                    <div className="text-gray-700" dir="ltr">sales@golzarf.com</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center flex-shrink-0 group-hover:border-[#1B1464] transition-colors">
                    <MapPin className="w-5 h-5 text-gray-600 group-hover:text-[#1B1464] transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">آدرس</div>
                    <div className="text-gray-900" style={{ fontWeight: 500 }}>
                      تهران، شهرک صنعتی
                      <br />
                      خیابان صنعت، پلاک ۱۲۳
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all text-[15px] group/btn"
                style={{ 
                  backgroundColor: '#1B1464',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#140f4d';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1B1464';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                درخواست مشاوره رایگان
                <ArrowLeft className="w-5 h-5 group-hover/btn:translate-x-[-4px] transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
