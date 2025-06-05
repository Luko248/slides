<!-----



Conversion time: 0.996 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β44
* Thu May 15 2025 05:16:27 GMT-0700 (PDT)
* Source doc: CSS scroll-driven animace
* This is a partial selection. Check to make sure intra-doc links work.
----->

**CSS scroll-driven animace: Revoluce webových animací bez JavaScriptu**

**Zapomeňte na knihovny jako ScrollReveal, AOS nebo Scroll Magic! Moderní CSS je hravě strčí do kapsy.**

**CSS prochází velkou změnou.** Nástroj, který dlouhé roky sloužil jen na „barvičky, fonty, odsazení či layout“ pro naše weby a aplikace, se postupně transformuje na plnohodnotný jazyk pro tvorbu vizuální logiky. Představa, že budeme moci vytvářet věci jako dynamické layouty, CSS vrstvy, konvertovat barvy do libovolných formátů či spustit webové animace na základě interakce a scrollování, byla donedávna sci-fi. A právě o těchto “scroll-driven” animacích si dnes povíme víc.

Web Animations API, které známe hlavně v podobě vlastností jako `transition`, `animation` či pravidla `@keyframes`, prošlo minulý rok velkým updatem. Co se CSS týče, bylo doplněno o nové vlastnosti, které nám umožňují vytvářet animace řízené scrollováním přímo v CSS.

**Přehled klíčových vlastností:**

- \*\*<code>scroll-timeline</code></strong>
- <strong><code>view-timeline</code></strong>
- <strong><code>animation-timeline</code></strong>
- <strong><code>animation-range</code></strong>
- <strong><code>view-timeline-inset</code></strong>
- <strong><code>timeline-scope</code></strong>

<strong>Začněme!</strong>

## **<code>scroll-timeline</code>: Definice časové osi scrollování**

Vlastnost `scroll-timeline` slouží k definování tzv. "časové osy scrollování". Tato časová osa sleduje průběh scrollování elementu (nazývaného scroller) od jeho horního okraje ke spodnímu nebo od levého k pravému okraji.

`scroll-timeline` je zkratka pro `scroll-timeline-name` a `scroll-timeline-axis`.

Důležité: `scroll-timeline` sama o sobě animaci nespustí. Použití je možné pouze v kombinaci s `animation-timeline`!

Podvlastnosti:

- `scroll-timeline-name`: Název časové osy. Používáme tzv. `dashed-ident` zápis (začíná na `--`), který známe z CSS custom properties. Je to řetězec, který slouží jako identifikátor.
- `scroll-timeline-axis`: Osa scrollování (`x`, `y`, `inline`, `block`). `inline` a `block` jsou logické osy, které respektují směr písma.

**Příklady:**

```
css
@keyframes fadeIn {
  to { opacity: 1; }
}

.container {
  scroll-timeline: --my-scroll-timeline y; /* Zkratka */
}

.animated-element {
  opacity: 0;
  animation: fadeIn linear; /* Definice animace */
  animation-timeline: --my-scroll-timeline; /* Přiřazení časové osy */
}
```

**Ekvivalentní zápis (bez zkratky):**

```
css
.container {
  scroll-timeline-name: --my-scroll-timeline;
  scroll-timeline-axis: y;
}
```

## **<code>view-timeline</code>: Sledování viditelnosti elementu**

Vlastnost `view-timeline` slouží k definování tzv. "časové osy viditelnosti". Tato časová osa sleduje změnu viditelnosti elementu (subject) uvnitř scrollovatelného kontejneru (scroller).

`view-timeline` je zkratka pro `view-timeline-name` a `view-timeline-axis`.

Stejně jako u `scroll-timeline`: `view-timeline` sama o sobě nic neudělá. Potřebuje `animation-timeline`!

Podvlastnosti:

- `view-timeline-name`: Název časové osy (používáme `dashed-ident`).
- `view-timeline-axis`: Osa sledování viditelnosti (`x`, `y`, `inline`, `block`).

