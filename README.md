# Web-Simple-Joke-Generator

**Web-Simple-Joke-Generator** is a simple and fun web application that fetches random jokes from an external API and displays them with an attractive front-end interface. This project is built using TypeScript, Express.js, and EJS for templating, with modern CSS animations and effects.

![Screenshot of the Application](https://i.imgur.com/aUMDZyY.png)

---

## 📂 Project Structure

```
├── package-lock.json
├── package.json
├── src
│   ├── index.ts            # Main TypeScript file
│   ├── public
│   │   └── css
│   │       └── style.css   # Styling for the application
│   └── views
│       └── index.ejs       # EJS template for rendering jokes
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Features

- Fetches jokes from the [JokeAPI](https://official-joke-api.appspot.com/).
- Supports both single-line and two-part jokes (setup & delivery).
- Modern animations using the [AOS](https://michalsnik.github.io/aos/) library.
- Responsive and clean design.

---

## 🛠️ Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thomasbarret/Web-Simple-Joke-Generator.git
   cd Web-Simple-Joke-Generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   - Build the TypeScript:
     ```bash
     npm run build
     ```
   - Start the server:
     ```bash
     npm start
     ```

4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000).

---

## 🖌️ Styling

The CSS for the project is located in `src/public/css/style.css`. It uses AOS for animations and is fully responsive.

---

## 🔧 Configuration

- API Endpoint: The app fetches jokes from `https://official-joke-api.appspot.com/`. You can change this URL in `src/index.ts` if needed.