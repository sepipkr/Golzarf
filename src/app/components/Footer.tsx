import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl mb-6" style={{ fontWeight: 700, color: '#fff' }}>
              گل‌ظرف
            </h3>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              تولید کننده ظروف یکبار مصرف پلاستیکی با بالاترین استانداردهای کیفی
            </p>
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-px bg-gray-700"></div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Since 2008</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6" style={{ fontWeight: 600, fontSize: '15px', color: '#fff' }}>
              دسترسی سریع
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                  محصولات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="mb-6" style={{ fontWeight: 600, fontSize: '15px', color: '#fff' }}>
              محصولات
            </h4>
            <ul className="space-y-3 text-gray-400 text-[15px]">
              <li>ظروف غذا</li>
              <li>ظروف ��الاد</li>
              <li>ظروف فست فود</li>
              <li>لیوان و درب</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="mb-6" style={{ fontWeight: 600, fontSize: '15px', color: '#fff' }}>
              اطلاعات تماس
            </h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-[15px]" dir="ltr">
                021-12345678
              </div>
              <div className="text-gray-400 text-[15px]" dir="ltr">
                info@golzarf.com
              </div>
              <div className="text-gray-400 text-[15px]">
                تهران، شهرک صنعتی
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © ۱۴۰۴ گل‌ظرف. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              حریم خصوصی
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              شرایط استفاده
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}