**Příklady:**

```
css
@keyframes slideIn {
  from { translate: -100% 0; }
  to { translate: 0 0; }
}

.animated-element {
  translate: -100% 0; /* Počáteční pozice mimo obrazovku */
  view-timeline: --my-view-timeline block; /* Zkratka */
  animation: slideIn ease-out;
  animation-timeline: --my-view-timeline;
}
```

**Ekvivalentní zápis (bez zkratky):**

```
css
.animated-element {
  view-timeline-name: --my-view-timeline;
  view-timeline-axis: block;
}
```

## **<code>animation-timeline</code>: Zodpovědná za spuštění animace**

Určitě jste si všimli, že v předcházejících ukázkách kódu byla vždy přítomná vlastnost `animation-timeline`. Je to proto, že bez ní by scroll-driven animace jednoduše nefungovaly! Tato vlastnost spojuje animaci s definovanou časovou osou (scroll nebo view).

Možnosti:

- Pojmenovaná časová osa: Použijeme název definovaný v `scroll-timeline-name` nebo `view-timeline-name`. Název musí být ve formátu `dashed-ident` (začínat na `--`).
- Anonymní časová osa: Použijeme funkce `scroll()` nebo `view()`.

Rozdíl mezi pojmenovanou a anonymní osou:

- Pojmenovaná osa: Vhodná pro komplexnější animace, kde potřebujeme opakovaně použít tutéž časovou osu.
- Anonymní osa: Rychlé řešení pro jednoduché animace, kde nepotřebujeme sdílet časovou osu.

**Příklady:**

```
css
.element {
  animation-timeline: --my-scroll-timeline; /* Pojmenovaná scroll timeline */
  animation-timeline: view(); /* Anonymní view timeline */
}
```

**Funkce <code>scroll()</code> a <code>view()</code>:**

Tyto funkce umožňují přímé připojení animace k scrollování nebo viditelnosti bez toho, abychom museli definovat pojmenovanou časovou osu.

Příklady:

```
css
.element {
  animation-timeline: scroll(y); /* Animace řízená vertikálním scrollováním */
  animation-timeline: view(inline); /* Animace řízená viditelností (inline osa) */
}
```

## **<code>animation-range</code>: Nastavení hranic přehrávání animace**

`animation-range` umožňuje určit, v jakém rozsahu časové osy se má animace přehrát. To znamená, že můžete přesně definovat, kdy se animace začne a skončí, vzhledem k průběhu scrollování nebo viditelnosti elementu.

`animation-range` je zkratka pro:

- `animation-range-start`
- `animation-range-end`

Klíčové hodnoty pro `animation-range-start` a `animation-range-end`:

- `normal`: Výchozí hodnota, animace se přehraje od začátku do konce časové osy.
- `entry`: Animace začne, když element vstupuje do viewportu.
- `exit`: Animace skončí, když element opouští viewport.
- `contain`: Animace se přehraje, jen když je element úplně uvnitř viewportu.
- `cover`: Animace se přehraje, jen když element pokrývá celý viewport.
- číselné hodnoty: Přesné hodnoty časové osy, které mohou být definovány v procentech (`0%`, `50%`, `100%`), viewportových jednotkách (`10svw`, `50svb`) nebo statických jednotkách (`10rem`, `20px`).

**Příklady:**

```
css
.element {
  animation-timeline: view();
  animation-range: entry contain;
}

.element {
  animation-timeline: scroll(y);
  animation-range: 20% 80%;
}

.element {
  animation-timeline: scroll(y);
  animation-range: 10rem 50vh;
}
```

## **<code>view-timeline-inset</code>: Nastavení offsetu časové osi viditelnosti**

`view-timeline-inset` umožňuje upravit hranice, kdy se element považuje za viditelný. Tímto způsobem můžete dosáhnout plynulejších přechodů a animací, které reagují na příchod elementu do viewportu ještě předtím, než je fyzicky viditelný. Jinými slovy, můžete nastavit offset, o který se posune začátek a konec přehrávání animace.

