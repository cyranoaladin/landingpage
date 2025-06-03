import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
  name: string;
  href: string;
  icon: string;
  description: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function DropdownMenu({ items, isOpen, onMouseEnter, onMouseLeave }: DropdownMenuProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-[#181825] rounded-xl shadow-xl border border-white/10 overflow-hidden"
          >
            {items.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-[#14F195]">{item.icon === "FileText" ? "📄" : "📚"}</span>
                <div>
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 