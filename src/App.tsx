/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Articles from './components/Articles';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import AccessibilityMenu from './components/AccessibilityMenu';
import CookieConsent from './components/CookieConsent';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <AccessibilityMenu />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Articles />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </div>
  );
}
