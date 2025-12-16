export interface Product {
  id: string;
  pn: string;
  code: string;
  codeFamily: '75' | '95' | '125' | '155' | 'Special' | 'Rectangular';
  name: string;
  nameFa: string;
  category: string;
  categoryFa: string;
  diameter?: number; // mm
  capacity?: number; // cc
  material: 'PP' | 'PS';
  colors?: string[];
  description?: string;
  image: string;
}

export const products: Product[] = [
  // Code 75 Family
  {
    id: 'prod-75-01',
    pn: 'PN-7500',
    code: '75',
    codeFamily: '75',
    name: 'Round Container 75 - 250cc',
    nameFa: 'ظرف گرد ۷۵ - ۲۵۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 95,
    capacity: 250,
    material: 'PP',
    colors: ['شفاف', 'سفید'],
    image: '/public/prod-01.webp'
  },
  {
    id: 'prod-75-02',
    pn: 'PN-7505',
    code: '75',
    codeFamily: '75',
    name: 'Round Container 75 - 350cc',
    nameFa: 'ظرف گرد ۷۵ - ۳۵۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 95,
    capacity: 350,
    material: 'PP',
    colors: ['شفاف'],
    image: '/public/prod-02.jpeg'
  },
  {
    id: 'prod-75-03',
    pn: 'PN-7510',
    code: '75',
    codeFamily: '75',
    name: 'Round Container 75 - 500cc',
    nameFa: 'ظرف گرد ۷۵ - ۵۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 95,
    capacity: 500,
    material: 'PP',
    image: '/public/prod-03.jpeg'
  },
  
  // Code 95 Family
  {
    id: 'prod-95-01',
    pn: 'PN-9500',
    code: '95',
    codeFamily: '95',
    name: 'Round Container 95 - 400cc',
    nameFa: 'ظرف گرد ۹۵ - ۴۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 115,
    capacity: 400,
    material: 'PS',
    image: '/public/prod-04.jpeg'
  },
  {
    id: 'prod-95-02',
    pn: 'PN-9505',
    code: '95',
    codeFamily: '95',
    name: 'Round Container 95 - 600cc',
    nameFa: 'ظرف گرد ۹۵ - ۶۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 115,
    capacity: 600,
    material: 'PS',
    image: '/public/prod-05.jpg'
  },
  {
    id: 'prod-95-03',
    pn: 'PN-9514',
    code: '95',
    codeFamily: '95',
    name: 'Round Container 95 - 750cc',
    nameFa: 'ظرف گرد ۹۵ - ۷۵۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 115,
    capacity: 750,
    material: 'PS',
    image: '/public/prod-06.jpeg'
  },

  // Code 125 Family
  {
    id: 'prod-125-01',
    pn: 'PN-12500',
    code: '125',
    codeFamily: '125',
    name: 'Round Container 125 - 800cc',
    nameFa: 'ظرف گرد ۱۲۵ - ۸۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 145,
    capacity: 800,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1548690596-e4d33027b04b?w=800'
  },
  {
    id: 'prod-125-02',
    pn: 'PN-12505',
    code: '125',
    codeFamily: '125',
    name: 'Lid for 125 Series',
    nameFa: 'درب سری ۱۲۵',
    category: 'Lids',
    categoryFa: 'درب',
    diameter: 145,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1589322448752-5c05f2e9ca21?w=800'
  },
  {
    id: 'prod-125-03',
    pn: 'PN-12508',
    code: '125',
    codeFamily: '125',
    name: 'Round Container 125 - 1000cc',
    nameFa: 'ظرف گرد ۱۲۵ - ۱۰۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 145,
    capacity: 1000,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1648820945406-5f4bbedcfcfb?w=800'
  },

  // Code 155 Family
  {
    id: 'prod-155-01',
    pn: 'PN-15500',
    code: '155',
    codeFamily: '155',
    name: 'Round Container 155 - 1200cc',
    nameFa: 'ظرف گرد ۱۵۵ - ۱۲۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 175,
    capacity: 1200,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1548690596-e4d33027b04b?w=800'
  },
  {
    id: 'prod-155-02',
    pn: 'PN-15505',
    code: '155',
    codeFamily: '155',
    name: 'Round Container 155 - 1500cc',
    nameFa: 'ظرف گرد ۱۵۵ - ۱۵۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 175,
    capacity: 1500,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1589322448752-5c05f2e9ca21?w=800'
  },
  {
    id: 'prod-155-03',
    pn: 'PN-15510',
    code: '155',
    codeFamily: '155',
    name: 'Round Container 155 - 2000cc',
    nameFa: 'ظرف گرد ۱۵۵ - ۲۰۰۰ سی‌سی',
    category: 'Round Containers',
    categoryFa: 'ظروف گرد',
    diameter: 175,
    capacity: 2000,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1648820945406-5f4bbedcfcfb?w=800'
  },

  // Special Family
  {
    id: 'prod-spec-01',
    pn: 'PN-SPEC-01',
    code: 'Special',
    codeFamily: 'Special',
    name: 'Special Salad Bowl',
    nameFa: 'کاسه سالاد مخصوص',
    category: 'Special Dishes',
    categoryFa: 'ظروف مخصوص',
    capacity: 850,
    material: 'PS',
    image: 'https://images.unsplash.com/photo-1548690596-e4d33027b04b?w=800'
  },
  {
    id: 'prod-spec-02',
    pn: 'PN-SPEC-02',
    code: 'Special',
    codeFamily: 'Special',
    name: 'Special Dessert Cup',
    nameFa: 'لیوان دسر مخصوص',
    category: 'Special Dishes',
    categoryFa: 'ظروف مخصوص',
    capacity: 300,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1589322448752-5c05f2e9ca21?w=800'
  },

  // Rectangular Family
  {
    id: 'prod-rect-01',
    pn: 'PN-RECT-01',
    code: 'Rectangular',
    codeFamily: 'Rectangular',
    name: 'Rectangular Tray Small',
    nameFa: 'ظرف مستطیلی کوچک',
    category: 'Rectangular Trays',
    categoryFa: 'ظروف مستطیلی',
    capacity: 500,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1648820945406-5f4bbedcfcfb?w=800'
  },
  {
    id: 'prod-rect-02',
    pn: 'PN-RECT-02',
    code: 'Rectangular',
    codeFamily: 'Rectangular',
    name: 'Rectangular Tray Medium',
    nameFa: 'ظرف مستطیلی متوسط',
    category: 'Rectangular Trays',
    categoryFa: 'ظروف مستطیلی',
    capacity: 750,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1548690596-e4d33027b04b?w=800'
  },
  {
    id: 'prod-rect-03',
    pn: 'PN-RECT-03',
    code: 'Rectangular',
    codeFamily: 'Rectangular',
    name: 'Rectangular Tray Large',
    nameFa: 'ظرف مستطیلی بزرگ',
    category: 'Rectangular Trays',
    categoryFa: 'ظروف مستطیلی',
    capacity: 1200,
    material: 'PP',
    image: 'https://images.unsplash.com/photo-1589322448752-5c05f2e9ca21?w=800'
  }
];

export const categories = [
  { id: 'all', label: 'همه محصولات', value: 'all' },
  { id: '75', label: 'کد ۷۵', value: '75' },
  { id: '95', label: 'کد ۹۵', value: '95' },
  { id: '125', label: 'کد ۱۲۵', value: '125' },
  { id: '155', label: 'کد ۱۵۵', value: '155' },
  { id: 'Special', label: 'محصولات ویژه', value: 'Special' },
  { id: 'Rectangular', label: 'مستطیلی', value: 'Rectangular' },
];
