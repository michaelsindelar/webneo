import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gdpr")({
  head: () => ({
    meta: [
      { title: "Ochrana osobních údajů (GDPR) | Webneo" },
      {
        name: "description",
        content:
          "Zásady zpracování osobních údajů Webneo: správce, účely a právní základ zpracování, doba uchování, příjemci, práva subjektů údajů a kontakt.",
      },
      { property: "og:title", content: "Ochrana osobních údajů (GDPR) | Webneo" },
      {
        property: "og:description",
        content: "Zásady zpracování osobních údajů obchodní značky Webneo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Gdpr,
});

function Gdpr() {
  return (
    <div className="border-b border-border bg-background py-14 md:py-18">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-violet">
            Zásady zpracování osobních údajů
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.1] md:text-[2.6rem]">
            Ochrana osobních údajů (GDPR)
          </h1>

          <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Správce osobních údajů</h2>
              <p className="mt-3">
                Správcem osobních údajů podle čl. 4 odst. 7 Nařízení Evropského parlamentu a Rady
                (EU) 2016/679 („GDPR“) je:
              </p>
              <p className="mt-3">
                Michael Šindelář
                <br />
                IČO: 24473359
                <br />
                Zapsán v živnostenském rejstříku vedeném Magistrátem města Brna
                <br />
                podnikající pod obchodní značkou Webneo
                <br />
                e-mail: michael.sindelar@webneo.pro
                <br />
                webová stránka: www.webneo.pro
              </p>
              <p className="mt-3">(dále jen „správce“).</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                2. Jaké osobní údaje zpracováváme
              </h2>
              <p className="mt-3">
                Na tomto webu je využíván kontaktní a rezervační formulář prostřednictvím služby
                Cal.com. V rámci komunikace nebo obchodní poptávky mohou být zpracovávány zejména
                následující údaje:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>jméno a příjmení,</li>
                <li>e-mailová adresa,</li>
                <li>telefonní číslo,</li>
                <li>název společnosti,</li>
                <li>obsah zprávy nebo poptávky,</li>
                <li>informace související s rezervací termínu,</li>
                <li>
                  technické a provozní údaje vznikající při použití webu nebo rezervačního
                  formuláře.
                </li>
              </ul>
              <p className="mt-3">
                Správce nezpracovává zvláštní kategorie osobních údajů (citlivé údaje), pokud je
                uživatel sám dobrovolně neposkytne.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                3. Účel zpracování osobních údajů
              </h2>
              <p className="mt-3">Osobní údaje jsou zpracovávány za účelem:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>vyřízení poptávky,</li>
                <li>komunikace se zájemcem o služby,</li>
                <li>sjednání online schůzky nebo konzultace,</li>
                <li>evidence obchodních kontaktů a leadů,</li>
                <li>přípravy nabídky služeb,</li>
                <li>realizace spolupráce v oblasti tvorby, správy a vývoje webových řešení,</li>
                <li>ochrany oprávněných zájmů správce.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Právní základ zpracování</h2>
              <p className="mt-3">Právním základem zpracování osobních údajů je zejména:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>jednání o uzavření smlouvy dle čl. 6 odst. 1 písm. b) GDPR,</li>
                <li>oprávněný zájem správce dle čl. 6 odst. 1 písm. f) GDPR,</li>
                <li>případně plnění právních povinností dle čl. 6 odst. 1 písm. c) GDPR.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Doba uchování údajů</h2>
              <p className="mt-3">
                Osobní údaje jsou uchovávány pouze po dobu nezbytně nutnou k naplnění účelu
                zpracování. Kontaktní a obchodní údaje mohou být uchovávány:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>po dobu komunikace,</li>
                <li>po dobu trvání obchodní spolupráce,</li>
                <li>
                  a následně nejdéle 3 roky od posledního kontaktu, pokud právní předpisy nevyžadují
                  delší uchování.
                </li>
              </ul>
              <p className="mt-3">
                Údaje související s účetními a daňovými povinnostmi mohou být uchovávány po dobu
                stanovenou příslušnými právními předpisy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                6. Příjemci a zpracovatelé osobních údajů
              </h2>
              <p className="mt-3">
                K osobním údajům mohou mít přístup externí spolupracovníci správce, kteří se
                podílejí na technické realizaci projektů, správě webů, vývoji nebo komunikaci se
                zákazníky. Jedná se zejména o:
              </p>
              <p className="mt-3">
                Jiří Novák
                <br />
                IČO: 23584726
                <br />
                Zapsán v živnostenském rejstříku vedeném Magistrátem města Brna
              </p>
              <p className="mt-3">
                a případně další externí freelance spolupracovníky nebo technické subdodavatele.
              </p>
              <p className="mt-3">
                Tyto osoby mají přístup pouze k údajům nezbytným pro výkon své činnosti a jsou
                zavázány zachovávat důvěrnost informací.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Služby třetích stran</h2>
              <p className="mt-3">
                Správce využívá při provozu webu a komunikaci některé externí služby třetích stran,
                zejména:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Cal.com – rezervační a kontaktní formulář,</li>
                <li>poskytovatele hostingu,</li>
                <li>poskytovatele e-mailových služeb,</li>
                <li>případně analytické nebo technické nástroje související s provozem webu.</li>
              </ul>
              <p className="mt-3">
                Při využití těchto služeb může docházet ke zpracování osobních údajů třetími stranami
                dle jejich vlastních podmínek ochrany osobních údajů.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Předávání údajů mimo EU</h2>
              <p className="mt-3">
                Některé využívané služby mohou ukládat nebo zpracovávat data mimo Evropskou unii,
                zejména v USA.
              </p>
              <p className="mt-3">
                V takových případech správce využívá pouze služby, které poskytují odpovídající
                úroveň ochrany osobních údajů v souladu s GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                9. Zabezpečení osobních údajů
              </h2>
              <p className="mt-3">
                Správce přijal přiměřená technická a organizační opatření k zabezpečení osobních
                údajů proti neoprávněnému přístupu, ztrátě, zneužití nebo neoprávněnému zveřejnění.
              </p>
              <p className="mt-3">
                Přístupy k osobním údajům jsou omezeny pouze na osoby, které je potřebují pro výkon
                své činnosti.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">10. Práva subjektů údajů</h2>
              <p className="mt-3">Máte právo:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>požadovat přístup ke svým osobním údajům,</li>
                <li>požadovat opravu nepřesných údajů,</li>
                <li>požadovat výmaz osobních údajů,</li>
                <li>požadovat omezení zpracování,</li>
                <li>vznést námitku proti zpracování,</li>
                <li>požadovat přenositelnost údajů,</li>
                <li>podat stížnost u Úřadu pro ochranu osobních údajů.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">11. Cookies</h2>
              <p className="mt-3">
                Web může využívat technické nebo analytické cookies nezbytné pro správné fungování
                webových stránek a souvisejících služeb.
              </p>
              <p className="mt-3">
                Pokud budou používány marketingové nebo nepovinné cookies, bude uživatel požádán o
                odpovídající souhlas prostřednictvím cookies lišty.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">12. Kontakt</h2>
              <p className="mt-3">
                V případě dotazů ohledně zpracování osobních údajů můžete správce kontaktovat na:
                support@webneo.pro
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">13. Závěrečná ustanovení</h2>
              <p className="mt-3">
                Tyto zásady mohou být průběžně aktualizovány nebo upravovány.
              </p>
              <p className="mt-3">
                Aktuální verze je vždy dostupná na webové stránce www.webneo.pro
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
