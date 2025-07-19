'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type NavLinkProps = {
  label: string;
  isActive: boolean;
  isConnected: boolean;
  onClickAction: () => void;
};

export default function NavLink({ label, isActive, isConnected, onClickAction }: NavLinkProps) {
  return (
    <div className="relative flex flex-col items-center cursor-pointer" onClick={onClickAction}>
      <motion.div
        className={clsx(
          'w-3 h-3 rounded-full border-2',
          isActive || isConnected ? 'bg-accent border-accent' : 'border-primary',
        )}
        animate={{ scale: isActive ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      />

      <span className={clsx('mt-1 text-xs select-none', isActive ? 'text-accent' : 'text-muted')}>
        {label}
      </span>
    </div>
  );
}
