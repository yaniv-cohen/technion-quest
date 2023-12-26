export function getPath(pathName: string): Path | null {
  return data.find((path) => path.id === pathName) ?? null;
}

const data: Path[] = [
  {
    name: "Technion Admission",
    instituteId: "1",
    id: "1",
    tree: [
      {
        steps: [
          {
            id: "1",
            type: "normalStep",
            name: "fill form",
            text: "fill your details here",
          },
        ],
      },
    ],
  },
  {
    name: "Driver's license",
    instituteId: "4",
    id: "4",
    tree: [
      {
        name: "בירוקרטיה",
        steps: [
          {
            id: "1",
            type: "normalStep",
            name: "בקשה להוצאת רישיון נהיגה",
            text: "מלא את הפרטים שלך באתר הממשלתי",
            links: [
              {
                title: "Request in government website website",
                url: "https://govforms.gov.il/mw/forms/RishumTheory@mot.gov.il",
              },
            ],
          },
          {
            id: "2",
            type: "normalStep",
            name: "בדיקת ראייה והפקת תמונה",
            text: `גשו לאופטומטריסט להיבדק ולהצטלםד`,
            links: [
              {
                title: "הסבר באתר הממשלתי",
                url: "https://www.gov.il/he/service/apply_for_new_driver_drivers_license",
              },
              {
                title: "Request in government website website",
                url: "https://govforms.gov.il/mw/forms/RishumTheory@mot.gov.il",
              },
            ],
          },
        ],
      },
      {
        name: "תאוריה",
        steps: [
          {
            id: "1",
            type: "normalStep",
            name: "רישום לבחינת תאוריה",
            text: "מלא את הפרטים שלך באתר הממשלתי",
            links: [
              {
                title: "מידע באתר 'כל זכות'",
                url: "https://www.kolzchut.org.il/he/%D7%9E%D7%91%D7%97%D7%9F_%D7%A0%D7%94%D7%99%D7%92%D7%94_%D7%A2%D7%99%D7%95%D7%A0%D7%99_(%D7%AA%D7%99%D7%90%D7%95%D7%A8%D7%99%D7%94)",
              },
            ],
          },
          {
            id: "2",
            type: "normalStep",
            name: "ביצוע הבחינה",
            text: "יש להגיע עם תעודת זהות, אגרת מבחן משולמת ואישורים רופאויים להקלות",
          },
        ],
      },
      {
        name: "שיעורי נהיגה",
        steps: [
          {
            id: "1",
            type: "normalStep",
            name: "יצירת קשר עם מורה לנהיגה",
            text: "עדיף אחד מומלץ באזור שלך",
            links: [
              {
                title: "מורי נהיגה במידרג",
                url: "https://www.midrag.co.il/Content/SectorPortal/92",
              },
            ],
          },
          {
            id: "2",
            type: "normalStep",
            name: "לימוד 28 שיעורי נהיגה",
            text: "ייתכן השלב יתארך במידה והמוה לא חושב שאתם מוכנים",
          },
          {
            id: "3",
            type: "normalStep",
            name: "מעבר טסט פנימי",
            text: "מדמה טסט אמיתי",
          },
          {
            id: "4",
            type: "normalStep",
            name: "מעבר טסט",
            text: "למחוק",
          },
        ],
      },
    ],
  },
  {
    name: "Technion Admission",
    id: "3",
    instituteId: "1",
    tree: [
      {
        steps: [
          {
            id: "1",
            type: "normalStep",
            name: "fill form",
            text: "fill your details here",
            links: [
              {
                title: "הרשאה לחיוב חשבון בנק",
                url: "https://slimud.web.technion.ac.il/files/2014/02/---------------------.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "TAU Admission",
    id: "2",
    instituteId: "2",
    tree: [
      {
        steps: [
          {
            id: "1",
            type: "normalStep",
            name: "fill form",
            text: "Go to the technion website and download the file.",
            links: [{ url: "aa" }],
          },
        ],
      },
    ],
  },
];

export type Step = {
  name: string;
  type: "normalStep";
  id: string;
  links?: {
    title?: string;
    url: string;
  }[];
  text: string;
};
export type MultipleChoiceStep = {
  name: string;
  type: "multipleChoiceStep";
  id: string;
  links?: {
    title?: string;
    url: string;
  }[];
  text: string;
  options: Step[];
};
export type Path = {
  name: string;
  id: string;
  instituteId: string;
  tree: Tree[];
};

export type Tree = {
  name?: string;
  steps: (Step | MultipleChoiceStep)[];
};
