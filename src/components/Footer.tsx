/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              OPTIMUM <br/>
              <span className="text-blue-600 dark:text-blue-400">Holding Group</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              L’ingénierie juridique et financière au service du développement. Notre expertise à votre service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3 font-medium text-slate-600 dark:text-slate-400">
              <li><Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mot du Directeur</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Nos Services</Link></li>
              <li><Link href="#equipe" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Qui sommes-nous ?</Link></li>
              <li><Link href="#dematsolution" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">DematSolution</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Holding</h4>
            <ul className="space-y-3 font-medium text-slate-600 dark:text-slate-400">
              <li><Link href="/sotiam" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SOTIAM</Link></li>
              <li><Link href="/sci" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">MEGA IMMO PRESTIGE</Link></li>
              <li><Link href="/optimume" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">OPTIMUM ENGINE</Link></li>
              <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-blue-600 dark:text-blue-400">OPTIMUM JURIDIS FINANCE</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Siège Social, Optimum Holding</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>+237 000 000 000</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>contact@optimumholding.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} OPTIMUM JURIDIS FINANCE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
