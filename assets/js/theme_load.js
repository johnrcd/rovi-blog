const root = document.querySelector(':root');

const init_theme_load = () => {
    const themeOnLoad = localStorage.getItem("theme_on_load") || "supergray"
    if (themeOnLoad in themes) {
        setTheme(themeOnLoad);
    }
    else {
        const message = 
            "Attempted to load theme " + themeOnLoad + ", but no theme was " +
            "present."
        console.log(message);
    }
}

// note: don't put ;'s at the end of the values -- it doesn't apply the css
const themes = {
    "supergray": {
        "colorText"          : "#EEEEEE",
        "colorTextFocus"     : "#B9E7E9",
        "colorAccent"        : "#C2C7C7",
        "colorBg"            : "#05070A",
        "colorTextHighlight" : "#05070A",
        "colorBgHighlight"   : "#05070A",
    },
}

Object.freeze(themes);

const setTheme = (theme) => {
    const themeData = themes[theme];

    root.style.setProperty("--color-text",         themeData.colorText       );
    root.style.setProperty("--color-text-focus",   themeData.colorTextFocus  );
    root.style.setProperty("--color-accent",       themeData.colorAccent     );
    root.style.setProperty("--color-bg",           themeData.colorBg         );

    root.style.setProperty("--color-text-highlight", themeData.colorTextHighlight);
    root.style.setProperty("--color-bg-highlight",   themeData.colorBgHighlight  );

    localStorage.setItem("theme_on_load", theme);
};

addEventListener("DOMContentLoaded", () => {init_theme_load();});