---
layout:   post
title:    "tutorial: selectable themes"
date:     2024-08-31 00:20:00 -0600
tags:     tutorial code code
category: tutorials

description: "colour palettes, and a little bit more"
toc: true
# date_edited: 2024-02-07 19:06:00 -0600
---



For websites

During the summer, I overhauled my portfolio website. Version 2 (the previous design) of my website was focused on style -- a small amount of content with a large amount of flair. When I wrote that code, I thought it was pretty cool (and I still do!), but if you simply want to know *who* I am, and what I can do as a software developer, it wasn't super helpful.

So, I wanted to change that.

I spent a week quickly making the new design -- focused on simplicitiy, compactness, and all the information.

This overhaul was all thanks to Johans, who proceeded to call my website "mid" which made me spend a bunch of time overhauling it

## tutorial time

This tutorial will be demonstrated with the most barebones code possible, written for a single-page static website.

Recommended that you start a new project.

There's three files you'll need to juggle between:

- `index.html`
- `styles.css`
- `palettes.js`

Recommended that they're all in the same folder, but they don't technically have to be.

Your page can have whatever content you like -- slap on an unordered list, a few header tags; doesn't really matter. Just have something.

```html
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Palette Testing</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Content goes here... -->
  <script src="palettes.js"></script>
</body>
```

### choose your complexity

First things first -- how powerful do you want these themes to be?

The reason why this is a *theme* tutorial and not a *colour palette* tutorial is that you can completely redesign a website if you want to. For my portfolio website, I initially wanted to just have a simple colour palette as a fun little bonus, but I ended up having over a dozen of different variables that a theme could tweak.

It's up to you how much you want each theme to stand out, but you can always start basic, and scale it up as you develop the website.

For this tutorial, I'll be using three different CSS variables.
- `font-family`,
- `color`,
- and `background-color`.

```css
:root {
  --font-family: "Manrope", "Open Sans", sans-serif;
  --color-text: #FFFFFF;
  --color-bg: rgba(6,16,24,1);
}
```

Slap them into the `:root:` psuedo-class, as it'll be available to be used for your CSS.

### theme storage and retrieval

We'll be keeping themes directly stored within JavaScript. Create a dictionary with some themes in this format:

```javascript
const themes = {
  "midnight": {
    "fontFamily" : '"Manrope", sans-serif',
    "colorText"  : "#C2C7C7",
    "colorBg"    : "rgba(6,16,24,1)",
  },
  "terminal": {
    "fontFamily" : '"IBM Plex Mono", monospace',
    "colorText"  : "#C2C7C7",
    "colorBg"    : "#000",
  },
  "sunset": {
    "fontFamily" : '"Poppins", sans-serif',
    "colorText"  : "#FFFFFF",
    "colorBg"    : "rgba(75,19,79,1)",
  },
}
```

If you're just trying to get this to work, and you want to try using your own custom colours right away, just have one theme. You can add more later.

These values don't mean anything by themselves -- we'll need a way of using these themes and directly updating the page styling with them. We'll need to access the `:root` element, as that's where our variables are stored. 

Let's implement this functionality into a function called `setTheme`:

```javascript
const setTheme = (theme) => {
  const data = themes[theme];
  const root = document.querySelector(':root');

  root.style.setProperty("--font-family", data.fontFamily);
  root.style.setProperty("--color-text",  data.colorText );
  root.style.setProperty("--color-bg",    data.colorBg   );
};
```

We have themes, and a way to set them, but *when* do we set them?

The easiest option is whenever you load the page, so let's do that first.

Put this code at the top of your JavaScript file:

```javascript
addEventListener("DOMContentLoaded", () => {
  setTheme("midnight");
});
```

Nice, so now we can see the themes! If you change the string, you'll be able to see how your themes look.

### swapping themes

It's nice that we're able to edit the theme by changing what loads when the website refreshes, but that's not ideal for an end user, is it? We need to implement a system to allow visitors to change the site at the click of a button.

...so we'll need some buttons.

```html
<button id="theme_midnight">midnight</button>
<button id="theme_terminal">terminal</button>
<button id="theme_sunset"  >sunset  </button>
```

In your HTML file, add some buttons; one for each theme you have.

My example has all the themes prefixed with the string `theme_`, but that's up to you whether you want to do that -- I just felt weird not doing that given how all my theme names were regular words.

--

Update your `DOMContentLoaded` handler to have `click` event listeners for each theme button. In each handler, set the theme accordingly.

```javascript
addEventListener("DOMContentLoaded", () => {
  setTheme("midnight");

  document
    .getElementById("theme_midnight")
    .addEventListener("click", () => {
        setTheme("midnight")
    });

  document
    .getElementById("theme_terminal")
    .addEventListener("click", () => {
        setTheme("terminal")
    });

  document
    .getElementById("theme_sunset")
    .addEventListener("click", () => {
        setTheme("sunset")
    });
});
```

If you've coded it all correctly, this should be working now!

### user preferences

While theme swapping is fully functional at this point, it will go back to the default theme when the user refreshes. It would be nice to remember the theme the user had on last.

Update the `setTheme` function to write the user's current theme to local storage:

```javascript
const setTheme = (theme) => {
  const data = themes[theme];
  const root = document.querySelector(':root');

  root.style.setProperty("--font-family", data.fontFamily);
  root.style.setProperty("--color-text",  data.colorText );
  root.style.setProperty("--color-bg",    data.colorBg   );

  localStorage.setItem("theme_on_load", theme);
};
```

Then, update your `DOMContentLoaded` handler to load a theme.

```javascript
addEventListener("DOMContentLoaded", () => {
  // remove this line of code
  // setTheme("midnight");

  const themeOnLoad = localStorage.getItem("theme_on_load") || "midnight";
  setTheme(themeOnLoad);

  // ... omitted ...
});
```

`themeOnLoad` will equal `"midnight"` if `getItem("theme_on_load")` is falsy, (which it *will* be if `getItem` returns `""`). This makes `midnight` the default theme.




