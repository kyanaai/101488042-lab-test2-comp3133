# 101488042-lab-test2-comp3133

## App Description
This project is an Angular HTTP Client application built for Lab Test 2 in COMP3133.

The application uses a public Harry Potter API to fetch and display Harry Potter-related data, including characters and spells. Users can search characters by name, filter characters by house, and search spells by name.

## Features Implemented
- Angular standalone application
- Angular HttpClient used for API integration
- Search characters by name
- Filter characters by house
- Display Harry Potter spells
- Search spells by name
- Uses Angular signals
- Uses Angular control flow syntax:
  - `@for`
  - `@if`
  - `@switch`
- Modular structure with:
  - service
  - models/interfaces
  - multiple components
- Basic responsive CSS styling

## API Used
Public Harry Potter API:
- Characters endpoint
- Spells endpoint

## Components
- `SearchFilterComponent`
- `CharacterListComponent`
- `SpellListComponent`

## Project Structure
- `models/character.ts`
- `models/spell.ts`
- `services/harry-potter.ts`
- `components/search-filter`
- `components/character-list`
- `components/spell-list`

## Screenshots

### 1. Running Application
![alt text](<Screenshot 2026-04-08 at 6.09.07 PM.png>)
![alt text](<Screenshot 2026-04-08 at 6.09.19 PM.png>)

### 2. Character Search and House Filter
![alt text](<Screenshot 2026-04-08 at 6.10.08 PM.png>)
![alt text](<Screenshot 2026-04-08 at 6.10.26 PM.png>)
### 3. Spell Search
![alt text](<Screenshot 2026-04-08 at 6.11.10 PM.png>)


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

## Vercel 
https://101488042-lab-test2-comp3133.vercel.app