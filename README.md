<!-- Custom-Documentation.mdx -->

# Simple documentation with `MDX` content

This file is a documentation in `MDX` which serves as a project guide, with some examples in code and tools used.

It can be used in future projects.


## Tools

Tools used in the construction of the design system.

- [Vite](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Google Fonts](https://fonts.google.com/)

### Start with Vite

NPM commands
```
npm create vite@latest
```

Insert the project name, select the framework you want to use and at the end select JS or TS language.

After that load the packages with
```
npm i
```

### Tailwind CSS

Install as development dependency
```
npm i -D tailwindcss postcss autoprefixer
```
After installing start the tailwind with
```
npx tailwindcss init -p
```
In the file tailwind.conf.cjs put the path to the files that will have the css like

```
modulo.exports = {
  content: [
    './src/**/*.tsx',
   ]
}
```
*it is recommended to have two extensions installed "Tailwind CSS Intellisense" and "PostCSS".

Create a new file 'styles/global.css' and add the css Tailwind directives.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Storybook

Use the command line to install
```
npx sb init --builder @storybook/builder-vite --use-npm
```
After you've created your first stories you can use the command
to start the storybook locally
```
npm start storybook
```
*it is recommended to have a extensions installed "MDX".

More documentation or necessary settings you can find in the start or project link developed.