`view-timeline-inset` podporuje jednu nebo dvě hodnoty:

- jedna hodnota: Nastaví offset z obou stran.
- dvě hodnoty: Nastaví offset pro začátek a konec časové osi viditelnosti.

Kombinace s `animation-range` :

`view-timeline-inset` se dá kombinovat s `animation-range` pro ještě větší kontrolu nad animací. Můžete tak nastavit offset detekce viditelnosti a zároveň definovat přesný bod, kdy se má animace spustit.

Příklady:

```
css
.element {
  view-timeline: --my-view-timeline block;
  view-timeline-inset: -50px; /* Animace začne o 50px dříve, než je element viditelný */
  animation-timeline: --my-view-timeline;
  animation-range-start: entry;
}

.element {
  view-timeline: --my-view-timeline block;
  view-timeline-inset: 10px 20px; /* 10px na začátku, 20px na konci */
  animation-timeline: --my-view-timeline;
}
```

**Rozdíl mezi <code>animation-range</code> a <code>view-timeline-inset</code>:**

- `animation-range` definuje, _v jakém rozsahu časové osy se má animace přehrávat_. Je to jako kdybyste nastavili začátek a konec filmu.
- `view-timeline-inset` definuje, _kdy se element považuje za viditelný, což ovlivňuje celou časovou osi viditelnosti_. Je to jako kdybyste posunuli kameru, abyste viděli element dříve nebo později.

## **<code>timeline-scope</code>: Sdílení časových os**

`timeline-scope` umožňuje sdílet časovou osou mezi elementy. Tato vlastnost otevírá nové možnosti pro vytváření komplexních a synchronizovaných animací. Představte si například situaci, kdy chcete animovat vlastnosti rodičovského elementu v závislosti na tom, jak se scrolluje v jeho potomkovi. S `timeline-scope` je to možné!

Jak to funguje?

1. Definujete časovou osu (například `scroll-timeline`) na potomkovi.
2. Použijete `timeline-scope` na rodičovském elementu a přiřadíte mu název časové osy potomka.
3. Teď můžete animovat vlastnosti rodičovského elementu s použitím časové osy potomka!

**Příklad:**

```
css
.parent {
  timeline-scope: --scroll-timeline-child; /* Rodič sdílí časovou osu potomka */
  animation: scaleUp linear;
  animation-timeline: --scroll-timeline-child;
}

.child {
  scroll-timeline: --scroll-timeline-child y; /* Potomek definuje časovou osu */
}

@keyframes scaleUp {
  to { scale: 1.2; }
}
```

V tomto příkladu se rodičovský element zvětší (scaleUp animace) v závislosti na tom, jak se scrolluje v potomkovi.

Kdy použít `timeline-scope`?

- Pokud chcete animovat vlastnosti rodičovského elementu na základě aktivity v potomkovi (například scrollování, viditelnost).
- Pokud chcete vytvářet komplexní a synchronizované animace mezi více elementy.
- Při vytváření layoutů, kde je potřeba synchronizace animací mezi různými částmi stránky.

**Závěr:**

CSS scroll-driven animace představují mocný nástroj pro tvorbu moderních a interaktivních webových stránek. S novými vlastnostmi, jako jsou `scroll-timeline`, `view-timeline`, `animation-range` a `timeline-scope`, můžete vytvářet úžasné animace bez nutnosti používat JavaScript. Vyzkoušejte si je a posuňte své webové projekty na novou úroveň!

**Poznámka pro uživatele Firefoxu**

Pro správné fungování scroll-driven animací je momentálně potřeba doplnit do definice animovaného elementu i vlastnost `animation-duration` s hodnotou např. `1ms`. Jinak animace nemusí fungovat správně.

**Poznámka pro uživatele Safari**

Zatím není podporováno.
