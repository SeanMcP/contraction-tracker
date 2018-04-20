# Contraction Tracker

A simple way to keep track of your contractions during labor

## Reasoning

When my wife went into labor with our first child, she was using a contraction tracker that was included in a pregnancy suite app on her phone. Through those hours, the app's tracker was helpful but was missing some pretty critical features.

Contraction Tracker seeks to remedy that situation by including a full set of features that pregnant women and their partners need during the excitement of labor.

## About

### Utilizing
- React
- Moment.js

### Features
- Track contractions easily, if not painlessly
- List contractions in chronological or reverse-chronological order
- Rank the pain of each contraction on a scale of 0 to !!!
- Delete accidental entries

### To-do
- Format time to be more user friendly
  - Split frequency calculation by ':', then manipulate string to humanize
- Break out Row component into functional components
- Styling
- Add style buttons at the top
- Add manifest.json
- Create logo and favicon

### Considerations
- Rating system options:
  - Ow Ow Ow
  - Exclamation mark: ❗
  - Lightning bolts: ⚡ or 🌩
  - Emoji: 🙁 😣 😩 (Clear?)
- Time difference format should be:
  - Less than one minute: 33.2s
  - More than one minute: 2m 33s
  - More than one hour: 1h 2m
- Flash notification when frequency is at certain point (change color)

### Bugs
- *crickets*
