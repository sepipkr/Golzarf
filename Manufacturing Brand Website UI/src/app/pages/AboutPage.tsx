import { motion } from "motion/react";
import { Factory, Users, Award, TrendingUp, Shield, Truck, Package } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="mb-20 bg-gradient-to-br from-[#fafafa] to-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl mb-6" style={{ fontWeight: 700, color: '#0a0a0a' }}>
              درباره <span style={{ color: '#1B1464' }}>گل‌ظرف</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
              بیش از ۱۵ سال تجربه در تولید و عرضه ظروف یکبار مصرف با کیفیت بالا برای کسب‌وکارهای سراسر کشور
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '۱۵+', label: 'سال تجربه', icon: Award },
              { value: '۱۰۰+', label: 'مدل محصول', icon: Package },
              { value: '۱۵۰۰+', label: 'مشتری فعال', icon: Users },
              { value: '۹۸٪', label: 'رضایت مشتری', icon: TrendingUp }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#1B1464]" />
                <div className="text-5xl mb-2" style={{ fontWeight: 700, color: '#1B1464' }}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-6" style={{ fontWeight: 700 }}>
              قابلیت‌های <span style={{ color: '#1B1464' }}>تولید</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              با تجهیزات مدرن و تیم متخصص، بهترین محصولات را تولید می‌کنیم
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: 'تولید با ظرفیت بالا',
                desc: 'خطوط تولید مدرن با ظرفیت تولید بالا برای پاسخگویی به سفارشات عمده'
              },
              {
                icon: Shield,
                title: 'کنترل کیفیت دقیق',
                desc: 'استانداردهای بین‌المللی در تمامی مراحل تولید رعایت می‌شود'
              },
              {
                icon: Truck,
                title: 'ارسال سریع',
                desc: 'ارسال به سراسر کشور با بسته‌بندی مطمئن و امن'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#1B1464] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#1B1464] to-[#3B3195] flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>ماموریت ما</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                تولید ظروف یکبار مصرف با بالاترین کیفیت و قیمت مناسب برای کسب‌وکارهای ایرانی، 
                با تعهد به استانداردهای بین‌المللی و رضایت مشتریان.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl mb-6" style={{ fontWeight: 700 }}>چشم‌انداز ما</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                پیشرو در صنعت ظروف یکبار مصرف در ایران و منطقه، با تمرکز بر نوآوری، 
                کیفیت و توسعه پایدار.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}