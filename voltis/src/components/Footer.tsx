import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-edf-blue rounded-full flex items-center justify-center text-white font-bold border border-white/20">
                e
              </div>
              <span className="font-bold text-lg">SOLUTIONS SOLAIRES</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Nous accompagnons les particuliers et les professionnels dans leur
              transition énergétique grâce à des solutions solaires performantes
              et durables.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-edf-orange transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-edf-orange transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-edf-orange transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Nos solutions</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Panneaux photovoltaïques
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Autoconsommation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Batterie de stockage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Borne de recharge
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">À propos</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Qui sommes-nous ?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Nos réalisations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Avis clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-edf-orange transition-colors">
                  Recrutement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <p className="text-slate-400 text-sm mb-4">
              Une question sur votre projet ?<br />
              Nos experts vous répondent.
            </p>
            <a
              href="tel:0809404005"
              className="text-2xl font-bold text-edf-orange hover:text-white transition-colors block mb-2"
            >
              0 809 404 005
            </a>
            <p className="text-slate-500 text-xs">
              Service & appel gratuits.
              <br />
              Du lundi au vendredi de 9h à 19h.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Groupe France Solaire - Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
