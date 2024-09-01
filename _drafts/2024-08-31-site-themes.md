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

(This is just context; if you only want the tutorial, just scroll down to "tutorial time").

When I upgraded my portfolio website from version 2 to 3, I was focused on keeping things simple.

Version 2 was styled with lots of empty space and a focus on flair -- I divided the website into screens, where first you'd see by name (and a small intro) in a big font, then down to who I was, then what I've done, then contact.





## tutorial time

This tutorial will make a barebones application just to see how the theme functionality is implemented. You could probably do it in an existing project -- up to you.

### setup

There's three files you'll need to have:

- `index.html`
- `styles.css`
- `palettes.js`

Create them all in the same folder.

#### `index.html`

Add stuff to your `index.html` so you can see what happens when you change your CSS.

You can have whatever content you like -- slap on an unordered list, a few header tags; doesn't really matter. Just have something.

```html
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Palette Testing</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>welcome to my website!!!</h1>
  <h2>favourite overwatch characters</h2>
  <ul>
    <li>rein</li>
    <li>juno</li>
    <li>ana</li>
    <li>sigma</li>
  </ul>
  <p>no criticism allowed</p>
  <script src="palettes.js"></script>
</body>
```

#### `styles.css`

We'll be using CSS variables (custom properties) to define our initial styling, storing everything inside `:root`[^root_css]

```css
:root {
  --font-family: "Manrope", "Open Sans", sans-serif;
  --color-text: #FFFFFF;
  --color-bg: rgba(6,16,24,1);
}

body {
  background: var(--color-bg);
}

h1, h2, li, p, {
  font-family: var(--font-family);
  color: var(--color-text);
}
```

[^root_css]: The `:root` element represents the root of the document, which is always the `html` element. It's used to store CSS variables as it's the "highest" scope in the document, allowing everything else to access them. (The variables *cascade* down? I think that's correct?)

It's worth noting that once the theme functionality has been implemented, these values are intended to be fully overridden when the page is loaded. I would just set these as whatever default look you want your website to have, then implement that in the theme system later on.

Probably not really needed, but I suppose it would useful if someone had JavaScript disabled (and wouldn't be able to load any themes).

#### `palettes.js`

Create the file.

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

Having our `themes` dictionary is all nice and well, but we actually need a way to *use* it.

Create a function that takes a string representing a key from the `themes` dictionary, then set the CSS variables defined within `:root`.

```javascript
const setTheme = (theme) => {
  const data = themes[theme];
  const root = document.querySelector(':root');

  root.style.setProperty("--font-family", data.fontFamily);
  root.style.setProperty("--color-text",  data.colorText );
  root.style.setProperty("--color-bg",    data.colorBg   );
};
```

### swapping themes

We have themes, and a way to set them, but *when* do we set them?

The easiest option is whenever you load the page, so let's do that first. Call the `setTheme` function when the page is fully loaded:

```javascript
addEventListener("DOMContentLoaded", () => {
  setTheme("midnight");
});
```

This code can go anywhere, but I would personally put it at the top of the JavaScript file.

If you change the argument value, you'll be able to see how your themes look. This is fine for bug testing, but there's still no way to switch the theme as a regular user.

We'll add some buttons to choose between the different themes.

```html
<button id="theme_midnight">midnight</button>
<button id="theme_terminal">terminal</button>
<button id="theme_sunset"  >sunset  </button>
```

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

Then, update your `DOMContentLoaded` handler to load from local storage, then set the theme with the value retrieved.

```javascript
addEventListener("DOMContentLoaded", () => {
  // remove this line of code
  // setTheme("midnight");

  const themeOnLoad = localStorage.getItem("theme_on_load") || "midnight";
  setTheme(themeOnLoad);

  // ... omitted ...
});
```

> NOTE: I'm using a trick where `themeOnLoad` will be set to a default value (`"midnight"`) if the local storage value is falsy. If the user has never clicked a button, `getItem("theme_on_load")` will return null, which is considered a falsy value, setting `themeOnLoad` to `"midnight"`.

If you've finished implementing that, your themes should be working!

## considerations

Themes are relatively trivial to implement if you're just changing a few colours, but you can effectively modify *any* CSS property, granted that you have a CSS variable for it. It's already hard enough trying to your website look good with *one* theme, so the complexity scales up a lot more with a bunch to manage.

I have a portfolio website with multiple themes, and they're pretty ridiculous:

```javascript
const themes = {
  "midnight": {
    "fontFamily"       : '"Manrope", "Poppins", "Open Sans", sans-serif',
    "colorTextTitle"   : "#EEEEEE",
    "colorTextHeader"  : "#B9E7E9",
    "colorTextSupport" : "#85A7A8",
    "colorText"        : "#C2C7C7",
    "svgFilter"        : "invert(97%) sepia(3%) " +
                         "saturate(54%) hue-rotate(165deg) " +
                         "brightness(116%) contrast(76%)",
    "colorBg"          : "linear-gradient(233deg, " +
                         "rgba(1,2,8,1) 0%, " +
                         "rgba(4,14,24,1) 11%, " +
                         "rgba(5,17,19,1) 33%, " +
                         "rgba(6,16,24,1) 48%, " +
                         "rgba(6,12,20,1) 67%, " +
                         "rgba(6,9,22,1) 87%, " + 
                         "rgba(3,9,22,1) 100%)",
    "colorBgHeader"    : "rgba(0, 0, 0, 0)",
    "glassBg"          : "rgba(255, 255, 255, 0.02)",
    "selectionText"    : "#000000",
    "selectionBg"      : "rgb(122, 255, 252)",
    "particleOptions"  : {
      selector: '.background',
      color: "#1d3243",
      connectParticles: true,
      speed: 0.1,
      maxParticles: 100,
      minDistance: 120,
      responsive: [
        {
          breakpoint: 1200,
          options: {
            maxParticles: 100,
          },
        },
        {
          breakpoint: 768,
          options: {
            maxParticles: 40,
          },
        },
        {
          breakpoint: 576,
          options: {
            maxParticles: 0,
          },
        },
      ],
      }
  },
// ... other themes omitted ...
}
```

And that's just *one* theme.

Q: What is `particleOptions`?

A: I have cool particles generated in the background of my page. It acts as a config file between the different themes.

Q: `particleOptions` isn't a CSS property.

A: *True,* but it *is* used different across different themes. That's sort of my whole point -- the complexity of your website design goes up with each new property you want to be able to modify. Once you start modifying layout is when things start becoming awkward.

For anything beyond having a few colour swaps, or even just a dark/light theme, themes are mostly a pain.

But, y'know -- they're super cool. So I like them.

## demonstration

If you want to see my portfolio in action, you can check it out here:

<https://rovidecena.com/>

If you don't care about the animations and just want to see the styles, here are some images:



<hr />

## footnotes



