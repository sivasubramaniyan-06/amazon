// ─── Core Domain Types ─────────────────────────────────────────────────────

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  brandLogo?: string;
  category: string;
  subcategory?: string;
  images: string[];
  thumbnail: string;
  currentPrice: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  stockStatus: "in_stock" | "low_stock" | "out_of_stock";
  stockCount?: number;
  isPrime: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  isFlashDeal?: boolean;
  flashDealEnds?: string;
  tags: string[];
  description: string;
  specifications: Record<string, string>;
  highlights: string[];
  deliveryDays: number;
  seller: string;
  returnDays: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  productCount: number;
  color: string;
  featured?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  productCount: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Address {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault: boolean;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "returned";
  placedAt: string;
  deliveredAt?: string;
  total: number;
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  address: Address;
  paymentMethod: string;
  trackingId?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  productId: string;
  rating: number;
  title: string;
  body: string;
  helpful: number;
  images?: string[];
  verified: boolean;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: "percent" | "flat";
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  validUntil: string;
  usageLimit: number;
  usedCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  role: "customer" | "seller" | "admin";
  joinedAt: string;
  isVerified: boolean;
  ordersCount?: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  productName?: string;
}

export interface Notification {
  id: string;
  type: "order" | "offer" | "system" | "review";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface SellerStats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  avgRating: number;
  pendingOrders: number;
  monthlyRevenue: number[];
  topProducts: Product[];
}

export interface AdminStats {
  totalUsers: number;
  totalSellers: number;
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  newUsersToday: number;
  revenueToday: number;
}
