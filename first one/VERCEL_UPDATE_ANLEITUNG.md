# Website auf Vercel aktualisieren - Komplette Anleitung

## 🔍 Zuerst: Welche Methode hast du verwendet?

### Methode 1: Git verbunden (GitHub/GitLab/Bitbucket)
- Wenn du dein Projekt mit GitHub verbunden hast
- Automatische Deployments bei jedem Push

### Methode 2: Drag & Drop (Manuelles Upload)
- Wenn du die Dateien direkt hochgeladen hast
- Kein Git-Repository verbunden

---

## 🚀 Methode 1: Mit Git verbunden (EMPFOHLEN)

### Vorteile:
- ✅ Automatische Updates
- ✅ Version Control
- ✅ Einfache Zusammenarbeit

### Schritte:

#### 1. Lokale Dateien ändern
- Öffne deine Dateien lokal (z.B. `index.html`, `styles.css`)
- Mache deine Änderungen
- Speichere die Dateien

#### 2. Änderungen zu Git hinzufügen
```bash
# Im Terminal/Command Prompt in deinem Projektordner:
git add .
git commit -m "Website Updates"
git push
```

#### 3. Automatisches Deployment
- Vercel erkennt automatisch den Push
- Deploys die neue Version
- Fertig! (meist in 1-2 Minuten)

### Oder: GitHub Desktop verwenden (Einfacher!)

1. Öffne GitHub Desktop
2. Siehst du deine Änderungen? → Klicke "Commit"
3. Klicke "Push origin"
4. Vercel deployt automatisch

---

## 📤 Methode 2: Drag & Drop (Manuelles Upload)

### Wenn du die Dateien direkt hochgeladen hast:

#### Option A: Erneut hochladen (Einfachste Methode)

1. **Gehe zu Vercel Dashboard**
   - https://vercel.com/dashboard
   - Logge dich ein

2. **Finde dein Projekt**
   - Klicke auf dein Projekt

3. **Neues Deployment**
   - Klicke auf "Deployments" Tab
   - Oder: Gehe zurück zur Projektübersicht
   - Klicke "Add New..." → "Project"
   - Oder: Klicke auf dein Projekt → "Redeploy"

4. **Dateien hochladen**
   - Ziehe deinen aktualisierten Ordner in den Browser
   - Oder: Klicke "Browse" und wähle deinen Ordner
   - Warte bis Upload fertig ist

5. **Fertig!**
   - Neue Version ist live
   - Alte Version bleibt als Backup

#### Option B: Git verbinden (Für zukünftige Updates)

**Warum?**
- Einfacher für zukünftige Updates
- Automatische Deployments
- Version Control

**Schritte:**

1. **GitHub Repository erstellen**
   - Gehe zu https://github.com
   - Klicke "New repository"
   - Name: z.B. "my-website"
   - Klicke "Create repository"

2. **Dateien zu GitHub hochladen**
   - Lade alle deine Website-Dateien hoch
   - Oder: Verwende GitHub Desktop

3. **Vercel mit GitHub verbinden**
   - In Vercel: "Add New..." → "Project"
   - Wähle "Import Git Repository"
   - Wähle dein GitHub Repository
   - Klicke "Import"

4. **Zukünftige Updates**
   - Änderungen lokal machen
   - `git push` → Automatisches Deployment!

---

## 🎯 Schnellste Methode: Drag & Drop Update

### Schritt-für-Schritt:

1. **Öffne Vercel Dashboard**
   ```
   https://vercel.com/dashboard
   ```

2. **Finde dein Projekt**
   - Klicke auf dein Projekt

3. **Neues Deployment**
   - Klicke auf "Deployments" (oben)
   - Oder: Gehe zu Projekt-Einstellungen
   - Suche nach "Redeploy" oder "New Deployment"

4. **Alternative: Neues Projekt erstellen**
   - Wenn "Redeploy" nicht sichtbar:
   - Gehe zurück zur Dashboard-Übersicht
   - Klicke "Add New..." → "Project"
   - Ziehe deinen aktualisierten Ordner hoch
   - **WICHTIG:** Gleichen Projektnamen verwenden!
   - Oder: Altes Projekt löschen und neu erstellen

5. **Dateien hochladen**
   - Ziehe deinen gesamten Website-Ordner in den Browser
   - Warte bis Upload und Deployment fertig ist

6. **Fertig!**
   - Neue Version ist live
   - Prüfe die URL

