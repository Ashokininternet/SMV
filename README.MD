A responsive website for **S.M.V. Government Model Higher Secondary School, Thiruvananthapuram**, Kerala.

## Features

- Responsive school website built with HTML, CSS, and JavaScript
- Bootstrap 5 components and Bootstrap Icons
- About, academics, administration, departments, and facilities sections
- News, announcements, achievements, and student-life pages
- Searchable portal content
- Photo gallery with category filters
- Interactive navigation and mobile menu
- Google Maps integration
- School image placeholder generator

## Pages

- `index.html` — Home
- `about.html` — About the school
- `academics.html` — Academic streams and information
- `administration.html` — Administration
- `departments.html` — Subject departments
- `student-life.html` — Student activities
- `facilities.html` — Campus facilities
- `achievements.html` — School achievements
- `news.html` — News and announcements
- `gallery.html` — Photo gallery
- `contact.html` — Contact and location

## Technologies

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- Google Maps Embed

## Local Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/pssreejith-dev/SMV.git
   cd SMV
   ```

2. Open `index.html` directly in a browser, or start a local server:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

## Generating Placeholder Images

The repository includes a Node.js script for creating SVG placeholder images:

```bash
node generate-placeholders.js
```

Generated placeholder assets are saved under `images/` and `images/gallery/`.

## Project Structure

```text
SMV/
├── css/
│   └── styles.css
├── images/
│   └── gallery/
├── js/
│   ├── main.js
│   └── school-data.js
├── *.html
└── generate-placeholders.js
```

## Live Demo

The repository is published through GitHub Pages:

- https://pssreejith-dev.github.io/SMV/

## Contact

**S.M.V. Government Model Higher Secondary School**  
MG Road, Overbridge, Thiruvananthapuram, Kerala 695001

- Phone: 0471 2338180
- Email: smvghsstrivandrum@yahoo.co.in

## License

No license has been specified for this repository.