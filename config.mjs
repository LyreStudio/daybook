export default {
  "id": "daybook",
  "name": "Daybook",
  "subtitle": "Make room for a thoughtful day.",
  "description": "A quiet place for daily plans, useful notes and ideas worth keeping.",
  "section": "Notes",
  "singular": "note",
  "color": "#a76737",
  "soft": "#f8eddc",
  "icon": "▤",
  "fields": [
    [
      "name",
      "Title",
      "text"
    ],
    [
      "category",
      "Notebook",
      "select",
      [
        "Daily plans",
        "Ideas",
        "Reading",
        "Personal"
      ]
    ],
    [
      "status",
      "Pin",
      "select",
      [
        "Unpinned",
        "Pinned"
      ]
    ],
    [
      "date",
      "Date",
      "date"
    ],
    [
      "notes",
      "Your note",
      "textarea"
    ]
  ],
  "samples": [
    [
      "A little space to think",
      "Daily plans",
      "Pinned",
      "2026-09-10",
      "Start with one meaningful thing.\n\n• Finish the first draft\n• Walk outside after lunch\n• Leave the desk ready for tomorrow\n\nProgress can be quiet."
    ],
    [
      "The studio I want to build",
      "Ideas",
      "Pinned",
      "2026-09-09",
      "Warm materials, useful objects, thoughtful software.\n\nA place where good work feels natural, and there is always room to experiment."
    ],
    [
      "On paying attention",
      "Reading",
      "Unpinned",
      "2026-09-08",
      "The best ideas often arrive when we stop looking for them. Keep a notebook nearby."
    ],
    [
      "Weekend possibilities",
      "Personal",
      "Unpinned",
      "2026-09-07",
      "Visit the farmers market. Make something slowly. Call an old friend."
    ],
    [
      "Small things, done well",
      "Ideas",
      "Unpinned",
      "2026-09-06",
      "A clear label. A helpful empty state. A button exactly where you expect it.\n\nDetails are how we show that we care."
    ],
    [
      "Friday reflection",
      "Daily plans",
      "Unpinned",
      "2026-09-05",
      "What worked: protecting the morning for focused work.\n\nNext week: fewer meetings, more making."
    ]
  ]
};
