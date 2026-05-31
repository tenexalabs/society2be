const stateKeys = {
  incidents: "society2be.incidents",
  suggestions: "society2be.suggestions",
  language: "society2be.language"
};

const statuses = [
  "Not picked",
  "Selected",
  "In progress",
  "Done",
  "Blocked",
  "Need vendor involvement",
  "Need residents help"
];

const contacts = [
  { name: "Emergency Society Helpline", role: "Super urgent connect", category: "Urgent", phone: "+91-7417210470", email: "vivek.skillup@gmail.com" },
  { name: "Security Main Gate", role: "Visitor entry and security help", category: "Security", phone: "+91-9000000001" },
  { name: "Maintenance Office", role: "Common area maintenance", category: "Staff", phone: "+91-9000000002" },
  { name: "Electrician Desk", role: "Electrical repair support", category: "Electrician", phone: "+91-9000000003" },
  { name: "Plumber Desk", role: "Water leakage and plumbing", category: "Plumbing", phone: "+91-9000000004" },
  { name: "Housekeeping Supervisor", role: "Cleaning and waste management", category: "Housekeeping", phone: "+91-9000000005" },
  { name: "Maid Verification Help", role: "Maid and domestic help records", category: "Maid", phone: "+91-9000000006" },
  { name: "Tower Representative A", role: "Tower A resident coordination", category: "Tower representative", phone: "+91-9000000007" },
  { name: "Tower Representative B", role: "Tower B resident coordination", category: "Tower representative", phone: "+91-9000000008" }
];

