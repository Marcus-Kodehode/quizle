# 🎉 Quizle – Lær og lek med Quizzi!

**Quizle** er en interaktiv og fargerik quiz-app utviklet for barn og unge. Lær om matte, historie, geografi og dyr (enn så lenge) gjennom morsomme og engasjerende spørsmål – med min maskot **Quizzi** som guide! 🦊

---

## 🚀 Teknologier brukt

- **Vue 3** + `<script setup>`
- **Vite** – rask utviklingsserver
- **Tailwind CSS** – for moderne styling
- **Vue Router** – for navigasjon
- **Pinia (valgfritt)** – for state management (hvis aktuelt)
- **Custom komponentstruktur** – lett å vedlikeholde og utvide

---

## 🧱 Struktur

```
src/
│
├── assets/             # Bilder, ikoner, videoer osv.
├── components/         # Gjenbrukbare UI-komponenter (f.eks. Header, CategoryCard)
├── views/              # Sider som HomeView, CategoryView osv.
├── router/             # Vue Router-konfigurasjon
└── App.vue             # Root-komponent
```

---

## 📦 Installasjon

1. **Klon repoet**

```bash
git clone https://github.com/ditt-brukernavn/quizle.git
cd quizle
```

2. **Installer avhengigheter**

```bash
npm install
```

3. **Start utviklingsserver**

```bash
npm run dev
```

4. **Åpne i nettleser**

```bash
http://localhost:5173
```

---

## 📱 Mobiltilpasning

Quizle er responsiv og mobilvennlig. På små skjermer vises en hamburgermeny som åpner en skjermdekkende overlay med navigasjon og kategori-dropdown.

---

## 🌈 Funksjoner

- 🎥 Videobasert velkomst (IntroHero)
- 🔢 Kategorier med bilder og beskrivelse
- 📚 Flere quiz-kategorier (Matte, Geografi, Historie, Dyr)
- 🔽 Dropdown i meny for hurtignavigasjon
- 🧭 Smooth scroll til seksjoner
- 📱 Fullskjerm overlay-meny på mobil

---

## ✅ TODO / Videre utvikling

- [ ] Brukerinnlogging og poengsystem
- [ ] Resultatside med poeng og medaljer
- [ ] Flere quizkategorier
- [ ] Flerspråklig støtte (norsk/engelsk)

---

## 🧠 Bidra

Har du forslag, forbedringer eller ønsker å bidra? Lag gjerne en issue eller en pull request!

---

## © Lisens

MIT License – fritt å bruke, endre og dele videre.

---

_“One bug to find them, one fix to bring them all, and in the darkness bind them.”_  
**– Marcus Børresen**
