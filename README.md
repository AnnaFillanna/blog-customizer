# Projektarbeit: Umsetzung des Layouts

## Projekt lokal ansehen

Voraussetzung: Node.js und npm sind installiert.

Das Repository herunterladen und den Entwicklungsserver starten:

```sh
git clone https://github.com/AnnaFillanna/blog-customizer.git
cd blog-customizer
npm install
npm start
```

Anschließend das [Projekt im Browser öffnen](http://localhost:5180/).
Die Adresse funktioniert nur auf deinem Computer, solange der Entwicklungsserver läuft.
Der feste Port 5180 verhindert Verwechslungen mit anderen lokalen Projekten.
Falls dieser Port belegt ist, beende zuerst den dort laufenden Server.
Mit `Strg + C` kannst du den Server beenden.

## Schritt 1: Die vorhandenen Komponenten kennenlernen

[Projektentwurf](https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown?type=design&node-id=0%3A1&mode=design&t=eXRJnWC6Xsuw0qR4-1)

Storybook starten:

```sh
npm run storybook
```

Den Style-Linter ausführen:

```sh
npm run stylelint
```

Die Linter ausführen:

```sh
npm run lint
```

Den Formatierer ausführen:

```sh
npm run prettier
```

### Funktionale Anforderungen

- Ein Klick auf den Pfeil öffnet die Seitenleiste mit den Einstellungen. Ein erneuter Klick oder ein Klick außerhalb schließt sie wieder.
- Änderungen in der Seitenleiste werden nicht sofort übernommen.
- Nach einem Klick auf „Anwenden“ werden die ausgewählten Stile auf den Artikel angewendet.
- Ein Klick auf „Zurücksetzen“ setzt die Formulareinstellungen auf die ursprünglichen Werte beim Öffnen der Seite zurück und wendet diese auf den Artikel an.
- Die Einstellungen werden über die vorhandenen CSS-Variablen gesteuert, die im Code mit Standardwerten vorbelegt sind.

## Schritt 2: Das Formular implementieren

Überlege dir vor der Implementierung:

- wie die Komponenten zusammengesetzt werden,
- wo der Zustand gespeichert wird,
- wie Daten zwischen dem Formular und der Seite übergeben werden.

Implementiere zunächst das Öffnen und Schließen der Formularleiste. Anschließend kannst du ihren Zustand vorübergehend über eine Prop festlegen, um die weitere Umsetzung zu erleichtern.

Setze danach das Formular anhand des Entwurfs mit den vorhandenen Komponenten um.

## Schritt 3: Die Datenübergabe zwischen Formular und Seite umsetzen

Verwalte den Zustand der Seite und den Zustand des Formulars getrennt. Übernimm den neuen Zustand erst nach einem Klick auf „Anwenden“.
