import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import NewsletterPopup from "./components/NewsletterPopup";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { ShippingPolicy, ReturnsPolicy, PrivacyPolicy, TermsOfService } from "./pages/Policies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product/:slug" component={ProductDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/shipping" component={ShippingPolicy} />
      <Route path="/returns" component={ReturnsPolicy} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <NewsletterPopup />
            <CartDrawer />
            <Navbar />
            <Router />
            <Footer />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