---

## 🔄 Beste Methode: Git einrichten (Für zukünftige Updates)

### Warum Git verwenden?

- ✅ Einfache Updates (nur `git push`)
- ✅ Automatische Deployments
- ✅ Version History
- ✅ Kein manuelles Hochladen mehr nötig

### Einrichtung (Einmalig):

#### 1. GitHub Repository erstellen
```
1. Gehe zu github.com
2. Klicke "New repository"
3. Name: "my-website"
4. Klicke "Create repository"
```

#### 2. Dateien zu GitHub hochladen

**Option A: GitHub Desktop (Einfachste Methode)**
1. Installiere GitHub Desktop: https://desktop.github.com
2. Öffne GitHub Desktop
3. "File" → "Add Local Repository"
4. Wähle deinen Website-Ordner
5. "Publish repository"
6. Fertig!

**Option B: Terminal/Command Line**
```bash
# Im Terminal in deinem Projektordner:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/dein-username/my-website.git
git push -u origin main
```

#### 3. Vercel mit GitHub verbinden
1. In Vercel Dashboard: "Add New..." → "Project"
2. Klicke "Import Git Repository"
3. Wähle dein GitHub Repository
4. Klicke "Import"
5. Vercel verbindet automatisch

#### 4. Zukünftige Updates
```bash
# Änderungen lokal machen
# Dann:
git add .
git commit -m "Update website"
git push
# Vercel deployt automatisch!
```

---

## 📝 Schritt-für-Schritt: Jetzt sofort updaten

### Wenn du Git NICHT verwendest:

1. **Öffne Vercel Dashboard**
   - https://vercel.com/dashboard

2. **Finde dein Projekt**
   - Klicke auf den Projektnamen

3. **Neues Deployment**
   - Klicke auf "Deployments" Tab
   - Oder: Suche nach "Redeploy" Button
   - Oder: Gehe zurück und erstelle neues Projekt mit gleichem Namen

4. **Dateien hochladen**
   - Mache deine Änderungen lokal
   - Ziehe den gesamten Ordner in Vercel
   - Warte bis Deployment fertig ist

5. **Fertig!**
   - Neue Version ist live

---

## ⚡ Schnellste Lösung (JETZT):

### Option 1: Drag & Drop (2 Minuten)

1. Gehe zu: https://vercel.com/dashboard
2. Klicke auf dein Projekt
3. Klicke "Deployments" → "Redeploy"
   - ODER: "Add New..." → "Project" → Ordner hochziehen
4. Ziehe deinen aktualisierten Ordner hoch
5. Fertig!

### Option 2: Git einrichten (Für zukünftige Updates)

1. Erstelle GitHub Repository
2. Lade Dateien hoch (GitHub Desktop)
3. Verbinde Vercel mit GitHub
4. Zukünftig: `git push` → Automatisches Update!

---

## 🎯 Empfehlung

**Für jetzt:**
- Drag & Drop Update (schnellste Methode)

**Für die Zukunft:**
- Git einrichten (einfacher für Updates)

---

## ❓ Häufige Fragen

### "Wo finde ich den Redeploy Button?"
- Im Projekt-Dashboard
- Oder: "Deployments" Tab → "Redeploy"
- Oder: Erstelle einfach neues Projekt mit gleichem Namen

### "Muss ich das alte Projekt löschen?"
- Nein, du kannst mehrere Deployments haben
- Neuestes ist automatisch live
- Alte bleiben als Backup

### "Wie lange dauert ein Update?"
- Meist 1-2 Minuten
- Bei Git: Automatisch nach Push
- Bei Drag & Drop: Nach Upload

### "Kann ich Änderungen testen bevor sie live gehen?"
- Ja! Vercel erstellt Preview-Deployments
- Jedes Deployment hat eigene URL
- Teste bevor du live gehst

---

## ✅ Checkliste für Updates

- [ ] Änderungen lokal gemacht und getestet
- [ ] Alle Dateien gespeichert
- [ ] Vercel Dashboard geöffnet
- [ ] Neues Deployment gestartet
- [ ] Dateien hochgeladen
- [ ] Deployment abgeschlossen
- [ ] Website getestet (neue URL)

---

## 🚀 Nächste Schritte

1. **Jetzt:** Drag & Drop Update machen
2. **Später:** Git einrichten für einfachere Updates
3. **Zukunft:** Nur noch `git push` für Updates!

