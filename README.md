# Unibud.in

The only university buddy you will ever need.

## Tech Stack

- React+Typescript
- Vite as build tool
- Bootstrap 5 and custom styles

## Steps to run on local host

1. Install Node.js >= 20.9.0
2. Navigate to the Unibud pro directory: cd \*/unibud-pro
3. Run npm install
4. Run npm run dev /sudo npm run dev
5. Open http://localhost:5173/ in browser.
6. For backend
   - cd \*/unibud-pro/backend
   - npm run devstart (to start the backend server)
   - **remember to change directory when running npm commands for backend**
   - and also modify the vite.config.ts to the following:

```
    export default defineConfig({
      plugins: [react()],
        define: {
          "process.env.API_URL": `'http://localhost:5001'`,
        },
    });
```

## Folder/File structure guide

- assets -> contains logos, svgs
- src -> all code files
  - components -> resusable, common elements like Navbar, Footer etc.
  - pages -> all possible naivgation points of the application
  - util -> modules like PDF generator and ContextAPI file

If you want go through the project, start at package.json to see what dependencies are used then go to App.tsx and follow import statements as you go.

Custom styles are in the same folder as it's tsx file.

## Style Guide

1. We use camelCase (Words are delimited by capital letters, except the initial word) for variables generally.
2. For Interfaces, file names we use CamelCase (Words are delimited by capital letters).
3. And for contants we use UPPER CASE, and are preferably single word.
4. We consider ~50 lines per component that returns jsx, and ~100 characters in a line as good practice.
5. If you add a new .css file, you need to import it like others in index.css (We do this because we want to reuse styles that maybe in different files). Also make sure that your css classnames are unique in the whole project.
