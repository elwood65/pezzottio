// Pagina /legal — disclaimer legale completo bilingue (EN + IT).
// Versione "ass-covering" che copre: AS IS, limitation of liability, user
// responsibility, no content hosting (safe harbor DMCA/eCommerce/DSA),
// indemnification, severability, governing law (Italy).

function render() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Legal Disclaimer · Pezzottio</title>
  <link rel="icon" href="/logo.png" type="image/png">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif; }
    .prose-legal h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #fff; border-bottom: 1px solid rgba(255,255,255,.06); padding-bottom: .5rem; }
    .prose-legal h3 { font-size: 1.05rem; font-weight: 600; margin-top: 1.75rem; margin-bottom: .5rem; color: #fafafa; }
    .prose-legal p { margin-bottom: 1rem; line-height: 1.7; color: #a3a3a3; font-size: .9rem; }
    .prose-legal p strong { color: #fff; font-weight: 600; }
    .prose-legal .lang-divider { border: none; height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,.15), transparent); margin: 4rem 0; }
    .prose-legal .upper { text-transform: uppercase; font-size: .82rem; letter-spacing: .02em; }
  </style>
</head>
<body class="bg-zinc-950 text-zinc-300 min-h-screen">
  <main class="max-w-3xl mx-auto px-6 py-12">

    <header class="mb-12 pb-8 border-b border-white/[0.06]">
      <div class="flex items-center gap-4 mb-4">
        <a href="/" class="opacity-80 hover:opacity-100 transition">
          <img src="/pezzottio-logo.png" alt="PEZZOTTIO" class="h-8 select-none" draggable="false" />
        </a>
        <span class="text-zinc-700">·</span>
        <h1 class="text-2xl font-bold text-white">Legal Disclaimer</h1>
      </div>
      <p class="text-sm text-zinc-500">
        Versione bilingue · Bilingual version (English + Italiano)
      </p>
      <div class="mt-4 flex gap-3 text-sm">
        <a href="/configure" class="text-zinc-400 hover:text-white transition">← Configura (IT)</a>
        <span class="text-zinc-700">·</span>
        <a href="/configure-en" class="text-zinc-400 hover:text-white transition">← Configure (EN)</a>
      </div>
    </header>

    <div class="prose-legal">

      <h2>🇬🇧 English Version</h2>

      <h3>1. Nature of the Software</h3>
      <p>Pezzottio (the "Software", the "Project", the "Addon") is a free, open-source, non-commercial, educational software project. The Software is a metadata aggregator and proxy layer that operates exclusively as a client of publicly accessible, third-party Application Programming Interfaces ("third-party APIs") and publicly indexed resources. <strong>The Software does not host, store, cache for distribution, upload, seed, share, transmit, transcode for redistribution, or otherwise distribute any audiovisual, textual, or other copyrighted content.</strong> The Software is, by design and by implementation, content-agnostic.</p>

      <h3>2. "AS IS" and "AS AVAILABLE" Basis</h3>
      <p class="upper"><strong>The Software is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, or uninterrupted service. No oral or written information or advice given by the Author, maintainers, or contributors shall create a warranty.</strong></p>

      <h3>3. Limitation of Liability</h3>
      <p class="upper"><strong>To the maximum extent permitted by applicable law, in no event shall the Author, maintainers, contributors, or hosting providers be liable for any direct, indirect, incidental, special, exemplary, consequential, or punitive damages (including but not limited to loss of data, loss of profits, business interruption, procurement of substitute goods or services, or any legal fees, fines, or judgments) arising out of or in any way connected with the use, misuse, or inability to use the Software, even if advised of the possibility of such damages.</strong></p>

      <h3>4. User Responsibility</h3>
      <p>The end user ("User") is solely, exclusively, and entirely responsible for: <strong>(a)</strong> the manner in which the Software is used; <strong>(b)</strong> the legal status of any third-party content, links, streams, or resources accessed by, through, or with the Software; <strong>(c)</strong> compliance with all applicable national, supranational, regional, and local laws, statutes, regulations, treaties, directives, and ordinances, including but not limited to copyright law, intellectual property law, data protection law, electronic communications law, broadcasting law, and any law concerning the access to, possession of, reproduction of, distribution of, or public communication of audiovisual works; <strong>(d)</strong> obtaining, holding, and maintaining all licenses, authorizations, subscriptions, or permissions required by the User's jurisdiction to access any content; <strong>(e)</strong> any financial, civil, administrative, or criminal consequence arising from such use. By installing, configuring, or otherwise using the Software, the User unconditionally accepts this responsibility in full.</p>

      <h3>5. Educational and Research Purpose</h3>
      <p>The Software is developed, distributed, and made available strictly for educational, research, interoperability, technical demonstration, personal study, and academic illustration purposes. Any other use is undertaken at the User's own initiative and entirely at the User's own risk. <strong>The Author does not encourage, endorse, solicit, condone, promote, advise, or otherwise invite the use of the Software for any unlawful purpose.</strong></p>

      <h3>6. Third-Party Services and Trademarks</h3>
      <p>The Software interacts with third-party services and APIs operated by independent entities ("Third-Party Services"), including but not limited to debrid services, metadata providers, public torrent indexers, and streaming sites. The Author has no affiliation, sponsorship, partnership, endorsement, license, or commercial relationship with any of these Third-Party Services unless explicitly stated. All trademarks, service marks, trade names, product names, logos, and brand identifiers referenced in the Software, the documentation, the configuration interfaces, or any associated materials are and remain the exclusive property of their respective owners. References are used solely for descriptive, identifying, and interoperability purposes and do not imply any endorsement, affiliation, or sponsorship. The User is responsible for complying with the Terms of Service of each Third-Party Service the User chooses to use.</p>

      <h3>7. No Content Hosting; Compliance Procedure</h3>
      <p>The Author does not host, control, edit, or monitor the content available through Third-Party Services. The Software performs purely transient technical operations (caching, transcoding hints, segment proxying) that fall within recognized safe-harbor provisions of applicable law, including, where applicable, the EU Directive on Electronic Commerce (2000/31/EC), the EU Digital Services Act (Regulation (EU) 2022/2065), the United States Digital Millennium Copyright Act (17 U.S.C. § 512), and analogous national implementing legislation. Should any rights holder believe that the Software, in its source code, default configuration, or documentation, facilitates infringement of their rights, they are invited to submit a written, substantiated, and legally compliant notice to the maintainer contact listed in the project repository. <strong>The Author reserves the right to remove, disable, modify, or amend any component of the Software upon receipt of a valid notice.</strong></p>

      <h3>8. No Storage of User Data</h3>
      <p>The publicly hosted instance of the Software, if and when available, does not persist user credentials, debrid API keys, IP addresses, viewing history, watchlists, or any other personally identifiable information in a database. <strong>Debrid keys and configuration parameters are encoded inside the User's personal addon URL and exist only therein.</strong> No telemetry, advertising, third-party tracker, or analytics is integrated into the Software. The Author reserves the right to retain transient operational logs (request paths, timestamps, status codes, error traces) strictly for the purpose of preserving service stability, diagnosing technical malfunctions, and preventing abuse, with such logs being rotated and discarded according to a short retention policy.</p>

      <h3>9. No Guarantee of Availability</h3>
      <p>The Author makes no commitment to maintain, operate, host, or continue the public instance of the Software, in whole or in part, for any period of time. The public instance, third-party API integrations, individual sources, catalogs, and any other component may be discontinued, suspended, throttled, or modified at any time, without prior notice, and without any obligation to provide replacement, migration, or refund of any kind.</p>

      <h3>10. Self-Hosting</h3>
      <p>The Software's source code is distributed under the MIT License. Users who wish to deploy a private, independently operated instance of the Software for their own personal use are free to do so under the terms of the MIT License. <strong>Self-hosting Users are solely responsible for the legal status of their deployment in their jurisdiction</strong>, including any obligations regarding registration, taxation, data protection, and content moderation that may apply.</p>

      <h3>11. No Professional Advice</h3>
      <p>Nothing in the Software, the documentation, the website, or any associated communication channel constitutes legal advice, fiscal advice, technical certification, or any other form of professional consultation. Users seeking such guidance must consult a qualified, locally licensed professional.</p>

      <h3>12. Indemnification</h3>
      <p>The User agrees to indemnify, defend, and hold harmless the Author, the maintainers, the contributors, and any hosting providers from and against any and all claims, demands, actions, suits, proceedings, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way related to <strong>(a)</strong> the User's use or misuse of the Software, <strong>(b)</strong> the User's violation of any law, regulation, or third-party right, or <strong>(c)</strong> the User's breach of any term of this Disclaimer.</p>

      <h3>13. Severability</h3>
      <p>If any provision of this Disclaimer is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable; the remaining provisions shall continue in full force and effect.</p>

      <h3>14. Acceptance</h3>
      <p><strong>Installation, configuration, deployment, or any other use of the Software constitutes the User's unconditional and irrevocable acceptance of every term of this Disclaimer.</strong> Users who do not agree with any term of this Disclaimer must not install, configure, deploy, or use the Software.</p>

      <h3>15. Amendments</h3>
      <p>The Author reserves the right to modify, amend, supplement, or replace this Disclaimer at any time, at the Author's sole discretion. The current version of the Disclaimer is the version published on this page at the time the User accesses the Software. Continued use of the Software after any modification constitutes acceptance of the modified Disclaimer.</p>

      <h3>16. Governing Law and Jurisdiction</h3>
      <p>This Disclaimer shall be governed by and construed in accordance with the laws of the Italian Republic, without regard to its conflict of laws principles. Any dispute arising out of or in connection with this Disclaimer shall be subject to the exclusive jurisdiction of the courts having competence over the legal residence of the Author, to the extent permitted by applicable mandatory provisions of consumer or other protective legislation.</p>

      <hr class="lang-divider" />

      <h2>🇮🇹 Versione Italiana</h2>

      <h3>1. Natura del Software</h3>
      <p>Pezzottio (il "Software", il "Progetto", l'"Addon") è un progetto software libero, open-source, non commerciale e a scopo educativo. Il Software è un aggregatore di metadati e uno strato di proxy tecnico che opera esclusivamente come client di Application Programming Interfaces ("API di terze parti") e risorse pubblicamente indicizzate, gestite da soggetti indipendenti. <strong>Il Software non ospita, non archivia per la distribuzione, non memorizza in modo persistente, non carica, non condivide tramite seeding, non trasmette, non transcodifica per la ridistribuzione, né altrimenti distribuisce alcun contenuto audiovisivo, testuale o di altra natura protetto da diritto d'autore.</strong> Per design e per implementazione, il Software è agnostico rispetto al contenuto.</p>

      <h3>2. Fornitura "COSÌ COM'È" e "COME DISPONIBILE"</h3>
      <p class="upper"><strong>Il Software è fornito "così com'è" e "come disponibile", senza garanzie di alcun genere, espresse o implicite, incluse, a titolo esemplificativo e non esaustivo, garanzie implicite di commerciabilità, idoneità a un particolare scopo, non violazione di diritti di terzi, accuratezza, completezza o continuità del servizio. Nessuna informazione o consiglio, orale o scritto, fornito dall'Autore, dai manutentori o dai contributori costituisce o costituirà una garanzia.</strong></p>

      <h3>3. Limitazione di Responsabilità</h3>
      <p class="upper"><strong>Nella misura massima consentita dalla legge applicabile, in nessun caso l'Autore, i manutentori, i contributori o i provider di hosting saranno responsabili per alcun danno diretto, indiretto, incidentale, speciale, esemplare, consequenziale o punitivo (inclusi, a titolo esemplificativo, perdita di dati, perdita di profitti, interruzione dell'attività, costi per l'approvvigionamento di beni o servizi sostitutivi, oneri legali, sanzioni o condanne) derivanti da o in qualsiasi modo connessi all'uso, all'uso improprio o all'impossibilità di uso del Software, anche se informati della possibilità di tali danni.</strong></p>

      <h3>4. Responsabilità dell'Utente</h3>
      <p>L'utente finale ("Utente") è l'unico, esclusivo e integrale responsabile di: <strong>(a)</strong> le modalità con cui il Software viene utilizzato; <strong>(b)</strong> la qualifica giuridica di qualsiasi contenuto, link, stream o risorsa di terze parti consultato o reso accessibile tramite il Software; <strong>(c)</strong> il rispetto integrale di tutte le leggi, normative, regolamenti, trattati, direttive, ordinanze e disposizioni applicabili a livello nazionale, sovranazionale, regionale e locale, ivi inclusi, a titolo non esaustivo, il diritto d'autore, il diritto della proprietà intellettuale, la normativa in materia di protezione dei dati personali, la normativa sulle comunicazioni elettroniche, la normativa sulla radiodiffusione e qualsivoglia disposizione relativa all'accesso, al possesso, alla riproduzione, alla distribuzione o alla comunicazione al pubblico di opere audiovisive; <strong>(d)</strong> l'ottenimento e il mantenimento di tutte le licenze, autorizzazioni, abbonamenti o permessi richiesti nella giurisdizione dell'Utente per accedere a qualsivoglia contenuto; <strong>(e)</strong> qualunque conseguenza di carattere economico, civile, amministrativo o penale derivante da tale uso. Installando, configurando o altrimenti utilizzando il Software, l'Utente accetta incondizionatamente e integralmente tale responsabilità.</p>

      <h3>5. Finalità Educativa e di Ricerca</h3>
      <p>Il Software è sviluppato, distribuito e reso disponibile esclusivamente per finalità di studio, ricerca, interoperabilità tecnica, dimostrazione didattica, approfondimento personale e illustrazione accademica. Qualunque altro utilizzo è effettuato per iniziativa autonoma dell'Utente e a totale ed esclusivo rischio dello stesso. <strong>L'Autore non incoraggia, non promuove, non approva, non sollecita né altrimenti invita l'uso del Software per finalità illecite.</strong></p>

      <h3>6. Servizi di Terze Parti e Marchi</h3>
      <p>Il Software interagisce con servizi e API gestiti da soggetti indipendenti ("Servizi di Terze Parti"), inclusi a titolo esemplificativo servizi di debrid, fornitori di metadati, indici di torrent pubblici e siti di streaming. L'Autore non ha alcun rapporto di affiliazione, sponsorizzazione, partnership, endorsement, licenza o relazione commerciale con tali Servizi di Terze Parti, salvo ove espressamente dichiarato. Tutti i marchi, marchi di servizio, denominazioni commerciali, nomi di prodotto, loghi e segni distintivi citati nel Software, nella documentazione, nelle interfacce di configurazione o nei materiali correlati sono di proprietà esclusiva dei rispettivi titolari. Tali riferimenti sono utilizzati esclusivamente per finalità descrittive, identificative e di interoperabilità tecnica e non implicano alcun endorsement, affiliazione o sponsorizzazione. L'Utente è responsabile del rispetto dei Termini di Servizio di ciascun Servizio di Terze Parti del quale decida di avvalersi.</p>

      <h3>7. Assenza di Hosting di Contenuti; Procedura di Conformità</h3>
      <p>L'Autore non ospita, non controlla, non modifica e non monitora i contenuti accessibili tramite i Servizi di Terze Parti. Il Software esegue operazioni tecniche di natura transitoria (caching, suggerimenti di transcodifica, proxy di segmenti) che ricadono nelle previsioni di esonero da responsabilità riconosciute dalla normativa applicabile, ivi incluse, ove applicabili, le disposizioni della Direttiva 2000/31/CE sul commercio elettronico, del Regolamento (UE) 2022/2065 (Digital Services Act), e della corrispondente normativa nazionale di recepimento (D.Lgs. 70/2003 e successive modifiche). Qualora un titolare di diritti ritenga che il Software, nel suo codice sorgente, nella configurazione predefinita o nella documentazione, agevoli la violazione dei propri diritti, è invitato a trasmettere una notifica scritta, motivata e conforme ai requisiti di legge al contatto del manutentore indicato nel presente repository. <strong>L'Autore si riserva il diritto di rimuovere, disabilitare, modificare o emendare qualsiasi componente del Software a fronte del ricevimento di una notifica valida.</strong></p>

      <h3>8. Assenza di Conservazione dei Dati dell'Utente</h3>
      <p>L'istanza pubblicamente ospitata del Software, ove disponibile, non conserva su database credenziali utente, chiavi API di debrid, indirizzi IP, cronologie di visualizzazione, watchlist o qualsivoglia altra informazione personalmente identificabile. <strong>Le chiavi di debrid e i parametri di configurazione sono codificati all'interno dell'URL personale dell'addon dell'Utente ed esistono unicamente lì.</strong> Nessun sistema di telemetria, pubblicità, tracker di terze parti o analitica è integrato nel Software. L'Autore si riserva la facoltà di conservare log operativi transitori (percorsi delle richieste, timestamp, codici di stato, tracce di errore) esclusivamente al fine di preservare la stabilità del servizio, diagnosticare malfunzionamenti tecnici e prevenire abusi, con politica di rotazione e cancellazione a breve termine.</p>

      <h3>9. Nessuna Garanzia di Disponibilità</h3>
      <p>L'Autore non assume alcun impegno a mantenere, operare, ospitare o continuare l'istanza pubblica del Software, in tutto o in parte, per alcun periodo di tempo. L'istanza pubblica, le integrazioni con API di terze parti, le singole fonti, i cataloghi e qualunque altro componente potranno essere dismessi, sospesi, limitati o modificati in qualsiasi momento, senza preavviso e senza alcun obbligo di fornire sostituzioni, migrazioni o rimborsi.</p>

      <h3>10. Self-Hosting</h3>
      <p>Il codice sorgente del Software è distribuito secondo i termini della Licenza MIT. Gli Utenti che desiderino effettuare il deployment di un'istanza privata e gestita in modo indipendente del Software, per il proprio uso personale, sono liberi di farlo nei termini della Licenza MIT. <strong>Gli Utenti che ospitano autonomamente il Software sono esclusivi responsabili della qualifica giuridica del loro deployment nella propria giurisdizione</strong>, ivi inclusi obblighi di registrazione, fiscali, di protezione dei dati e di moderazione dei contenuti eventualmente applicabili.</p>

      <h3>11. Assenza di Consulenza Professionale</h3>
      <p>Nessun elemento contenuto nel Software, nella documentazione, nel sito web o in qualsivoglia canale di comunicazione associato costituisce consulenza legale, consulenza fiscale, certificazione tecnica o altra forma di consulenza professionale. Gli Utenti che necessitino di tale consulenza sono tenuti a rivolgersi a un professionista qualificato e abilitato nella propria giurisdizione.</p>

      <h3>12. Manleva e Indennizzo</h3>
      <p>L'Utente si impegna a manlevare, difendere e tenere indenni l'Autore, i manutentori, i contributori e qualsivoglia provider di hosting da e contro ogni e qualsiasi pretesa, richiesta, azione, causa, procedimento, responsabilità, danno, perdita, costo e spesa (incluse le ragionevoli spese legali) derivanti da o in qualunque modo connessi a <strong>(a)</strong> l'uso o l'uso improprio del Software da parte dell'Utente, <strong>(b)</strong> la violazione di qualsivoglia legge, regolamento o diritto di terzi da parte dell'Utente, <strong>(c)</strong> la violazione di qualsivoglia clausola del presente Disclaimer da parte dell'Utente.</p>

      <h3>13. Salvaguardia delle Clausole</h3>
      <p>Qualora una qualsivoglia disposizione del presente Disclaimer sia ritenuta invalida, illegittima o non eseguibile da parte di un'autorità giudiziaria competente, tale disposizione sarà considerata modificata nella misura minima necessaria a renderla valida, legittima ed eseguibile; le restanti disposizioni resteranno pienamente in vigore.</p>

      <h3>14. Accettazione</h3>
      <p><strong>L'installazione, la configurazione, il deployment o qualsivoglia altro utilizzo del Software costituisce accettazione incondizionata e irrevocabile, da parte dell'Utente, di ogni clausola del presente Disclaimer.</strong> Gli Utenti che non intendano accettare anche una sola clausola del presente Disclaimer sono tenuti a non installare, non configurare, non distribuire e non utilizzare il Software.</p>

      <h3>15. Modifiche</h3>
      <p>L'Autore si riserva il diritto di modificare, integrare, sostituire o emendare il presente Disclaimer in qualsiasi momento, a propria esclusiva discrezione. La versione vigente è quella pubblicata su questa pagina nel momento in cui l'Utente accede al Software. Il proseguimento dell'uso del Software successivo a qualsivoglia modifica costituisce accettazione del Disclaimer modificato.</p>

      <h3>16. Legge Applicabile e Foro Competente</h3>
      <p>Il presente Disclaimer è regolato e interpretato secondo la legge della Repubblica Italiana, senza riguardo ai relativi principi sui conflitti di legge. Qualunque controversia derivante dal o connessa al presente Disclaimer sarà devoluta alla competenza esclusiva del foro avente competenza sulla residenza legale dell'Autore, nei limiti consentiti dalle disposizioni inderogabili in materia di tutela del consumatore o di altra natura.</p>

    </div>

    <footer class="mt-16 pt-8 border-t border-white/[0.06] text-xs text-zinc-500 text-center">
      <p class="mb-2">Pezzottio · Open source · MIT License · 🇮🇹 Made in Italy</p>
      <p>
        <a href="/configure" class="hover:text-white transition">Configura (IT)</a>
        · <a href="/configure-en" class="hover:text-white transition">Configure (EN)</a>
        · <a href="https://github.com/ceres777/pezzottio" target="_blank" rel="noopener" class="hover:text-white transition">GitHub</a>
        · <a href="https://t.me/Mbhere1" target="_blank" rel="noopener" class="hover:text-white transition">Support · Supporto</a>
      </p>
    </footer>

  </main>
</body>
</html>`;
}

module.exports = { render };
