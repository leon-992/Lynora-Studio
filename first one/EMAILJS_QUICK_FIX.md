# EmailJS Fehlerbehebung - Schnellhilfe

## Problem: "Entschuldigung, es gab einen Fehler beim Senden"

Dieser Fehler tritt auf, weil noch nicht alle erforderlichen IDs konfiguriert sind.

## Lösung in 3 Schritten:

### Schritt 1: Service ID finden

1. Gehen Sie zu: [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Klicken Sie auf **"Email Services"** im linken Menü
3. Sie sehen Ihre Services. Die **Service ID** beginnt mit `service_` (z.B. `service_abc123`)
4. **Kopieren Sie diese Service ID**

### Schritt 2: Template ID finden

1. Gehen Sie zu: [https://dashboard.emailjs.com/admin/template](https://dashboard.emailjs.com/admin/template)
2. Klicken Sie auf **"Email Templates"** im linken Menü
3. Sie sehen Ihre Templates. Die **Template ID** beginnt mit `template_` (z.B. `template_xyz789`)
4. **Kopieren Sie diese Template ID**

### Schritt 3: IDs in script.js eintragen

1. Öffnen Sie `script.js` in Ihrem Projekt
2. Finden Sie diese Zeilen (ca. Zeile 371-372):

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // Hier Ihre Service ID eintragen
const templateID = 'YOUR_TEMPLATE_ID';    // Hier Ihre Template ID eintragen
```

3. Ersetzen Sie:
   - `YOUR_SERVICE_ID` → Ihre Service ID (z.B. `service_abc123`)
   - `YOUR_TEMPLATE_ID` → Ihre Template ID (z.B. `template_xyz789`)

**Beispiel nach der Änderung:**
```javascript
const serviceID = 'service_abc123';      // Ihre echte Service ID
const templateID = 'template_xyz789';    // Ihre echte Template ID
```

## Wichtig: Template erstellen (falls noch nicht geschehen)

Falls Sie noch kein Template erstellt haben:

1. Gehen Sie zu: [https://dashboard.emailjs.com/admin/template](https://dashboard.emailjs.com/admin/template)
2. Klicken Sie auf **"Create New Template"**
3. Verwenden Sie diese Einstellungen:

**Subject:**
```
Neue Kontaktanfrage von {{from_name}}
```

**Content:**
```
Neue Nachricht von Ihrer Website:

Name: {{from_name}}
Email: {{from_email}}

Nachricht:
{{message}}

---
Diese Nachricht wurde über das Kontaktformular gesendet.
```

4. Klicken Sie auf **"Save"**
5. Kopieren Sie die Template ID

## Fehlerprüfung

Nach der Konfiguration:

1. Öffnen Sie die Browser-Konsole (F12 → Console)
2. Versuchen Sie das Formular zu senden
3. Wenn ein Fehler auftritt, sehen Sie die genaue Fehlermeldung in der Konsole

## Häufige Fehler:

### "Invalid Public Key"
- Überprüfen Sie, ob die Public Key korrekt ist
- Gehen Sie zu: Account → General → Public Key

### "Service not found"
- Service ID ist falsch
- Stellen Sie sicher, dass die Service ID mit `service_` beginnt

### "Template not found"
- Template ID ist falsch
- Stellen Sie sicher, dass die Template ID mit `template_` beginnt
- Überprüfen Sie, ob das Template gespeichert wurde

### "Service is not active"
- Gehen Sie zu Email Services
- Stellen Sie sicher, dass Ihr Service aktiviert ist

## Noch Probleme?

1. Öffnen Sie die Browser-Konsole (F12)
2. Versuchen Sie das Formular zu senden
3. Kopieren Sie die Fehlermeldung aus der Konsole
4. Diese hilft bei der weiteren Fehlersuche

