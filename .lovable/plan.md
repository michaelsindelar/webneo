# Kompaktnější rozvržení, jednotná CTA a funkční kontakt

## Co upravím

- **Domovská stránka:** zmenším mezeru nad cenovou nabídkou na vyváženou hodnotu a dlaždice buď vrátím k původní kompaktnější výšce, nebo jejich stávající obsah opticky vycentruji. Nebudu přidávat další text jen kvůli zaplnění prostoru.
- **Tlačítka na tmavých bannerech:** konzultační CTA nastavím na čistě bílé s tmavě modrým textem; při najetí se pomalu promění na tmavě fialové s bílým textem a leskem. Tlačítka PREMIUM+ ponechám fialová a doplním jim stejný lesk.
- **PREMIUM+:** posunu obsah horního banneru výš a zredukuji nevyužitý prostor nad ním.
- **Reference:** přidám vedle konzultace tlačítko „Prohlédnout tvorbu“, které plynule odroluje k portfoliu. Portfolio změním na responzivní posuvník se stejnými breakpointy jako recenze: 1/2/3 položky, šipky a tažení myší či prstem. Mezery mezi portfoliem, recenzemi a konzultací stáhnu na minimum.
- **Úvodní navigace:** na domovskou stránku, Služby, O nás a Kontakt doplním viditelné druhé tlačítko odkazující na bezprostředně následující obsah.
- **O nás:** odstraním pasáž hodnot, nahradím ji stejným sliderem recenzí a výrazně stáhnu mezery mezi úvodem, přístupem, týmem, recenzemi a dalšími částmi.
- **Konzultace:** odstraním samostatnou podstránku `/konzultace`; kontaktní tlačítko povede přímo na rezervační část domovské stránky. Ostatní konzultační CTA už tento společný cíl používají.
- **Kontakt:** zmenším mezeru před častými dotazy a napojím formulář na bezplatný FormSubmit pro doručení na `michael.sindelar@webneo.pro`, včetně skutečného stavu odesílání, chybové hlášky a potvrzení. První doručení bude vyžadovat jednorázové potvrzení zprávy od FormSubmit v cílové schránce.

## Technické provedení

- Znovupoužiji společnou logiku carouselu pro portfolio, aby se ovládání shodovalo s recenzemi.
- Tlačítka pro posun obsahu budou používat existující prvky designu a přístupné popisky.
- Po odstranění cesty `/konzultace` upravím všechny odkazy a nechám směrování automaticky přegenerovat.
- FormSubmit bude odesílat přímo z kontaktního formuláře přes HTTPS bez placené služby; nebudou se ukládat žádná data na webu.
- Ověřím desktop i mobil, tažení slideru, cíle tlačítek, odstraněnou podstránku a odesílací stavy formuláře bez provedení skutečné testovací poptávky.
