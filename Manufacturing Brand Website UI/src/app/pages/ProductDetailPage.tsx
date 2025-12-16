import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Phone, MessageSquare, Copy, Check } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { products } from "../../data/products";

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl mb-4" style={{ fontWeight: 700 }}>محصول یافت نشد</h2>
          <Link to="/products" className="text-[#1B1464] hover:underline">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("021-12345678");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedProducts = products.filter(p => 
    p.codeFamily === product.codeFamily && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8 flex items-center gap-2 text-sm text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/" className="hover:text-[#1B1464]">خانه</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#1B1464]">محصولات</Link>
          <span>/</span>
          <span className="text-gray-900">{product.nameFa}</span>
        </motion.div>

        {/* Product Info */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-32 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 shadow-2xl">
              <div className="aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={product.nameFa}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* PN Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B1464]/5 mb-6">
              <span className="text-sm text-[#1B1464]" style={{ fontWeight: 600 }}>
                کد محصول: {product.pn}
              </span>
            </div>

            <h1 className="text-4xl mb-6" style={{ fontWeight: 700, color: '#0a0a0a' }}>
              {product.nameFa}
            </h1>

            {/* Specs Table */}
            <div className="mb-8 p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>مشخصات فنی</h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">کد خانواده</span>
                  <span style={{ fontWeight: 600 }}>{product.code}</span>
                </div>
                {product.diameter && (
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">قطر</span>
                    <span style={{ fontWeight: 600 }}>{product.diameter} میلی‌متر</span>
                  </div>
                )}
                {product.capacity && (
                  <div className="flex justify-between pb-3 border-b border-gray-200">
                    <span className="text-gray-600">ظرفیت</span>
                    <span style={{ fontWeight: 600 }}>{product.capacity} سی‌سی</span>
                  </div>
                )}
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">ماده</span>
                  <span style={{ fontWeight: 600 }}>{product.material}</span>
                </div>
                {product.colors && product.colors.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">رنگ‌های موجود</span>
                    <span style={{ fontWeight: 600 }}>{product.colors.join('، ')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1B1464] to-[#0f0a3d] text-white">
              <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>
                برای سفارش تماس بگیرید
              </h3>
              <p className="text-white/80 mb-6">
                تیم ما آماده پاسخگویی به سوالات و ثبت سفارش شما است
              </p>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-3 gap-3">
                <a
                  href="tel:02112345678"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm" style={{ fontWeight: 600 }}>تماس</span>
                </a>

                <a
                  href="https://wa.me/989121234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm" style={{ fontWeight: 600 }}>واتساپ</span>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  <span className="text-sm" style={{ fontWeight: 600 }}>
                    {copied ? "کپی شد!" : "کپی شماره"}
                  </span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/60 mb-2">شماره تماس:</p>
                <p className="text-lg" style={{ fontWeight: 600 }} dir="ltr">021-12345678</p>
              </div>
            </div>

            {/* Request Quote Form Link */}
            <div className="mt-6">
              <Link
                to={`/contact?product=${product.pn}`}
                className="block text-center py-4 px-6 rounded-xl border-2 border-[#1B1464] text-[#1B1464] hover:bg-[#1B1464] hover:text-white transition-all"
                style={{ fontWeight: 600 }}
              >
                درخواست پیش‌فاکتور
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
              محصولات مرتبط
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1B1464] transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.nameFa}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>{p.nameFa}</h3>
                    <p className="text-sm text-gray-600">{p.pn}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
