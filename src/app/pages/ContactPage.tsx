import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get("product");
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    productPN: prefillProduct || "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("فرم ارسال شد! (این یک نمونه است)");
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="mb-16 bg-gradient-to-br from-[#fafafa] to-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl mb-6" style={{ fontWeight: 700, color: '#0a0a0a' }}>
              تماس با <span style={{ color: '#1B1464' }}>ما</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              تیم ما آماده پاسخگویی به سوالات شما و ثبت سفارشات است
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
              اطلاعات تماس
            </h2>

            <div className="space-y-6 mb-12">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#1B1464] transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1464] to-[#3B3195] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>تلفن تماس</h3>
                  <p className="text-gray-600" dir="ltr">021-12345678</p>
                  <p className="text-gray-600" dir="ltr">0912-1234567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#1B1464] transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1464] to-[#3B3195] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>ایمیل</h3>
                  <p className="text-gray-600" dir="ltr">info@golzarf.com</p>
                  <p className="text-gray-600" dir="ltr">sales@golzarf.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#1B1464] transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1464] to-[#3B3195] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>آدرس</h3>
                  <p className="text-gray-600">تهران، شهرک صنعتی، خیابان صنعت، پلاک ۱۲۳</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1B1464] to-[#0f0a3d] text-white">
              <h3 className="text-xl mb-4" style={{ fontWeight: 700 }}>ساعات کاری</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>شنبه تا پنج‌شنبه</span>
                  <span style={{ fontWeight: 600 }}>۸:۰۰ - ۱۷:۰۰</span>
                </div>
                <div className="flex justify-between">
                  <span>جمعه</span>
                  <span style={{ fontWeight: 600 }}>تعطیل</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl">
              <h2 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
                درخواست مشاوره
              </h2>
              <p className="text-gray-600 mb-8">
                فرم زیر را تکمیل کنید، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>
                    نام و نام خانوادگی *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1B1464] focus:ring-2 focus:ring-[#1B1464]/20 outline-none transition-all"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>
                    شماره تماس *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1B1464] focus:ring-2 focus:ring-[#1B1464]/20 outline-none transition-all"
                    placeholder="شماره موبایل خود را وارد کنید"
                    dir="ltr"
                  />
                </div>

                {/* Product PN */}
                <div>
                  <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>
                    کد محصول (اختیاری)
                  </label>
                  <input
                    type="text"
                    value={formData.productPN}
                    onChange={(e) => setFormData({...formData, productPN: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1B1464] focus:ring-2 focus:ring-[#1B1464]/20 outline-none transition-all"
                    placeholder="مثال: PN-7500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm mb-2" style={{ fontWeight: 600 }}>
                    پیام شما
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1B1464] focus:ring-2 focus:ring-[#1B1464]/20 outline-none transition-all resize-none"
                    placeholder="توضیحات یا سوالات خود را بنویسید..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1B1464] to-[#3B3195] text-white hover:shadow-2xl hover:shadow-[#1B1464]/30 transition-all"
                  style={{ fontWeight: 600 }}
                >
                  <span>ارسال درخواست</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
