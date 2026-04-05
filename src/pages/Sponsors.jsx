import React, { useState } from "react";

import sponsorfolder from "../assets/documents/SPONSORING FOLDER gitex.pdf";




const Sponsors = ({ theme }) => {
  const [showPDF, setShowPDF] = useState(false);

  const sponsorsData = [
    {
      id: 1,
      name: "Not yet ",
      logo: "/noSponsorYet.png",
      website: "https://example.com",
    },
    {
      id: 2,
      name: "No sponsor yet",
      logo: "/noSponsorYet.png",
      website: "https://example.com",
    },
    {
      id: 3,
      name: "No sponsor yet",
      logo: "/noSponsorYet.png",
      website: "https://example.com",
    },
    {
      id: 4,
      name: "No sponsor yet",
      logo: "/noSponsorYet.png",
      website: "https://example.com",
    },
  ];

  return (
    <div className="w-full animate-fade-in pt-28 md:pt-32 pb-12">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Nos Sponsors & Partenaires
        </h1>
        <p className={`max-w-2xl mx-auto text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          Ils soutiennent notre mission de former les experts en cybersécurité de demain.
        </p>
      </div>

      {/* 🆕 SPONSORSHIP SECTION */}
      <div className={`mb-20 p-8 rounded-3xl text-center border ${
        theme === "dark" ? "bg-gray-800/30 border-gray-700" : "bg-gray-50 border-gray-200"
      }`}>
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Devenez Sponsor
        </h2>

        <p className={`max-w-3xl mx-auto mb-6 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          Accédez à une communauté de futurs experts en cybersécurité et bénéficiez d’une visibilité directe
          lors de notre événement CTF.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowPDF(true)}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
          >
          Voir le dossier sponsoring
          </button>

          <a
            href={sponsorfolder}
            download
            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-bold hover:bg-gray-300 transition"
          >
            Télécharger
          </a>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sponsorsData.map((sponsor) => (
          <div key={sponsor.id}
            className={`group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 border ${
              theme === "dark"
                ? "bg-gray-800/40 border-gray-700 hover:border-blue-500"
                : "bg-white border-gray-200 hover:border-blue-500"
            }`}
          >
            <div className="h-32 w-full flex items-center justify-center mb-6">
              <img src={sponsor.logo} alt={sponsor.name}
                className="max-h-full object-contain grayscale group-hover:grayscale-0 transition"
              />
            </div>

            <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              {sponsor.name}
            </h3>

            <a href={sponsor.website} target="_blank" rel="noopener noreferrer"
              className="mt-auto px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              Visiter
            </a>
          </div>
        ))}
      </div>

      {/* PDF MODAL */}
      {showPDF && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="w-[90%] h-[90%] bg-white rounded-xl overflow-hidden relative">
            
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-3 right-3 bg-red-500 text-white px-4 py-1 rounded"
            >
              X
            </button>

            <iframe
              src={sponsorfolder}
              className="w-full h-full"
              title="Sponsoring PDF"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-24 text-center">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=said.laachir.2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500"
        >
          Contactez-nous
        </a>
      </div>

    </div>
  );
};

export default Sponsors;