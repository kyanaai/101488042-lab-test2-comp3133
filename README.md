# 101488042-lab-test2-comp3133

## App Description
This project is an Angular HTTP Client application built for Lab Test 2 in COMP3133.

The application uses a public Harry Potter API to fetch and display Harry Potter-related data, including characters and spells. Users can search characters by name, filter characters by house, view detailed information for each character, and search spells by name.

---

## Features Implemented
- Angular standalone application
- Angular HttpClient used for API integration
- Display Harry Potter characters (name, house, image)
- Character search by name
- Filter characters by house
- Character details page (with full information)
- Display Harry Potter spells
- Search spells by name
- Uses Angular signals
- Uses Angular control flow syntax:
  - `@for`
  - `@if`
  - `@switch`
- Angular routing (multiple pages)
- Angular Material UI components (cards, inputs, select, buttons)
- Modular structure with:
  - service
  - models/interfaces
  - multiple components
- Basic responsive CSS styling

---

## API Used
Public Harry Potter API:  
https://hp-api.onrender.com/

- Characters endpoint  
- Characters by house endpoint  
- Character by ID endpoint  
- Spells endpoint  

---

## Components
- `CharacterfilterComponent`
- `CharacterListComponent`
- `CharacterDetailsComponent`
- `SpellListComponent`

---

## Project Structure
- `models/character.ts`
- `models/spell.ts`
- `services/harry-potter.ts`
- `components/characterfilter`
- `components/character-list`
- `components/characterdetails`
- `components/spell-list`
- `pages/home`

---

## Screenshots

### 1. Running Application
![alt text](<Screenshot 2026-04-08 at 6.51.10 PM.png>)
![alt text](<Screenshot 2026-04-08 at 6.09.19 PM.png>)
### 2. Character Search and House Filter
![alt text](<Screenshot 2026-04-08 at 6.52.09 PM.png>)

### 3. Spell Search
![alt text](<Screenshot 2026-04-08 at 6.11.10 PM.png>)
### 4. Character Details
![alt text](<Screenshot 2026-04-08 at 6.52.18 PM.png>)
---

## Instructions to Run

```bash
# 1. Clone the repository
git clone https://github.com/kyanaai/101488042-lab-test2-comp3133

# 2. Navigate into the project folder
cd 101488042-lab-test2-comp3133

# 3. Install dependencies
npm install

# 4. Run the application
ng serve
```
## Vercel
https://101488042-lab-test2-comp3133.vercel.app/