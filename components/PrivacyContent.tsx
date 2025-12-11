import React from 'react';
import { APP_NAME, CONTACT_EMAIL, DEVELOPER_NAME, EFFECTIVE_DATE } from '../constants';
import { Lock, Database, Server, Mail } from 'lucide-react';

const SectionTitle: React.FC<{ title: string; icon?: React.ReactNode; id?: string }> = ({ title, icon, id }) => (
  <h2 id={id} className="text-2xl font-bold text-slate-800 mt-10 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
    {icon && <span className="text-emerald-600">{icon}</span>}
    {title}
  </h2>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-slate-600 leading-relaxed mb-4 text-justify">
    {children}
  </p>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="text-slate-600 leading-relaxed mb-2 ml-4 list-disc">
    {children}
  </li>
);

export const PrivacyContent: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Votre vie privée est importante pour nous. Ce document explique comment {APP_NAME} traite vos données.
        </p>
        <p className="text-sm text-slate-400 mt-4">
          Dernière mise à jour : {EFFECTIVE_DATE}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
        
        <Paragraph>
          {DEVELOPER_NAME} a développé l'application {APP_NAME}. Ce SERVICE est fourni par {DEVELOPER_NAME} et est destiné à être utilisé tel quel.
        </Paragraph>
        <Paragraph>
          Cette page est utilisée pour informer les visiteurs de nos politiques concernant la collecte, l'utilisation et la divulgation des informations personnelles si quelqu'un décide d'utiliser notre service.
        </Paragraph>
        <Paragraph>
          Si vous choisissez d'utiliser notre service, vous acceptez la collecte et l'utilisation d'informations en relation avec cette politique. Les informations personnelles que nous collectons (le cas échéant) sont utilisées pour fournir et améliorer le service. Nous n'utiliserons ni ne partagerons vos informations avec qui que ce soit, sauf dans les cas décrits dans la présente politique de confidentialité.
        </Paragraph>

        <SectionTitle title="Collecte et utilisation des informations" icon={<Database size={24} />} />
        <Paragraph>
          Pour une meilleure expérience lors de l'utilisation de notre service, nous tenons à préciser que nous ne collectons aucune information personnelle identifiable (comme votre nom, adresse ou numéro de téléphone). Les données liées au jeu (comme la progression ou les préférences) sont stockées localement sur votre appareil.
        </Paragraph>
        <Paragraph>
          L'application utilise cependant des services tiers qui peuvent collecter des informations utilisées pour vous identifier (par exemple, des identifiants publicitaires ou des diagnostics techniques). Voici les liens vers les politiques de confidentialité des fournisseurs de services tiers potentiellement utilisés :
        </Paragraph>
        <ul className="mb-6 pl-5 space-y-1">
          <ListItem><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Services Google Play</a></ListItem>
          <ListItem><a href="https://support.google.com/admob/answer/6128543?hl=fr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">AdMob (publicités)</a></ListItem>
          <ListItem><a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Unity Ads (si applicable)</a></ListItem>
        </ul>

        <SectionTitle title="Données de journal (Log Data)" icon={<Server size={24} />} />
        <Paragraph>
          Nous tenons à vous informer que chaque fois que vous utilisez notre service, en cas d'erreur dans l'application, nous collectons des données et des informations (via des produits tiers) sur votre téléphone, appelées données de journal. Ces données de journal peuvent inclure des informations telles que l'adresse de protocole Internet (IP) de votre appareil, le nom de l'appareil, la version du système d'exploitation, la configuration de l'application lors de l'utilisation de notre service, l'heure et la date de votre utilisation du service et d'autres statistiques.
        </Paragraph>

        <SectionTitle title="Cookies" />
        <Paragraph>
          Les cookies sont des fichiers contenant une petite quantité de données qui sont couramment utilisés comme identifiants uniques anonymes. Ils sont envoyés à votre navigateur à partir des sites web que vous visitez et sont stockés dans la mémoire interne de votre appareil.
        </Paragraph>
        <Paragraph>
          Ce service n'utilise pas explicitement ces « cookies ». Cependant, l'application peut utiliser du code et des bibliothèques tiers qui utilisent des « cookies » pour collecter des informations et améliorer leurs services. Vous avez la possibilité d'accepter ou de refuser ces cookies et de savoir quand un cookie est envoyé sur votre appareil. Si vous choisissez de refuser nos cookies, vous ne pourrez peut-être pas utiliser certaines parties de ce service.
        </Paragraph>

        <SectionTitle title="Sécurité" icon={<Lock size={24} />} />
        <Paragraph>
          Nous apprécions la confiance que vous nous accordez en utilisant notre application. Bien que nous ne collections pas d'informations personnelles directement, nous veillons à ce que les bibliothèques tierces intégrées respectent les normes de sécurité en vigueur. Cependant, rappelez-vous qu'aucune méthode de transmission sur Internet, ou méthode de stockage électronique n'est sûre et fiable à 100 %, et nous ne pouvons garantir sa sécurité absolue.
        </Paragraph>

        <SectionTitle title="Modifications de cette politique" />
        <Paragraph>
          Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Ainsi, il vous est conseillé de consulter cette page périodiquement pour tout changement. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.
        </Paragraph>

        <SectionTitle title="Nous contacter" icon={<Mail size={24} />} id="contact" />
        <Paragraph>
          Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, n'hésitez pas à nous contacter.
        </Paragraph>
        <div className="mt-6 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          <Mail className="text-slate-400 mb-2" size={32} />
          <p className="font-semibold text-slate-700">Email de contact</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 font-bold hover:underline mt-1 text-lg break-all">
            {CONTACT_EMAIL}
          </a>
        </div>

      </div>
    </main>
  );
};