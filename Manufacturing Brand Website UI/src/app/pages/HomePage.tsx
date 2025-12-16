import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { products } from "../../data/products";

export function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dimensional & Alive */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Gradient Background with Noise */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-white to-[#f5f5f7] opacity-60"></div>
        
        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Orbs - Parallax Effect */}
        <motion.div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #1B1464 0%, transparent 70%)' }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[15%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'radial-gradient(circle, #3B3195 0%, transparent 70%)' }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Content */}
            <motion.div 
              className="lg:col-span-6 text-right"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Label with Glow */}
              <motion.div 
                className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#1B1464] animate-pulse"></div>
                <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                  تولید کننده ظروف یکبار مصرف
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="mb-6 leading-[1.1]"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 800,
                  color: '#0a0a0a',
                  letterSpacing: '-0.02em'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block">کیفیت در</span>
                <span className="block" style={{ color: '#1B1464' }}>
                  هر جزئیات
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                تولید ظروف یکبار مصرف با استانداردهای جهانی، مناسب برای رستوران‌ها و توزیع عمده
              </motion.p>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/products"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl overflow-hidden transition-all"
                  style={{ backgroundColor: '#1B1464' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(27, 20, 100, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative text-white" style={{ fontWeight: 600 }}>مشاهده محصولات</span>
                  <ArrowLeft className="relative w-5 h-5 text-white group-hover:translate-x-[-4px] transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 backdrop-blur-sm transition-all"
                  style={{ borderColor: '#1B1464', backgroundColor: 'rgba(27, 20, 100, 0.03)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B1464';
                    e.currentTarget.querySelector('span')!.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(27, 20, 100, 0.03)';
                    e.currentTarget.querySelector('span')!.style.color = '#1B1464';
                  }}
                >
                  <span style={{ fontWeight: 600, color: '#1B1464', transition: 'color 0.3s' }}>
                    ثبت درخواست سفارش
                  </span>
                </Link>
              </motion.div>

              {/* Trust Line */}
              <motion.div 
                className="mt-10 pt-8 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-gray-500">
                  ✓ تولید کننده ظروف یکبار مصرف با کیفیت بالا  •  ✓ مناسب رستوران‌ها و پخش عمده
                </p>
              </motion.div>
            </motion.div>

            {/* 3D Product Showcase */}
            <motion.div 
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Glass-like Container */}
              <div className="relative p-12 rounded-[32px] bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/60 shadow-2xl">
                {/* Floating Product Images */}
                <div className="relative h-[500px]">
                  {featuredProducts.slice(0, 3).map((product, i) => (
                    <motion.div
                      key={product.id}
                      className="absolute"
                      style={{
                        left: `${i * 25}%`,
                        top: `${i * 15}%`,
                        zIndex: 3 - i
                      }}
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.nameFa}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#1B1464]/10 via-transparent to-[#1B1464]/5 pointer-events-none"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#1B1464] to-[#3B3195] opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-tr from-[#1B1464] to-[#3B3195] opacity-15 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Golzarf - Interactive Cards */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-px bg-[#1B1464]"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">چرا گل‌ظرف</span>
            </div>
            <h2 className="text-5xl mb-6" style={{ fontWeight: 700, color: '#0a0a0a' }}>
              مزایای همکاری با <span style={{ color: '#1B1464' }}>گل‌ظرف</span>
            </h2>
          </motion.div>

          {/* Advantage Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Package,
                title: 'تنوع محصول',
                desc: 'بیش از ۱۰۰ مدل ظرف در سایزها و کاربردهای مختلف',
                gradient: 'from-blue-50 to-indigo-50'
              },
              {
                icon: Award,
                title: 'کیفیت برتر',
                desc: 'استفاده از مواد اولیه درجه یک و رعایت استانداردها',
                gradient: 'from-violet-50 to-purple-50'
              },
              {
                icon: TrendingUp,
                title: 'قیمت رقابتی',
                desc: 'بهترین نرخ برای خرید عمده با تخفیف‌های ویژه',
                gradient: 'from-fuchsia-50 to-pink-50'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-[#1B1464] transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(27, 20, 100, 0.15)' }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1464] to-[#3B3195] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-r from-[#1B1464] to-[#3B3195] group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Premium Grid */}
      <section className="py-32 bg-gradient-to-b from-white to-[#fafafa] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#1B1464 1px, transparent 1px), linear-gradient(90deg, #1B1464 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          {/* Section Header */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-px bg-[#1B1464]"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">محصولات منتخب</span>
            </div>
            <h2 className="text-5xl mb-6" style={{ fontWeight: 700, color: '#0a0a0a' }}>
              محصولات <span style={{ color: '#1B1464' }}>پرفروش</span>
            </h2>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="group block relative h-full"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1B1464] transition-all duration-300 h-full shadow-sm hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.nameFa}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* PN Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm border border-white shadow-sm">
                        <span className="text-xs text-gray-700" style={{ fontWeight: 600 }}>
                          {product.pn}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                        {product.nameFa}
                      </h3>
                      <p className="text-gray-500 mb-4 text-sm">
                        {product.categoryFa} • {product.material}
                      </p>
                      {product.capacity && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100">
                          <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>
                            ظرفیت: {product.capacity} سی‌سی
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 transition-all"
              style={{ borderColor: '#1B1464', color: '#1B1464' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1B1464';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1B1464';
              }}
            >
              <span style={{ fontWeight: 600 }}>مشاهده تمام محصولات</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Trust */}
      <section className="py-32 bg-gradient-to-br from-[#1B1464] to-[#0f0a3d] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-6 text-white" style={{ fontWeight: 700 }}>
              آماده همکاری هستید؟
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              با گل‌ظرف، شریک قابل اعتماد خود در تأمین ظروف یکبار مصرف باشید
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-white text-[#1B1464] hover:bg-gray-100 transition-all"
              style={{ fontWeight: 600 }}
            >
              <span>درخواست مشاوره رایگان</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
