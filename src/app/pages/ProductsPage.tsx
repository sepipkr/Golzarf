import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Grid3x3, List, Filter } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { products, categories, Product } from "../../data/products";

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.nameFa.includes(searchTerm) || product.pn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.codeFamily === selectedCategory;
    const matchesMaterial = selectedMaterial === "all" || product.material === selectedMaterial;
    return matchesSearch && matchesCategory && matchesMaterial;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#fafafa] to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl mb-4" style={{ fontWeight: 700, color: '#0a0a0a' }}>
            کاتالوگ <span style={{ color: '#1B1464' }}>محصولات</span>
          </h1>
          <p className="text-xl text-gray-600">
            بیش از ۱۰۰ مدل ظرف یکبار مصرف با کیفیت بالا
          </p>
        </motion.div>

        {/* Filters & Search Bar */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="جستجو بر اساس نام یا کد محصول..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-6 py-4 rounded-xl border border-gray-300 focus:border-[#1B1464] focus:ring-2 focus:ring-[#1B1464]/20 outline-none transition-all bg-white"
            />
          </div>

          {/* Category & Material Filters */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.value)}
                  className="px-4 py-2 rounded-lg border transition-all"
                  style={{
                    borderColor: selectedCategory === cat.value ? '#1B1464' : '#e5e7eb',
                    backgroundColor: selectedCategory === cat.value ? '#1B1464' : 'white',
                    color: selectedCategory === cat.value ? 'white' : '#374151'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Material Filter */}
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none"
              >
                <option value="all">همه مواد</option>
                <option value="PP">PP</option>
                <option value="PS">PS</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center gap-2 p-1 rounded-lg border border-gray-300 bg-white">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-all ${viewMode === "grid" ? "bg-[#1B1464] text-white" : "text-gray-600"}`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-all ${viewMode === "list" ? "bg-[#1B1464] text-white" : "text-gray-600"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          <span style={{ fontWeight: 600 }}>{filteredProducts.length}</span> محصول یافت شد
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products/${product.id}`}
                className="group block relative"
              >
                {viewMode === "grid" ? (
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1B1464] transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.nameFa}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
                        <span className="text-xs" style={{ fontWeight: 600 }}>{product.pn}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>{product.nameFa}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm px-2 py-1 rounded bg-gray-100">{product.codeFamily}</span>
                        <span className="text-sm px-2 py-1 rounded bg-gray-100">{product.material}</span>
                      </div>
                      {product.capacity && (
                        <p className="text-gray-600 text-sm">ظرفیت: {product.capacity} سی‌سی</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1B1464] transition-all flex items-center gap-6">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.nameFa}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>{product.nameFa}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm px-2 py-1 rounded bg-gray-100">{product.pn}</span>
                        <span className="text-sm px-2 py-1 rounded bg-gray-100">{product.codeFamily}</span>
                        <span className="text-sm px-2 py-1 rounded bg-gray-100">{product.material}</span>
                      </div>
                      {product.capacity && (
                        <p className="text-gray-600 text-sm">ظرفیت: {product.capacity} سی‌سی</p>
                      )}
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">محصولی یافت نشد</p>
          </div>
        )}
      </div>
    </div>
  );
}
