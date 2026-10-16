import { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-cream rounded-lg p-6 relative max-w-2xl w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-primaryDark hover:text-terracotta"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          {/* Placeholder video embed */}
          <div className="aspect-video bg-softBeige flex items-center justify-center">
            <p className="text-darkText">Video placeholder</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
