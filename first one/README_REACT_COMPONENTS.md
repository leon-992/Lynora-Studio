# React/JSX Komponenten für Framer

Diese React-Komponenten sind für die Verwendung in Framer Code Components vorbereitet.

## 📁 Dateistruktur

```
components/
├── App.jsx              # Hauptkomponente (kombiniert alle Sections)
├── Navigation.jsx       # Navigation Bar
├── Hero.jsx             # Hero Section
├── Services.jsx         # Services Section
├── Portfolio.jsx        # Portfolio Section
├── Contact.jsx          # Contact Section
├── Footer.jsx           # Footer Section
└── BackgroundEffects.jsx # Hintergrund-Effekte (Particles & Glows)
```

## 🚀 Verwendung in Framer

### Option 1: Einzelne Komponenten verwenden

1. Öffne Framer
2. Gehe zu **Code Components**
3. Erstelle eine neue Code Component
4. Kopiere den Inhalt einer Komponente (z.B. `Hero.jsx`)
5. Füge die Komponente in dein Design ein

### Option 2: Komplette App verwenden

1. Kopiere den Inhalt von `App.jsx`
2. Erstelle eine neue Code Component in Framer
3. Füge den Code ein
4. Die App rendert alle Sections

## 📝 Wichtige Hinweise

### Assets
- **Bilder**: Die Portfolio-Bilder verwenden relative Pfade:
  - `Hoffmann & Valten Hero.PNG`
  - `Farbora Malerbetrieb.PNG`
  - `CryptoDemoProject Hero.PNG`
  
  Stelle sicher, dass diese Bilder in Framer hochgeladen sind und die Pfade korrekt sind.

### Fonts
- Die Komponenten verwenden **Google Fonts (Inter)**
- Der Font wird automatisch in `App.jsx` geladen
- Falls du einen anderen Font verwenden möchtest, ändere die `fontFamily` in den Style-Objekten

### Styling
- Die Komponenten verwenden **Inline Styles** (React Style Objects)
- CSS-Klassen werden für Animationen verwendet
- Alle Animationen sind in `App.jsx` definiert

### Responsive Design
- Die Komponenten sind responsive
- Breakpoints werden über Media Queries in `App.jsx` definiert
- Mobile Navigation wird automatisch bei `max-width: 768px` aktiviert

## 🎨 Anpassungen

### Farben ändern
Ändere die Farbwerte in den Style-Objekten:
```jsx
const textStyle = {
  color: 'rgba(255, 255, 255, 0.7)', // Hier ändern
  // ...
};
```

### Inhalte anpassen
- **Services**: Bearbeite das `services` Array in `Services.jsx`
- **Portfolio**: Bearbeite das `portfolioItems` Array in `Portfolio.jsx`
- **Kontakt-Email**: Ändere `contact@studio.com` in `Contact.jsx`

## 🔧 Framer-spezifische Anpassungen

### Props hinzufügen
Füge Props hinzu, um Inhalte in Framer editierbar zu machen:

```jsx
const Hero = ({ title, subtitle }) => {
  // Verwende title und subtitle Props
  return (
    <h1>{title || 'Default Title'}</h1>
  );
};
```

### Framer Controls
Füge Controls für bessere Framer-Integration hinzu:

```jsx
import { addPropertyControls, ControlType } from 'framer';

addPropertyControls(Hero, {
  title: {
    type: ControlType.String,
    defaultValue: 'Elevating brands through digital clarity.'
  }
});
```

## 📦 Dependencies

Die Komponenten benötigen nur **React** - keine weiteren Dependencies!

```jsx
import React from 'react';
```

## ✨ Features

- ✅ Vollständig responsive
- ✅ Smooth Scrolling
- ✅ Intersection Observer für Scroll-Animationen
- ✅ Hover-Effekte
- ✅ Form-Handling
- ✅ Mobile Menu Toggle
- ✅ Scroll Progress Indicator
- ✅ Parallax-Effekte
- ✅ Glassmorphism Design

## 🐛 Troubleshooting

### Bilder werden nicht angezeigt
- Stelle sicher, dass die Bilder in Framer hochgeladen sind
- Überprüfe die Pfade in `Portfolio.jsx`
- Verwende absolute URLs falls nötig

### Fonts werden nicht geladen
- Überprüfe die Internetverbindung
- Stelle sicher, dass Google Fonts erreichbar ist
- Alternativ: Lade Inter Font lokal hoch

### Animationen funktionieren nicht
- Stelle sicher, dass die CSS-Keyframes in `App.jsx` vorhanden sind
- Überprüfe die Browser-Kompatibilität

## 📄 Lizenz

Diese Komponenten sind für dein Projekt erstellt. Du kannst sie frei verwenden und anpassen.