const translations = {
  en: {
    tagline: "A house of 2100 families",
    navMission: "Mission",
    navContacts: "Contacts",
    navIncidents: "Incidents",
    navSuggestions: "Suggestions",
    navGuidance: "Guidance",
    urgentWhatsapp: "Urgent WhatsApp",
    heroEyebrow: "Resident-first society coordination",
    heroTitle: "Society2Be: a clear path toward an ideal society.",
    heroCopy: "Find trusted contacts, raise incidents, track work status, share suggestions, and build a practical culture of responsibility for 2100 families.",
    raiseIncident: "Raise Incident",
    findContact: "Find Contact",
    families: "Families",
    openTickets: "Open tickets",
    urgentHelp: "Urgent help",
    missionEyebrow: "Mission and vision",
    missionTitle: "A society where every problem has a visible owner and every resident has a voice.",
    missionOneTitle: "Transparent action",
    missionOneText: "Incidents are logged, tracked, and visible so residents do not have to chase the same update repeatedly.",
    missionTwoTitle: "Respectful participation",
    missionTwoText: "Suggestions are collected by topic so committees, tower representatives, staff, and residents can work from one shared picture.",
    missionThreeTitle: "Practical self-help",
    missionThreeText: "Important contacts, urgent channels, and guidance are kept easy to find, especially for elders and new families.",
    contactsEyebrow: "Directory",
    contactsTitle: "Important contacts",
    searchContacts: "Search staff, tower, electrician, maid...",
    incidentsEyebrow: "Help desk",
    incidentsTitle: "Incident logging and public tracking",
    incidentsIntro: "Submit an issue to generate a tracking number. Authorized coordinators can update the status from the public board.",
    newIncident: "New incident",
    residentName: "Resident name",
    towerFlat: "Tower / flat",
    category: "Category",
    description: "Description",
    generateTicket: "Generate tracking no.",
    publicBoard: "Public incident board",
    resetDemo: "Reset demo data",
    suggestionsEyebrow: "Resident voice",
    suggestionsTitle: "Suggestions by society topic",
    suggestionsIntro: "Share constructive ideas on the recurring topics that every large society faces.",
    newSuggestion: "New suggestion",
    topic: "Topic",
    yourSuggestion: "Your suggestion",
    submitSuggestion: "Submit suggestion",
    guidanceEyebrow: "Path to better living",
    guidanceTitle: "Guidance posts for society problems",
    postOneTitle: "How to report problems clearly",
    postOneText: "Mention the exact location, photo evidence if available, safety risk, and whether the issue affects one flat, one tower, or the whole society.",
    postTwoTitle: "How residents can help committees",
    postTwoText: "Use one official channel, avoid duplicate complaints, give realistic response time, and volunteer when a topic needs resident support.",
    postThreeTitle: "How to build trust",
    postThreeText: "Publish status, explain delays, respect staff, close the loop after work is done, and keep decisions visible.",
    footerText: "For urgent support, connect through WhatsApp or email.",
    call: "Call",
    mail: "Email",
    noContacts: "No matching contacts found.",
    noIncidents: "No incidents yet. Raise the first issue to start tracking.",
    noSuggestions: "No suggestions yet. Add the first idea for the community.",
    status: "Status",
    update: "Update",
    ticketGenerated: "Tracking number generated:",
    suggestionSaved: "Suggestion saved for residents and committee review."
  },
  hi: {
    tagline: "2100 परिवारों का घर",
    navMission: "मिशन",
    navContacts: "संपर्क",
    navIncidents: "शिकायतें",
    navSuggestions: "सुझाव",
    navGuidance: "मार्गदर्शन",
    urgentWhatsapp: "तुरंत WhatsApp",
    heroEyebrow: "निवासी पहले, समाज साथ",
    heroTitle: "Society2Be: आदर्श समाज की स्पष्ट राह।",
    heroCopy: "भरोसेमंद संपर्क खोजें, शिकायत दर्ज करें, काम की स्थिति देखें, सुझाव दें और 2100 परिवारों के लिए जिम्मेदारी की संस्कृति बनाएं।",
    raiseIncident: "शिकायत दर्ज करें",
    findContact: "संपर्क खोजें",
    families: "परिवार",
    openTickets: "खुले टिकट",
    urgentHelp: "तुरंत सहायता",
    missionEyebrow: "मिशन और विजन",
    missionTitle: "ऐसा समाज जहां हर समस्या का जिम्मेदार दिखे और हर निवासी की आवाज सुनी जाए।",
    missionOneTitle: "पारदर्शी कार्रवाई",
    missionOneText: "शिकायतें दर्ज, ट्रैक और सार्वजनिक रहें ताकि निवासियों को बार-बार अपडेट के लिए पीछा न करना पड़े।",
    missionTwoTitle: "सम्मानजनक भागीदारी",
    missionTwoText: "सुझाव विषय के अनुसार जमा हों ताकि समिति, टावर प्रतिनिधि, स्टाफ और निवासी एक ही तस्वीर पर काम करें।",
    missionThreeTitle: "व्यावहारिक सहायता",
    missionThreeText: "महत्वपूर्ण संपर्क, तत्काल चैनल और मार्गदर्शन आसान रहें, खासकर बुजुर्गों और नए परिवारों के लिए।",
    contactsEyebrow: "डायरेक्टरी",
    contactsTitle: "महत्वपूर्ण संपर्क",
    searchContacts: "स्टाफ, टावर, इलेक्ट्रिशियन, मेड खोजें...",
    incidentsEyebrow: "हेल्प डेस्क",
    incidentsTitle: "शिकायत लॉग और सार्वजनिक ट्रैकिंग",
    incidentsIntro: "समस्या जमा करें और ट्रैकिंग नंबर पाएं। अधिकृत समन्वयक सार्वजनिक बोर्ड से स्थिति बदल सकते हैं।",
    newIncident: "नई शिकायत",
    residentName: "निवासी का नाम",
    towerFlat: "टावर / फ्लैट",
    category: "श्रेणी",
    description: "विवरण",
    generateTicket: "ट्रैकिंग नंबर बनाएं",
    publicBoard: "सार्वजनिक शिकायत बोर्ड",
    resetDemo: "डेमो डेटा रीसेट",
    suggestionsEyebrow: "निवासी आवाज",
    suggestionsTitle: "समाज विषयों पर सुझाव",
    suggestionsIntro: "बड़े समाज में बार-बार आने वाले विषयों पर रचनात्मक विचार साझा करें।",
    newSuggestion: "नया सुझाव",
    topic: "विषय",
    yourSuggestion: "आपका सुझाव",
    submitSuggestion: "सुझाव जमा करें",
    guidanceEyebrow: "बेहतर जीवन की राह",
    guidanceTitle: "समाज समस्याओं के लिए मार्गदर्शन पोस्ट",
    postOneTitle: "समस्या साफ तरीके से कैसे बताएं",
    postOneText: "सटीक जगह, उपलब्ध फोटो, सुरक्षा जोखिम और समस्या एक फ्लैट, टावर या पूरे समाज को प्रभावित करती है या नहीं, यह बताएं।",
    postTwoTitle: "निवासी समिति की मदद कैसे करें",
    postTwoText: "एक आधिकारिक चैनल का उपयोग करें, डुप्लिकेट शिकायत से बचें, उचित समय दें और जरूरत पर स्वयंसेवा करें।",
    postThreeTitle: "विश्वास कैसे बनाएं",
    postThreeText: "स्थिति प्रकाशित करें, देरी समझाएं, स्टाफ का सम्मान करें, काम पूरा होने पर जानकारी दें और निर्णय साफ रखें।",
    footerText: "तत्काल सहायता के लिए WhatsApp या ईमेल से जुड़ें।",
    call: "कॉल",
    mail: "ईमेल",
    noContacts: "कोई मेल खाता संपर्क नहीं मिला।",
    noIncidents: "अभी कोई शिकायत नहीं है। पहली समस्या दर्ज करें।",
    noSuggestions: "अभी कोई सुझाव नहीं है। समुदाय के लिए पहला विचार जोड़ें।",
    status: "स्थिति",
    update: "अपडेट",
    ticketGenerated: "ट्रैकिंग नंबर बना:",
    suggestionSaved: "सुझाव निवासियों और समिति की समीक्षा के लिए सेव हो गया।"
  }
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function currentLanguage() {
  return localStorage.getItem(stateKeys.language) || "en";
}

function t(key) {
  return translations[currentLanguage()][key] || translations.en[key] || key;
}

function applyLanguage(language) {
  localStorage.setItem(stateKeys.language, language);
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translations[language][node.dataset.i18n] || node.textContent;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = translations[language][node.dataset.i18nPlaceholder] || node.placeholder;
  });
  renderContacts();
  renderIncidents();
  renderSuggestions();
}

