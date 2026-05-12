import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { getProductById, type Product } from "@/lib/store";

export interface CartItem {
  productId: string;
  quantity: number;
  selectedVariants: Record<string, string>;
}

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string, variants: Record<string, string>, qty?: number) => void;
  removeItem: (productId: string, variants: Record<string, string>) => void;
  updateQuantity: (productId: string, variants: Record<string, string>, qty: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  getCartProducts: () => { product: Product; item: CartItem }[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

function variantKey(variants: Record<string, string>): string {
  return Object.entries(variants).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => `${k}:${v}`).join("|");
}

function matchVariants(a: Record<string, string>, b: Record<string, string>): boolean {
  return variantKey(a) === variantKey(b);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("tiderush-cart");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tiderush-cart", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((productId: string, variants: Record<string, string>, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.productId === productId && matchVariants(i.selectedVariants, variants));
      if (existing) {
        return prev.map(i =>
          i.productId === productId && matchVariants(i.selectedVariants, variants)
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      }
      return [...prev, { productId, quantity: qty, selectedVariants: variants }];
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, variants: Record<string, string>) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && matchVariants(i.selectedVariants, variants))));
  }, []);

  const updateQuantity = useCallback((productId: string, variants: Record<string, string>, qty: number) => {
    if (qty <= 0) {
      removeItem(productId, variants);
      return;
    }
    setItems(prev => prev.map(i =>
      i.productId === productId && matchVariants(i.selectedVariants, variants)
        ? { ...i, quantity: qty }
        : i
    ));
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const subtotal = items.reduce((sum, i) => {
    const product = getProductById(i.productId);
    return sum + (product ? product.price * i.quantity : 0);
  }, 0);

  const getCartProducts = useCallback(() => {
    return items.map(item => {
      const product = getProductById(item.productId);
      return product ? { product, item } : null;
    }).filter(Boolean) as { product: Product; item: CartItem }[];
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal, getCartProducts, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
