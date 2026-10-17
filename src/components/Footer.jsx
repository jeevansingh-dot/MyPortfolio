import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Portfolio.dev. All rights reserved.</p>
    </footer>
  );
}