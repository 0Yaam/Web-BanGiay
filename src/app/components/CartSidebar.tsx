import { useNavigate } from "react-router";
import GiỏHàng44219 from "../../imports/GiỏHang-1/GiỏHang-4-4219";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleViewCart = () => {
    onClose();
    navigate("/cart");
  };

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-[370px] max-w-[100vw] z-50 animate-in slide-in-from-right duration-300 overflow-hidden">
        <div className="h-full w-full" onClick={(e) => {
          const target = e.target as HTMLElement;

          // Check if close button was clicked
          if (target.closest('[data-name="Button - close modal"]')) {
            onClose();
            return;
          }

          // Check if View Cart was clicked
          if (target.closest('[data-name="Link"]')?.textContent?.includes('VIEW CART')) {
            handleViewCart();
            return;
          }

          // Check if Checkout was clicked
          if (target.closest('[data-name="Link"]')?.textContent?.includes('CHECKOUT')) {
            handleCheckout();
            return;
          }
        }}>
          <GiỏHàng44219 />
        </div>
      </div>
    </>
  );
}