function seedIncidents() {
  const existing = readJson(stateKeys.incidents, null);
  if (existing) return existing;
  const sample = [
    {
      id: "S2B-2100-1001",
      name: "Demo Resident",
      location: "B-804",
      category: "Lift",
      description: "Lift display is not working in Tower B.",
      status: "In progress",
      createdAt: new Date().toISOString()
    }
  ];
  writeJson(stateKeys.incidents, sample);
  return sample;
}

function renderContacts() {
  const grid = document.getElementById("contactGrid");
  const query = document.getElementById("contactSearch").value.trim().toLowerCase();
  const filtered = contacts.filter((contact) => {
    return [contact.name, contact.role, contact.category, contact.phone, contact.email]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
  grid.innerHTML = "";
  if (!filtered.length) {
    grid.innerHTML = `<p class="empty-state">${t("noContacts")}</p>`;
    return;
  }
  filtered.forEach((contact) => {
    const card = document.createElement("article");
    card.className = "contact-card";
    card.innerHTML = `
      <span class="pill">${contact.category}</span>
      <strong>${contact.name}</strong>
      <span>${contact.role}</span>
      <div class="contact-actions">
        ${contact.phone ? `<a href="tel:${contact.phone.replaceAll("-", "")}">${t("call")}</a>` : ""}
        ${contact.phone ? `<a href="https://wa.me/${contact.phone.replace(/\D/g, "")}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
        ${contact.email ? `<a href="mailto:${contact.email}">${t("mail")}</a>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderIncidents() {
  const list = document.getElementById("incidentList");
  const incidents = readJson(stateKeys.incidents, []);
  const openCount = incidents.filter((incident) => incident.status !== "Done").length;
  document.getElementById("incidentMetric").textContent = openCount;
  list.innerHTML = "";
  if (!incidents.length) {
    list.innerHTML = `<p class="empty-state">${t("noIncidents")}</p>`;
    return;
  }
  incidents
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((incident) => {
      const card = document.createElement("article");
      card.className = "incident-card";
      card.innerHTML = `
        <div class="incident-head">
          <span class="ticket">${incident.id}</span>
          <span class="pill">${incident.category}</span>
        </div>
        <h3>${incident.location}</h3>
        <p>${incident.description}</p>
        <p><strong>${incident.name}</strong></p>
        <div class="status-row">
          <label>
            <span>${t("status")}</span>
            <select data-ticket="${incident.id}">
              ${statuses.map((status) => `<option ${status === incident.status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </label>
          <button class="secondary-btn" type="button" data-update="${incident.id}">${t("update")}</button>
        </div>
      `;
      list.appendChild(card);
    });
}

function renderSuggestions() {
  const list = document.getElementById("suggestionList");
  const suggestions = readJson(stateKeys.suggestions, []);
  list.innerHTML = "";
  if (!suggestions.length) {
    list.innerHTML = `<p class="empty-state">${t("noSuggestions")}</p>`;
    return;
  }
  suggestions
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((suggestion) => {
      const card = document.createElement("article");
      card.className = "suggestion-card";
      card.innerHTML = `
        <span class="pill">${suggestion.topic}</span>
        <p>${suggestion.message}</p>
      `;
      list.appendChild(card);
    });
}

function createTicketNumber() {
  const next = Date.now().toString().slice(-6);
  return `S2B-2100-${next}`;
}

document.getElementById("languageSelect").addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

document.getElementById("contactSearch").addEventListener("input", renderContacts);

document.getElementById("incidentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const incident = {
    id: createTicketNumber(),
    name: form.get("name").trim(),
    location: form.get("location").trim(),
    category: form.get("category"),
    description: form.get("description").trim(),
    status: "Not picked",
    createdAt: new Date().toISOString()
  };
  const incidents = readJson(stateKeys.incidents, []);
  incidents.push(incident);
  writeJson(stateKeys.incidents, incidents);
  event.currentTarget.reset();
  document.getElementById("ticketNote").textContent = `${t("ticketGenerated")} ${incident.id}`;
  renderIncidents();
});

document.getElementById("incidentList").addEventListener("click", (event) => {
  const ticket = event.target.dataset.update;
  if (!ticket) return;
  const select = document.querySelector(`select[data-ticket="${ticket}"]`);
  const incidents = readJson(stateKeys.incidents, []).map((incident) => {
    if (incident.id === ticket) {
      return { ...incident, status: select.value };
    }
    return incident;
  });
  writeJson(stateKeys.incidents, incidents);
  renderIncidents();
});

document.getElementById("resetDemo").addEventListener("click", () => {
  localStorage.removeItem(stateKeys.incidents);
  seedIncidents();
  renderIncidents();
});

document.getElementById("suggestionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const suggestion = {
    topic: form.get("topic"),
    message: form.get("message").trim(),
    createdAt: new Date().toISOString()
  };
  const suggestions = readJson(stateKeys.suggestions, []);
  suggestions.push(suggestion);
  writeJson(stateKeys.suggestions, suggestions);
  event.currentTarget.reset();
  renderSuggestions();
});

seedIncidents();
document.getElementById("languageSelect").value = currentLanguage();
applyLanguage(currentLanguage());
