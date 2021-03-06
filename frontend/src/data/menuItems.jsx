export const items = (history, isLogin, userType) => [
  {
    label: "Modele",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "Wszystkie",
        icon: "pi pi-fw pi-plus",
        command: (e) => history.push("models"),
      },
      {
        label: "Gry",
        icon: "pi pi-fw pi-trash",
        command: (e) => history.push("games"),
      },
      {
        label: "Jedzenie",
        icon: "pi pi-fw pi-external-link",
        command: (e) => history.push("food"),
      },
    ],
  },
  isLogin && {
    label: "Profil",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "Zamowienia",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Informacje",
        icon: "pi pi-fw pi-user-minus",
        command: (e) => history.push("profile"),
      },
    ],
  },
  {
    label: "Kontakt",
    icon: "pi pi-fw pi-calendar",
    command: (e) => history.push("contact"),
  },
  isLogin &&
    userType > 1 && {
      label: "Statystyki",
      icon: "pi pi-fw pi-calendar",
      command: (e) => history.push("stats"),
    },
];
