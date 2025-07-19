'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type NodeConnectorProps = {
  isActive: boolean;
};

export default function NodeConnector({ isActive }: NodeConnectorProps) {
  return (
    <motion.div
      className={clsx(
        'absolute top-1.5 left-full w-8 h-1 rounded-full',
        isActive ? 'bg-accent' : 'bg-primary',
      )}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isActive ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ transformOrigin: 'left' }}
    />
  );
}
