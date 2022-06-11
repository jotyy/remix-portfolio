var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\PersonalProjects\my-portfolio\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_react13 = require("@chakra-ui/react");

// app/components/ui/Accent.tsx
init_react();
var import_react4 = require("@chakra-ui/react");

// app/components/ui/theme/index.ts
init_react();
var import_react2 = require("@chakra-ui/react");

// app/components/ui/theme/foundations/colors.ts
init_react();
var import_react = require("@chakra-ui/react");
var import_theme_tools = require("@chakra-ui/theme-tools");
var linkColors = {
  light: `accent.500`,
  dark: `accent.400`,
  visitedLight: `accent.300`,
  visitedDark: `accent.600`
};
function useLinkColor() {
  return (0, import_react.useColorModeValue)(linkColors.light, linkColors.dark);
}
function getTagBackgroundDark(accentKey, theme2) {
  return accentKey && (0, import_theme_tools.transparentize)(theme2.colors[accentKey][200], 0.1)(theme2);
}
var colors = __spreadProps(__spreadValues({}, import_react.theme.colors), {
  gray: __spreadProps(__spreadValues({}, import_react.theme.colors.gray), {
    1e3: `#121721`
  }),
  defaultAccent: {
    50: `#e3f2fc`,
    100: `#ddf2ff`,
    200: `#abd2fc`,
    300: `#5daafc`,
    400: `#1a85ff`,
    500: `#006be6`,
    600: `#0053b4`,
    700: `#003b82`,
    800: `#002451`,
    900: `#000d21`
  },
  accent: {
    50: `var(--colors-accent-50)`,
    100: `var(--colors-accent-100)`,
    200: `var(--colors-accent-200)`,
    300: `var(--colors-accent-300)`,
    400: `var(--colors-accent-400)`,
    500: `var(--colors-accent-500)`,
    600: `var(--colors-accent-600)`,
    700: `var(--colors-accent-700)`,
    800: `var(--colors-accent-800)`,
    900: `var(--colors-accent-900)`
  }
});
var accentKeys = [
  `defaultAccent`,
  `green`,
  `cyan`,
  `orange`,
  `blue`,
  `pink`,
  `teal`,
  `purple`,
  `red`
];

// app/components/ui/theme/index.ts
var import_utils = require("@chakra-ui/utils");
var import_theme_tools2 = require("@chakra-ui/theme-tools");
var extendedTheme = (0, import_react2.extendTheme)({
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  styles: {
    global: (props) => ({
      body: {
        color: (0, import_theme_tools2.mode)(`gray.700`, `whiteAlpha.900`)(props),
        bg: (0, import_theme_tools2.mode)(`gray.50`, `gray.900`)(props),
        fontSize: `1.2em`,
        ".deleted": {
          color: `#ff8383 !important`,
          fontStyle: `normal !important`
        },
        ".inserted": {
          color: `#b5f4a5 !important`,
          fontStyle: `normal !important`
        }
      },
      a: {
        color: (0, import_theme_tools2.mode)(`blue.500`, `blue.200`)(props),
        transition: `color 0.15s`,
        transitionTimingFunction: `ease-out`,
        fontWeight: `500`,
        _hover: {
          color: (0, import_theme_tools2.mode)(`blue.600`, `blue.300`)(props)
        }
      }
    })
  },
  components: {
    Popover: {
      parts: [`popper`],
      baseStyle: (props) => ({
        popper: {
          zIndex: 10,
          maxW: `xs`,
          w: props.width
        }
      })
    },
    Button: {
      baseStyle: {
        fontWeight: `500`,
        rounded: `xl`
      }
    },
    Tag: {
      baseStyle: {
        rounded: `lg`
      }
    },
    textarea: {
      baseStyle: {
        background: `green.300`
      }
    },
    Link: {
      baseStyle: {
        fontWeight: `inherit`,
        _hover: {
          textDecoration: `none`
        },
        _focus: {
          boxShadow: `none`
        }
      },
      variants: {
        text: {
          color: `blue.400`,
          transition: `color 0.15s`,
          transitionTimingFunction: `ease-out`,
          fontWeight: `500`,
          _hover: {
            color: `blue.300`
          }
        },
        gradient: {
          bgGradient: `linear(to-br, blue.400,blue.300)`,
          bgClip: `text`,
          fontWeight: `500`,
          _hover: {
            bgGradient: `linear(to-br, blue.500,blue.300)`,
            bgClip: `text`
          }
        }
      }
    }
  },
  mdx: {
    h1: {
      mt: `2rem`,
      mb: `.25rem`,
      lineHeight: 1.2,
      fontWeight: `bold`,
      fontSize: `1.875rem`,
      letterSpacing: `-.025em`
    },
    h2: {
      mt: `4rem`,
      mb: `0.5rem`,
      lineHeight: 1.3,
      fontWeight: `semibold`,
      fontSize: `1.5rem`,
      "& + h3": {
        mt: `1.5rem`
      }
    },
    h3: {
      mt: `3rem`,
      lineHeight: 1.25,
      fontWeight: `semibold`,
      fontSize: `1.25rem`
    },
    h4: {
      mt: `3rem`,
      lineHeight: 1.375,
      fontWeight: `semibold`,
      fontSize: `1.125rem`
    },
    p: {
      mt: `1.25rem`,
      lineHeight: 1.7,
      "blockquote &": {
        mt: 0
      }
    },
    hr: {
      my: `4rem`
    },
    blockquote: {
      bg: `orange.100`,
      borderWidth: `1px`,
      borderColor: `orange.200`,
      rounded: `lg`,
      px: `1.25rem`,
      py: `1rem`,
      my: `1.5rem`
    },
    ul: {
      mt: `1.5rem`,
      ml: `1.25rem`,
      "blockquote &": { mt: 0 },
      "& > * + *": {
        mt: `0.25rem`
      }
    },
    code: {
      rounded: `sm`,
      px: `1`,
      fontSize: `0.875em`,
      py: `2px`,
      whiteSpace: `nowrap`,
      lineHeight: `normal`
    }
  }
});
var getTagColor = (type) => {
  type = type.toLowerCase();
  if (type === `rails` || type === `ruby`) {
    return `red`;
  } else if (type === `react`) {
    return `cyan`;
  } else if (type === `javascript`) {
    return `yellow`;
  } else if (type === `typescript` || type === `tailwindcss`) {
    return `blue`;
  } else if (type === `chakraui` || type === `css`) {
    return `teal`;
  }
};
function makeTheme(overrides = {}) {
  const theme2 = (0, import_react2.extendTheme)(__spreadProps(__spreadValues({}, extendedTheme), {
    colors
  }));
  return (0, import_utils.mergeWith)(theme2, overrides);
}
var theme = makeTheme();

// app/hooks/useLocalSetting.ts
init_react();
var import_mitt = __toESM(require("mitt"));
var import_react3 = require("react");
var localCache = /* @__PURE__ */ new Map();
var emitter = (0, import_mitt.default)();
function useLocalSetting(name, defaultValue, defer = true) {
  const storageKey = name;
  const [value, _setValue] = (0, import_react3.useState)(() => {
    if (typeof window === `undefined` || defer) {
      return defaultValue;
    }
    const json3 = window.localStorage.getItem(storageKey);
    if (!json3) {
      return defaultValue;
    }
    try {
      return JSON.parse(json3);
    } catch {
      return defaultValue;
    }
  });
  (0, import_react3.useEffect)(() => {
    if (defer === false) {
      return;
    }
    function loadFromStorage() {
      const json3 = localCache.get(storageKey) || window.localStorage.getItem(storageKey);
      if (!json3) {
        return;
      }
      try {
        _setValue(JSON.parse(json3));
      } catch {
        console.log(`catch block`);
      }
    }
    loadFromStorage();
    window.addEventListener(`storage`, loadFromStorage);
    emitter.on(storageKey, loadFromStorage);
    return () => {
      window.removeEventListener(`storage`, loadFromStorage);
      emitter.off(storageKey, loadFromStorage);
    };
  }, [defer, storageKey]);
  const setValue = (0, import_react3.useCallback)((newValue) => {
    const json3 = JSON.stringify(newValue);
    window.localStorage.setItem(storageKey, json3);
    localCache.set(storageKey, json3);
    emitter.emit(storageKey);
    _setValue(newValue);
  }, [_setValue, storageKey]);
  return [value, setValue];
}

// app/components/ui/Accent.tsx
var import_react5 = require("@emotion/react");
var import_react6 = require("react");
var AccentPickerIcon = (_a) => {
  var props = __objRest(_a, []);
  const color = useLinkColor();
  return /* @__PURE__ */ React.createElement(import_react4.Icon, __spreadValues({
    viewBox: "0 0 200 200",
    boxSize: "1.3em",
    color
  }, props), /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
  }));
};
var AccentPicker = (_a) => {
  var props = __objRest(_a, []);
  const [key, setAccentKey] = useLocalSetting(`accent`, `defaultAccent`);
  const update = (0, import_react6.useCallback)(() => {
    let index = accentKeys.indexOf(key);
    index = (index + 1) % accentKeys.length;
    setAccentKey(accentKeys[index]);
  }, [key, setAccentKey]);
  return /* @__PURE__ */ React.createElement(import_react4.IconButton, __spreadValues({
    icon: /* @__PURE__ */ React.createElement(AccentPickerIcon, null),
    isRound: true,
    onMouseDown: update
  }, props));
};
var AccentGlobal = () => {
  const [accentKey] = useLocalSetting(`accent`, `defaultAccent`);
  const accent = theme.colors[accentKey];
  const styles = (0, import_react6.useMemo)(() => import_react5.css`
      :root {
        --colors-accent-50: ${accent[50]};
        --colors-accent-100: ${accent[100]};
        --colors-accent-200: ${accent[200]};
        --colors-accent-300: ${accent[300]};
        --colors-accent-400: ${accent[400]};
        --colors-accent-500: ${accent[500]};
        --colors-accent-600: ${accent[600]};
        --colors-accent-700: ${accent[700]};
        --colors-accent-800: ${accent[800]};
        --colors-accent-900: ${accent[900]};
        --colors-accent-tag-bg-dark: ${getTagBackgroundDark(accentKey, theme)};
      }
    `, [accent, accentKey]);
  return /* @__PURE__ */ React.createElement(import_react5.Global, {
    styles
  });
};

// app/components/layout/appLayout.tsx
init_react();
var import_react11 = require("@chakra-ui/react");
var import_react12 = require("react");

// app/components/layout/footer.tsx
init_react();
var import_react7 = require("@chakra-ui/react");

// app/configs/site-config.js
init_react();
var import_fa = require("react-icons/fa");
var import_fi = require("react-icons/fi");
var siteConfig = {
  copyright: `Copyright \xA9 ${new Date().getFullYear()} Jotyy. All Rights Reserved.`,
  author: {
    name: "Jotyy",
    accounts: [
      {
        url: "https://github.com/jotyy",
        label: "Github Account",
        type: "gray",
        icon: /* @__PURE__ */ React.createElement(import_fa.FaGithub, null)
      },
      {
        url: "https://twitter.com/jotyy3",
        label: "Twitter Account",
        type: "twitter",
        icon: /* @__PURE__ */ React.createElement(import_fa.FaTwitter, null)
      },
      {
        url: "https://dev.to/jotyy",
        label: "Dev Account",
        type: "gray",
        icon: /* @__PURE__ */ React.createElement(import_fa.FaDev, null)
      },
      {
        url: "https://linkedin.com/in/jotyy",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: /* @__PURE__ */ React.createElement(import_fa.FaLinkedin, null)
      },
      {
        url: "jotyy318@gmail.com",
        label: "Mail jotyy",
        type: "gray",
        icon: /* @__PURE__ */ React.createElement(import_fi.FiMail, null)
      }
    ]
  }
};
var site_config_default = siteConfig;

// app/components/layout/footer.tsx
var iconProps = {
  variant: `ghost`,
  size: `lg`,
  isRound: true
};
var Footer = () => {
  return /* @__PURE__ */ React.createElement(import_react7.Stack, {
    as: "footer",
    isInline: true,
    spacing: [1, 2],
    p: 4,
    justifyContent: "space-between",
    alignItems: "center",
    w: [`100%`, `85%`, `80%`],
    maxW: 800,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(import_react7.Flex, {
    flexDirection: [`column`, `column`, `row`],
    flexFlow: [`column-reverse`, `column-reverse`],
    justifyContent: [`center`, `space-between`],
    alignItems: "center",
    w: "100%"
  }, /* @__PURE__ */ React.createElement(import_react7.Text, {
    textAlign: "center",
    fontSize: "sm",
    color: (0, import_react7.useColorModeValue)(`gray.500`, `gray.200`)
  }, "\xA9 ", new Date().getFullYear(), " Jotyy", ` `), /* @__PURE__ */ React.createElement(import_react7.Box, {
    textAlign: "center"
  }, site_config_default.author.accounts.map((sc, index) => {
    return /* @__PURE__ */ React.createElement(import_react7.IconButton, __spreadValues({
      key: index,
      as: import_react7.Link,
      isExternal: true,
      href: sc.url,
      "aria-label": sc.label,
      colorScheme: sc.type,
      icon: sc.icon
    }, iconProps));
  }))));
};
var footer_default = Footer;

// app/components/layout/topNav.tsx
init_react();
var import_react10 = require("@chakra-ui/react");
var import_ai = require("react-icons/ai");
var import_bi = require("react-icons/bi");
var import_bs = require("react-icons/bs");
var import_gi = require("react-icons/gi");
var import_remix2 = __toESM(require_remix());

// app/components/ui/ColorModeSwitcher.tsx
init_react();
var import_react9 = require("@chakra-ui/react");
var import_framer_motion2 = require("framer-motion");

// app/components/ui/motion.tsx
init_react();
var import_react8 = require("@chakra-ui/react");
var import_framer_motion = require("framer-motion");
var MotionBox = (0, import_framer_motion.motion)((0, import_react8.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries(Object.entries(props).filter(([key]) => !(0, import_framer_motion.isValidMotionProp)(key)));
  return /* @__PURE__ */ React.createElement(import_react8.Box, __spreadValues({
    ref
  }, chakraProps));
}));
var MotionFlex = (0, import_framer_motion.motion)((0, import_react8.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries(Object.entries(props).filter(([key]) => !(0, import_framer_motion.isValidMotionProp)(key)));
  return /* @__PURE__ */ React.createElement(import_react8.Flex, __spreadValues({
    ref
  }, chakraProps));
}));
var MotionImage = (0, import_framer_motion.motion)((0, import_react8.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries(Object.entries(props).filter(([key]) => !(0, import_framer_motion.isValidMotionProp)(key)));
  return /* @__PURE__ */ React.createElement(import_react8.Image, __spreadValues({
    ref,
    fallbackSrc: `/assets/images/placeholder.png`
  }, chakraProps));
}));

// app/components/ui/ColorModeSwitcher.tsx
var ColorModeSwitcher = () => {
  const { toggleColorMode } = (0, import_react9.useColorMode)();
  const mode2 = (0, import_react9.useColorModeValue)(`dark`, `light`);
  const handleClick = () => {
    toggleColorMode();
  };
  return /* @__PURE__ */ React.createElement(import_framer_motion2.AnimatePresence, {
    exitBeforeEnter: true,
    initial: false
  }, /* @__PURE__ */ React.createElement(MotionBox, {
    onClick: handleClick,
    key: mode2 === `dark` ? `dark-icon` : `light-icon`,
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { duration: 0.2 },
    cursor: "pointer",
    fontSize: [`2xl`, `3xl`, `3xl`]
  }, mode2 === `dark` ? `\u{1F324}` : `\u{1F319}`));
};

// app/components/layout/topNav.tsx
var webLinks = [
  { name: `About`, path: `/about` },
  { name: `Blog`, path: `/blog` }
];
var mobileLinks = [
  { name: `About`, path: `/about` },
  { name: `Blog`, path: `/blog` },
  { name: `Tech Stack`, path: `/tech-stack` },
  { name: `Achievements`, path: `/achievements` }
];
var dropdownLinks = [
  { name: `Tech Stack`, path: `/tech-stack` },
  { name: `Achievements`, path: `/achievements` }
];
var NavLink = (props) => {
  const location = (0, import_remix2.useLocation)();
  const link = {
    bg: (0, import_react10.useColorModeValue)(`gray.200`, `gray.900`),
    color: (0, import_react10.useColorModeValue)(`blue.500`, `blue.200`)
  };
  return /* @__PURE__ */ React.createElement(import_react10.Link, {
    px: 2,
    py: 1,
    as: import_remix2.Link,
    to: props.path,
    rounded: `md`,
    _hover: {
      textDecoration: `none`,
      bg: link.bg
    },
    bg: location.pathname === props.path ? link.bg : `transparent`,
    color: location.pathname === props.path ? link.color : `inherit`,
    onClick: () => props.onClose()
  }, props.name);
};
var MenuLink = (props) => {
  const iconsObj = {
    "/tech-stack": /* @__PURE__ */ React.createElement(import_react10.Icon, {
      as: import_ai.AiTwotoneThunderbolt,
      size: 18,
      color: props.color
    }),
    "/open-source": /* @__PURE__ */ React.createElement(import_react10.Icon, {
      as: import_bs.BsBook,
      size: 18,
      color: props.color
    }),
    "/achievements": /* @__PURE__ */ React.createElement(import_react10.Icon, {
      as: import_bs.BsCheckCircle,
      size: 18,
      color: props.color
    })
  };
  return /* @__PURE__ */ React.createElement(import_react10.Link, {
    as: import_remix2.Link,
    to: props.path,
    onClick: () => props.onClose
  }, /* @__PURE__ */ React.createElement(import_react10.MenuItem, {
    color: props.rPath === props.path ? props.color : void 0,
    bg: props.rPath === props.path ? props.bg : void 0
  }, /* @__PURE__ */ React.createElement(import_react10.HStack, null, iconsObj[props.path], /* @__PURE__ */ React.createElement(import_react10.Text, null, props.name))));
};
function TopNav() {
  const linkColor = useLinkColor();
  const router = (0, import_remix2.useLocation)();
  const { isOpen, onOpen, onClose } = (0, import_react10.useDisclosure)();
  const menuProps = {
    bg: (0, import_react10.useColorModeValue)(`gray.200`, `gray.900`),
    color: (0, import_react10.useColorModeValue)(`blue.500`, `blue.200`)
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react10.Box, {
    bg: (0, import_react10.useColorModeValue)(`white`, `gray.700`),
    px: 4,
    boxShadow: `lg`,
    position: "fixed",
    width: "100%",
    zIndex: 55
  }, /* @__PURE__ */ React.createElement(import_react10.Flex, {
    h: 16,
    alignItems: `center`,
    justifyContent: `space-between`,
    w: [`90%`, `85%`, `80%`],
    maxW: 800,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(import_react10.IconButton, {
    size: "md",
    icon: isOpen ? /* @__PURE__ */ React.createElement(import_ai.AiOutlineClose, null) : /* @__PURE__ */ React.createElement(import_gi.GiHamburgerMenu, null),
    "aria-label": `Open Menu`,
    display: [`inherit`, `inherit`, `none`],
    onClick: isOpen ? onClose : onOpen
  }), /* @__PURE__ */ React.createElement(import_react10.HStack, {
    spacing: 8,
    alignItems: `center`
  }, /* @__PURE__ */ React.createElement(import_react10.Box, null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_react10.Avatar, {
    as: import_react10.Link,
    size: `sm`,
    alt: "avatar",
    src: `https://avatars.githubusercontent.com/u/30037764?v=4`
  }))), /* @__PURE__ */ React.createElement(import_react10.HStack, {
    as: `nav`,
    spacing: 4,
    display: { base: `none`, md: `flex` }
  }, webLinks.map((link, index) => /* @__PURE__ */ React.createElement(NavLink, {
    key: index,
    name: link.name,
    path: link.path,
    onClose
  })), /* @__PURE__ */ React.createElement(import_react10.Menu, {
    autoSelect: false,
    isLazy: true
  }, ({ onClose: onClose2 }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react10.MenuButton, {
    as: import_react10.Button,
    variant: "ghost",
    size: "sm",
    px: 2,
    py: 1.5,
    fontSize: `1em`,
    rounded: `md`,
    height: `auto `,
    _hover: menuProps,
    _expanded: menuProps,
    _focus: { boxShadow: `none` },
    rightIcon: /* @__PURE__ */ React.createElement(import_bi.BiChevronDown, {
      size: 18
    })
  }, "Links"), /* @__PURE__ */ React.createElement(import_react10.MenuList, {
    zIndex: 5
  }, dropdownLinks.map((link, index) => /* @__PURE__ */ React.createElement(MenuLink, {
    key: index,
    path: link.path,
    name: link.name,
    onClose: onClose2,
    color: menuProps.color,
    bg: menuProps.bg,
    rPath: router.pathname
  }))))))), /* @__PURE__ */ React.createElement(import_react10.Flex, {
    alignItems: `center`
  }, /* @__PURE__ */ React.createElement(AccentPicker, {
    "aria-label": "Accent Color Picker",
    variant: "ghost",
    zIndex: 1,
    color: linkColor,
    mr: 2
  }), /* @__PURE__ */ React.createElement(ColorModeSwitcher, {
    justifySelf: "flex-end"
  }))), isOpen ? /* @__PURE__ */ React.createElement(import_react10.Box, {
    pb: 4,
    w: [`100%`, `100%`, `80%`],
    maxW: 800,
    display: [`inherit`, `inherit`, `none`]
  }, /* @__PURE__ */ React.createElement(import_react10.Stack, {
    as: `nav`,
    spacing: 4
  }, mobileLinks.map((link, index) => /* @__PURE__ */ React.createElement(NavLink, {
    key: index,
    index,
    name: link.name,
    path: link.path,
    onClose
  })))) : null));
}

// app/components/layout/appLayout.tsx
function AppLayout({ children }) {
  return /* @__PURE__ */ React.createElement(import_react12.Fragment, null, /* @__PURE__ */ React.createElement(TopNav, null), /* @__PURE__ */ React.createElement(import_react11.Box, {
    fontSize: "xl",
    w: [`90%`, `85%`, `80%`],
    maxW: 800,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(import_react11.Box, {
    pt: `7rem`,
    pb: 10
  }, children)), /* @__PURE__ */ React.createElement(footer_default, null));
}
var appLayout_default = AppLayout;

// route:D:\PersonalProjects\my-portfolio\app\root.tsx
var import_framer_motion3 = require("framer-motion");
var meta = () => {
  return { title: `Jotyy - FullStack Developer` };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react13.ChakraProvider, {
    theme,
    resetCSS: true
  }, /* @__PURE__ */ React.createElement(AccentGlobal, null), /* @__PURE__ */ React.createElement(appLayout_default, null, /* @__PURE__ */ React.createElement(import_framer_motion3.AnimatePresence, {
    exitBeforeEnter: true,
    initial: false,
    onExitComplete: () => window.scrollTo(0, 0)
  }, /* @__PURE__ */ React.createElement(import_react13.Box, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null))))), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:D:\PersonalProjects\my-portfolio\app\routes\achievements.tsx
var achievements_exports = {};
__export(achievements_exports, {
  default: () => achievements_default2,
  meta: () => meta2
});
init_react();

// app/components/achievements/achievements.tsx
init_react();
var import_react18 = require("@chakra-ui/react");
var import_fa2 = require("react-icons/fa");
var import_fi3 = require("react-icons/fi");
var import_gi2 = require("react-icons/gi");
var import_remix4 = __toESM(require_remix());

// app/components/layout/header.tsx
init_react();
var import_react15 = require("@chakra-ui/react");

// app/components/ui/underlined-text.tsx
init_react();
var import_react14 = require("@chakra-ui/react");
var UnderlinedText = (props) => /* @__PURE__ */ React.createElement(import_react14.Box, {
  as: "span",
  display: "inline-block",
  position: "relative"
}, props.children, /* @__PURE__ */ React.createElement(import_react14.Box, {
  as: "span",
  display: "block",
  position: "absolute",
  bg: `gray.200`,
  w: `100%`,
  h: props.h || `1px`,
  bottom: -2
}));
var underlined_text_default = UnderlinedText;

// app/components/layout/header.tsx
var Header = (_a) => {
  var _b = _a, {
    children,
    underlineColor,
    emoji
  } = _b, props = __objRest(_b, [
    "children",
    "underlineColor",
    "emoji"
  ]);
  return /* @__PURE__ */ React.createElement(import_react15.Box, __spreadProps(__spreadValues({
    as: "h1",
    mt: 10,
    mb: 6,
    fontSize: "3xl",
    lineHeight: "shorter",
    fontWeight: "bold"
  }, props), {
    textAlign: "left"
  }), /* @__PURE__ */ React.createElement(underlined_text_default, {
    color: underlineColor
  }, children), emoji ? ` ` + emoji : ``);
};
var header_default = Header;

// app/components/ui/page-transitions.tsx
init_react();
var import_react16 = require("@chakra-ui/react");
var staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
var variants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1e3, velocity: -100 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1e3 }
    }
  }
};
var easing = [0.6, -0.05, 0.01, 0.99];
var fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
var container = {
  hidden: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
var item = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};
var PageSlideFade = ({ children }) => {
  return /* @__PURE__ */ React.createElement(import_react16.SlideFade, {
    in: true
  }, children);
};
var StaggerChildren = ({ children }) => {
  return /* @__PURE__ */ React.createElement(MotionBox, {
    animate: {
      opacity: 1,
      translateY: 0
    },
    variants: staggerVariants
  }, children);
};
var CardTransition = ({ children }) => {
  return /* @__PURE__ */ React.createElement(MotionBox, {
    variants
  }, children);
};

// app/components/achievements/Timeline.tsx
init_react();
var import_react17 = require("@chakra-ui/react");
var import_fi2 = require("react-icons/fi");
var TimelineItem = (_a) => {
  var _b = _a, {
    icon = import_fi2.FiCheckCircle,
    boxProps = {},
    skipTrail = true,
    children
  } = _b, props = __objRest(_b, [
    "icon",
    "boxProps",
    "skipTrail",
    "children"
  ]);
  const color = (0, import_react17.useColorModeValue)(`gray.700`, `gray.500`);
  return /* @__PURE__ */ React.createElement(import_react17.Flex, __spreadValues({
    minH: 20
  }, props), /* @__PURE__ */ React.createElement(import_react17.Flex, {
    flexDir: "column",
    alignItems: "center",
    mr: 4,
    pos: "relative"
  }, /* @__PURE__ */ React.createElement(import_react17.Circle, {
    size: 12,
    bg: (0, import_react17.useColorModeValue)(`gray.600`, `gray.500`),
    opacity: (0, import_react17.useColorModeValue)(0.07, 0.15),
    sx: {}
  }), /* @__PURE__ */ React.createElement(import_react17.Box, {
    as: icon,
    size: "1.25rem",
    color,
    pos: "absolute",
    left: "0.875rem",
    top: "0.875rem"
  }), !skipTrail && /* @__PURE__ */ React.createElement(import_react17.Box, {
    w: "1px",
    flex: 1,
    bg: color,
    my: 1
  })), /* @__PURE__ */ React.createElement(import_react17.Box, __spreadValues({
    pt: 3
  }, boxProps), children));
};

// app/components/achievements/achievements.tsx
var ExternalLink = (_a) => {
  var _b = _a, {
    url,
    linkProps,
    text
  } = _b, props = __objRest(_b, [
    "url",
    "linkProps",
    "text"
  ]);
  return /* @__PURE__ */ React.createElement(import_react18.Link, __spreadValues(__spreadValues({
    href: url,
    isExternal: true
  }, linkProps), props), text);
};
var InternalLink = (_a) => {
  var _b = _a, {
    url,
    linkProps,
    text
  } = _b, props = __objRest(_b, [
    "url",
    "linkProps",
    "text"
  ]);
  return /* @__PURE__ */ React.createElement(import_react18.Link, __spreadValues(__spreadValues({
    as: import_remix4.Link,
    to: url
  }, linkProps), props), text);
};
var Achievements = () => {
  const linkColor = useLinkColor();
  return /* @__PURE__ */ React.createElement(PageSlideFade, null, /* @__PURE__ */ React.createElement(import_react18.Box, {
    align: "start",
    mb: 6
  }, /* @__PURE__ */ React.createElement(header_default, {
    mt: 0,
    mb: 0
  }, "Achievements")), /* @__PURE__ */ React.createElement(import_react18.VStack, {
    textAlign: "start",
    align: "start",
    mb: 5
  }, /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(import_react18.Heading, {
    fontSize: "2xl",
    fontWeight: "600",
    my: 5
  }, "2022"), /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_fa2.FaTools
  }, "Refactor this website using", ` `, /* @__PURE__ */ React.createElement(ExternalLink, {
    color: linkColor,
    url: "https://remix.run/",
    text: `Remix`
  })))), /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(import_react18.Heading, {
    fontSize: "2xl",
    fontWeight: "600",
    my: 5
  }, "2021"), /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_fi3.FiPackage
  }, "Published my first post on this website", ` `, /* @__PURE__ */ React.createElement(InternalLink, {
    color: linkColor,
    url: "/blog",
    text: `Blog`
  })), /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_fi3.FiBarChart2
  }, "Collected 6k+ post views and 70+ total reactions on", ` `, /* @__PURE__ */ React.createElement(ExternalLink, {
    color: linkColor,
    url: "https://www.jianshu.com/u/a83fbf0ddc76",
    text: `Jianshu.com`,
    target: "_blank"
  })))), /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(import_react18.Heading, {
    fontSize: "2xl",
    fontWeight: "600",
    my: 5
  }, "2020"), /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_fi3.FiEdit2
  }, "Wrote 5 blog posts"), /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_fi3.FiPackage
  }, "Published or contributed to", ` `, /* @__PURE__ */ React.createElement(ExternalLink, {
    color: linkColor,
    url: "https://github.com/jotyy?tab=repositories",
    text: `3 open-source repositories`,
    target: "_blank"
  })), /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_fi3.FiHome,
    skipTrail: true
  }, "Built my portfolio website with React and ChakraUI,", ` `, /* @__PURE__ */ React.createElement(ExternalLink, {
    color: linkColor,
    url: "https://github.com/jotyy/my-portfolio",
    text: `source on Github`,
    target: "_blank"
  }), "."))), /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(import_react18.Heading, {
    fontSize: "2xl",
    fontWeight: "600",
    my: 5
  }, "2019"), /* @__PURE__ */ React.createElement(import_react18.Box, null, /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_gi2.GiLovers
  }, "Became a dad \u2764\uFE0F"), /* @__PURE__ */ React.createElement(TimelineItem, {
    icon: import_fi3.FiUsers
  }, "Became a husband \u{1F935}")))));
};
var achievements_default = Achievements;

// app/components/layout/pageLayout.tsx
init_react();
var import_react19 = __toESM(require("react"));
var import_framer_motion4 = require("framer-motion");
var variants2 = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};
var PageLayout = ({
  children,
  title,
  description,
  keywords,
  image
}) => /* @__PURE__ */ import_react19.default.createElement(import_react19.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(import_framer_motion4.motion.main, {
  initial: "hidden",
  animate: "enter",
  exit: "exit",
  variants: variants2,
  transition: { type: `linear` }
}, children));
var pageLayout_default = PageLayout;

// route:D:\PersonalProjects\my-portfolio\app\routes\achievements.tsx
var Archievement = () => {
  return /* @__PURE__ */ React.createElement(pageLayout_default, {
    title: "Achievements",
    keywords: "My achievements"
  }, /* @__PURE__ */ React.createElement(achievements_default, null));
};
var meta2 = () => {
  return { title: `Achivements | Jotyy` };
};
var achievements_default2 = Archievement;

// route:D:\PersonalProjects\my-portfolio\app\routes\blog\$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  loader: () => loader
});
init_react();
var import_react20 = require("@chakra-ui/react");
var import_dayjs = __toESM(require("dayjs"));
var import_framer_motion5 = require("framer-motion");
var import_localizedFormat = __toESM(require("dayjs/plugin/localizedFormat"));
var import_remix5 = __toESM(require_remix());

// app/models/blog.server.ts
init_react();
var import_fs = __toESM(require("fs"));
var import_gray_matter = __toESM(require("gray-matter"));
var import_path = __toESM(require("path"));
var import_marked = require("marked");
var postsDirectory = import_path.default.join(process.cwd(), "posts");
function getSortedPostsData() {
  const fileNames = import_fs.default.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = import_path.default.join(postsDirectory, fileName);
    const fileContents = import_fs.default.readFileSync(fullPath, "utf8");
    const matterResult = (0, import_gray_matter.default)(fileContents);
    return __spreadValues({
      slug: id
    }, matterResult.data);
  });
  return allPostsData.sort((a, b) => {
    if (a.published_at < b.published_at) {
      return 1;
    } else if (a.published_at > b.published_at) {
      return -1;
    } else {
      return 0;
    }
  });
}
async function getPostData(slug) {
  const fullPath = import_path.default.join(postsDirectory, `${slug}.mdx`);
  const fileContents = import_fs.default.readFileSync(fullPath, "utf8");
  const matterResult = (0, import_gray_matter.default)(fileContents);
  const contentHtml = (0, import_marked.marked)(matterResult.content.trim());
  return __spreadValues({
    slug,
    contentHtml
  }, matterResult.data);
}

// route:D:\PersonalProjects\my-portfolio\app\routes\blog\$slug.tsx
import_dayjs.default.extend(import_localizedFormat.default);
var loader = async ({ params }) => {
  const postData = await getPostData(params.slug ?? "");
  return (0, import_remix5.json)({
    postData
  });
};
var BlogSlug = () => {
  const { postData } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(pageLayout_default, {
    title: postData.title
  }, /* @__PURE__ */ React.createElement(import_framer_motion5.motion.div, {
    variants: fadeInUp
  }, /* @__PURE__ */ React.createElement(import_react20.Heading, {
    as: "h1",
    size: "xl",
    mt: "2",
    mb: "2"
  }, postData.title)), /* @__PURE__ */ React.createElement(import_framer_motion5.motion.div, {
    variants: fadeInUp
  }, /* @__PURE__ */ React.createElement(import_react20.HStack, {
    isInline: true,
    flexDirection: ["column", "row", "row"]
  }, postData.tags.map((tag) => /* @__PURE__ */ React.createElement(import_react20.Tag, {
    key: tag,
    size: "md",
    padding: "0 3px",
    colorScheme: getTagColor(tag)
  }, tag)))), /* @__PURE__ */ React.createElement(import_framer_motion5.motion.div, {
    variants: fadeInUp
  }, /* @__PURE__ */ React.createElement(import_react20.HStack, {
    mt: "2",
    spacing: 2,
    alignItems: "left",
    justifyContent: "left"
  }, /* @__PURE__ */ React.createElement(import_react20.Text, {
    fontSize: "xs"
  }, "Published on"), /* @__PURE__ */ React.createElement(import_react20.Text, {
    fontSize: "xs",
    fontWeight: "bold"
  }, (0, import_dayjs.default)(postData.published_at).format("LL")))), /* @__PURE__ */ React.createElement(import_framer_motion5.motion.div, {
    variants: fadeInUp
  }, /* @__PURE__ */ React.createElement(import_react20.Box, {
    className: "article"
  }, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: postData.contentHtml ?? "" }
  }))));
};
var slug_default = BlogSlug;

// route:D:\PersonalProjects\my-portfolio\app\routes\blog\index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default,
  loader: () => loader2,
  meta: () => meta3
});
init_react();
var import_react21 = require("@chakra-ui/react");
var import_framer_motion6 = require("framer-motion");
var import_react22 = require("react");
var import_bi2 = require("react-icons/bi");
var import_remix6 = __toESM(require_remix());
var TURQUOSISE = "#06b6d4";
var loader2 = () => {
  const allPosts = getSortedPostsData();
  return (0, import_remix6.json)({
    posts: allPosts
  });
};
var Blog = () => {
  const { posts } = (0, import_remix6.useLoaderData)();
  const [search, setSearch] = (0, import_react22.useState)("");
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });
  return /* @__PURE__ */ React.createElement(pageLayout_default, {
    title: "Blog"
  }, /* @__PURE__ */ React.createElement(PageSlideFade, null, /* @__PURE__ */ React.createElement(header_default, {
    underlineColor: TURQUOSISE,
    mt: 0,
    mb: 6
  }, "Featured Articles"), /* @__PURE__ */ React.createElement(import_react21.InputGroup, {
    maxW: "30rem"
  }, /* @__PURE__ */ React.createElement(import_react21.Input, {
    placeholder: "Search articles",
    onChange: (e) => setSearch(e.target.value),
    background: (0, import_react21.useColorModeValue)("gray.100", "#1e2533")
  }), /* @__PURE__ */ React.createElement(import_react21.InputRightElement, null, /* @__PURE__ */ React.createElement(import_react21.Icon, {
    as: import_bi2.BiSearch,
    w: 6,
    h: 6
  }))), /* @__PURE__ */ React.createElement(StaggerChildren, null, /* @__PURE__ */ React.createElement(import_react21.Stack, {
    spacing: 4,
    mt: 6
  }, /* @__PURE__ */ React.createElement(import_framer_motion6.AnimatePresence, null, filteredPosts.map((post, i) => /* @__PURE__ */ React.createElement(import_framer_motion6.motion.div, {
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: (i2) => ({
        opacity: 0,
        y: -30 * i2
      }),
      visible: (i2) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i2 * 0.1
        }
      })
    },
    custom: i,
    key: post.slug
  }, /* @__PURE__ */ React.createElement(MotionBox, {
    whileHover: { y: -5 },
    key: i
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: post.slug
  }, post.title)))))))));
};
var meta3 = () => {
  return { title: `Blog | Jotyy` };
};
var blog_default = Blog;

// route:D:\PersonalProjects\my-portfolio\app\routes\tech-stack.tsx
var tech_stack_exports = {};
__export(tech_stack_exports, {
  default: () => tech_stack_default,
  loader: () => loader3,
  meta: () => meta4
});
init_react();
var import_react26 = require("react");
var import_react27 = require("@chakra-ui/react");

// app/components/skills/section.tsx
init_react();
var import_react24 = require("@chakra-ui/react");

// app/components/skills/container.tsx
init_react();
var import_react23 = require("@chakra-ui/react");
var Container = (props) => /* @__PURE__ */ React.createElement(import_react23.Box, __spreadValues({
  textAlign: "center",
  fontSize: "xl",
  w: [`90%`, `85%`, `80%`],
  maxW: 800,
  mx: "auto"
}, props));
var container_default = Container;

// app/components/skills/section.tsx
var Section = (props) => {
  const _a = props, { full, children } = _a, rest = __objRest(_a, ["full", "children"]);
  return /* @__PURE__ */ React.createElement(import_react24.Center, __spreadProps(__spreadValues({
    as: "section"
  }, rest), {
    w: "100%"
  }), full ? children : /* @__PURE__ */ React.createElement(container_default, null, children));
};
var section_default = Section;

// route:D:\PersonalProjects\my-portfolio\app\routes\tech-stack.tsx
var import_ai2 = require("react-icons/ai");
var import_bi3 = require("react-icons/bi");
var import_gi3 = require("react-icons/gi");

// app/components/skills/skill-card.tsx
init_react();
var import_react25 = require("@chakra-ui/react");
var import_remix7 = __toESM(require_remix());
var SkillCard = ({ name, image, link, description }) => {
  const linkColor = useLinkColor();
  return /* @__PURE__ */ React.createElement(MotionBox, {
    variants: item
  }, /* @__PURE__ */ React.createElement(MotionBox, {
    whileHover: { y: -5 }
  }, /* @__PURE__ */ React.createElement(import_react25.Link, {
    as: import_remix7.Link,
    to: link ?? `/`,
    isExternal: true
  }, /* @__PURE__ */ React.createElement(import_react25.HStack, {
    p: 4,
    bg: (0, import_react25.useColorModeValue)(`white`, `gray.800`),
    rounded: "xl",
    borderWidth: "1px",
    borderColor: (0, import_react25.useColorModeValue)(`gray.100`, `gray.700`),
    w: "100%",
    textAlign: "left",
    align: "start",
    spacing: 4,
    _hover: { shadow: `md` }
  }, /* @__PURE__ */ React.createElement(import_react25.Box, {
    rounded: "lg",
    p: 2,
    position: "relative",
    overflow: "hidden",
    lineHeight: 0,
    boxShadow: "inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
  }, /* @__PURE__ */ React.createElement(import_react25.Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.25
  }), /* @__PURE__ */ React.createElement(import_react25.Image, {
    src: image,
    height: 26,
    width: 26,
    layout: "fixed",
    rounded: "md",
    alt: ""
  })), /* @__PURE__ */ React.createElement(import_react25.VStack, {
    align: "start",
    justify: "flex-start",
    spacing: 1,
    maxW: "lg",
    h: "100%"
  }, /* @__PURE__ */ React.createElement(import_react25.VStack, {
    spacing: 0,
    align: "start",
    flexGrow: 1
  }, /* @__PURE__ */ React.createElement(import_react25.Text, {
    fontWeight: "bold",
    fontSize: "md",
    noOfLines: 2,
    color: linkColor
  }, name), /* @__PURE__ */ React.createElement(import_react25.Text, {
    fontSize: "sm",
    color: (0, import_react25.useColorModeValue)(`gray.500`, `gray.200`)
  }, description)))))));
};
var skill_card_default = SkillCard;

// app/data/data.ts
init_react();
var companies = [
  {
    title: `Lattice`,
    alt: `LC image`,
    role: `Senior Blockchain Engineer`,
    skills: [`etherum`, `dapp`, `typescript`, `javascript`, `react`],
    period: `2021 - Present`,
    logo: `/assets/images/logos/phaedra.jpeg`
  },
  {
    title: `ChainPort`,
    alt: `CP image`,
    role: `Co-founder, CTO`,
    skills: [`nodejs`, `flutter`, `typescript`, `react`, `aws`],
    period: `2021 - Present`,
    logo: `https://chainport.com.cn/wp-content/uploads/2021/05/chainport.png`
  },
  {
    title: `Taiyi Technologies`,
    alt: `Taiyi image`,
    role: `App Architect`,
    skills: [`flutter`, `kotlin`, `typescript`, `react native`],
    period: `2017 - 2019`,
    logo: `/assets/images/logos/brainxtech.png`
  },
  {
    title: `HX Technologies`,
    alt: `HX image`,
    role: `Software Engineer`,
    skills: [`nodejs`, `kotlin`],
    period: `2018 - 2020`,
    logo: `/assets/images/logos/brainxtech.png`
  },
  {
    title: `MJ Technologies`,
    alt: `MJ image`,
    role: `Software Engineer`,
    skills: [`kotlin`, `android`, `nodejs`],
    period: `2016 - 2017`,
    logo: `/assets/images/logos/brainplow.jpg`
  }
];
var institutes = [
  {
    short_title: `FAST - CQUPT`,
    title: `Chongqing University of Posts and Telecommunications`,
    alt: `CQUPT image`,
    role: `Bachelor's Degree`,
    skills: [`project management`, `web development`, `data structures`],
    period: `2012 - 2016`,
    startingYear: `2012`,
    logo: `/assets/images/logos/cqupt.png`,
    awards: [
      {
        title: `Speed Programming Battle`,
        description: `Won speed programming battle which held at FAST - NUCES.`,
        date: `May 1, 2015`
      },
      {
        title: `Silver Medal`,
        description: `This medal was awarded to me by FAST - NUCES for getting a CGPA of 3.9 in 2nd semester.`,
        date: `May 1, 2014`
      },
      {
        title: `Speed Programming Battle`,
        description: `Won speed programming battle which held at FAST - NUCES.`,
        date: `Nov 1, 2013`
      }
    ]
  }
];
var skillsArray = [
  {
    name: `React`,
    description: `Web development`,
    link: `https://reactjs.org/`,
    type: `development`,
    image: `/assets/images/skills/react.png`
  },
  {
    name: `Python`,
    description: `Web development, scrapping`,
    link: `https://www.python.org/`,
    type: `development`,
    image: `/assets/images/skills/python.png`
  },
  {
    name: `Javascript`,
    description: `Web development`,
    link: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
    type: `development`,
    image: `/assets/images/skills/javascript.png`
  },
  {
    name: `Typescript`,
    description: `Web development`,
    link: `https://www.typescriptlang.org/`,
    type: `development`,
    image: `/assets/images/skills/typescript.png`
  },
  {
    name: `Html5`,
    description: `Web layouts`,
    link: `https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5`,
    type: `development`,
    image: `/assets/images/skills/html-5.png`
  },
  {
    name: `Css3`,
    description: `Web design`,
    link: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
    type: `design`,
    image: `/assets/images/skills/css3.png`
  },
  {
    name: `Bootstrap`,
    description: `Web design`,
    link: `https://getbootstrap.com/`,
    type: `design`,
    image: `/assets/images/skills/bootstrap.png`
  },
  {
    name: `Postgres`,
    description: `Database`,
    link: `https://www.postgresql.org/`,
    type: `database`,
    image: `/assets/images/skills/postgresql.png`
  },
  {
    name: `Mysql`,
    description: `Database`,
    link: `https://www.mysql.com/`,
    type: `database`,
    image: `/assets/images/skills/mysql.png`
  },
  {
    name: `Redis`,
    description: `Database`,
    link: `https://redis.io/`,
    type: `database`,
    image: `/assets/images/skills/redis.png`
  },
  {
    name: `Heroku`,
    description: `Devops`,
    link: `https://www.heroku.com/`,
    type: `devops`,
    image: `/assets/images/skills/heroku.png`
  },
  {
    name: `AWS`,
    description: `Devops`,
    link: `https://aws.amazon.com/`,
    type: `devops`,
    image: `assets/images/skills/aws.png`
  },
  {
    name: `Digital Ocean`,
    description: `Devops`,
    link: `https://www.digitalocean.com/`,
    type: `devops`,
    image: `/assets/images/skills/digital-ocean.png`
  },
  {
    name: `Nginx`,
    description: `Web server`,
    link: `https://www.nginx.com/`,
    type: `devops`,
    image: `/assets/images/skills/nginx.png`
  },
  {
    name: `Visual Studio Code`,
    description: `Code editor of choice`,
    link: `https://code.visualstudio.com/`,
    type: `development`,
    image: `/assets/images/skills/vscode.png`
  },
  {
    name: `Figma`,
    description: `Collaborative Design`,
    link: `https://www.figma.com/`,
    type: `design`,
    image: `/assets/images/skills/figma.png`
  }
];

// route:D:\PersonalProjects\my-portfolio\app\routes\tech-stack.tsx
var import_remix8 = __toESM(require_remix());
var loader3 = () => {
  return {
    skills: skillsArray
  };
};
var meta4 = () => {
  return { title: `TechStack | Jotyy` };
};
var TechStack = () => {
  const { skills } = (0, import_remix8.useLoaderData)();
  const [skillsList, setSkillsList] = (0, import_react26.useState)([]);
  (0, import_react26.useEffect)(() => {
    setSkillsList(skills);
  }, [skills]);
  const filterSkills = (tab) => {
    if (tab.length)
      setSkillsList(skills.filter((skill) => skill.type === tab));
    else
      setSkillsList(skills);
  };
  return /* @__PURE__ */ React.createElement(pageLayout_default, {
    title: "Skills",
    keywords: "nodejs, react, javascript, typescript, flutter"
  }, /* @__PURE__ */ React.createElement(PageSlideFade, null, /* @__PURE__ */ React.createElement(import_react27.VStack, {
    spacing: 8
  }, /* @__PURE__ */ React.createElement(section_default, null, /* @__PURE__ */ React.createElement(import_react27.VStack, null, /* @__PURE__ */ React.createElement(header_default, {
    mt: 0,
    mb: 1
  }, "Tech Stack"), /* @__PURE__ */ React.createElement(import_react27.Text, {
    fontSize: `xl`,
    color: (0, import_react27.useColorModeValue)(`gray.500`, `gray.200`),
    maxW: "lg",
    textAlign: "center"
  }, "A list of my favorite tools and technologies that I use on a regular basis."))), /* @__PURE__ */ React.createElement(section_default, null, /* @__PURE__ */ React.createElement(import_react27.Tabs, {
    variant: "soft-rounded",
    colorScheme: "blue",
    align: "center",
    w: "100%"
  }, /* @__PURE__ */ React.createElement(import_react27.TabList, {
    display: "flex",
    flexWrap: "wrap"
  }, /* @__PURE__ */ React.createElement(import_react27.Tab, {
    bg: (0, import_react27.useColorModeValue)(`gray.100`, `gray.800`),
    color: (0, import_react27.useColorModeValue)(`gray.600`, `gray.500`),
    _selected: {
      color: `green.800`,
      bg: `green.100`
    },
    mr: 2,
    mt: 2,
    onClick: () => filterSkills(``)
  }, /* @__PURE__ */ React.createElement(import_react27.HStack, {
    spacing: 1
  }, /* @__PURE__ */ React.createElement(import_react27.Icon, {
    as: import_ai2.AiTwotoneThunderbolt
  }), /* @__PURE__ */ React.createElement(import_react27.Text, null, "All"))), /* @__PURE__ */ React.createElement(import_react27.Tab, {
    bg: (0, import_react27.useColorModeValue)(`gray.100`, `gray.800`),
    color: (0, import_react27.useColorModeValue)(`gray.500`, `gray.500`),
    _selected: {
      color: (0, import_react27.useColorModeValue)(`gray.100`, `gray.800`),
      bg: (0, import_react27.useColorModeValue)(`gray.900`, `gray.100`)
    },
    mr: 2,
    mt: 2,
    onClick: () => filterSkills(`development`)
  }, /* @__PURE__ */ React.createElement(import_react27.HStack, {
    spacing: 1
  }, /* @__PURE__ */ React.createElement(import_react27.Icon, {
    as: import_bi3.BiDesktop
  }), /* @__PURE__ */ React.createElement(import_react27.Text, null, "Web Development"))), /* @__PURE__ */ React.createElement(import_react27.Tab, {
    bg: (0, import_react27.useColorModeValue)(`gray.100`, `gray.800`),
    color: (0, import_react27.useColorModeValue)(`gray.600`, `gray.500`),
    _selected: {
      color: `green.800`,
      bg: `green.100`
    },
    mr: 2,
    mt: 2,
    onClick: () => filterSkills(`design`)
  }, /* @__PURE__ */ React.createElement(import_react27.HStack, {
    spacing: 1
  }, /* @__PURE__ */ React.createElement(import_react27.Icon, {
    as: import_gi3.GiSpiderWeb
  }), /* @__PURE__ */ React.createElement(import_react27.Text, null, "Web Design"))), /* @__PURE__ */ React.createElement(import_react27.Tab, {
    bg: (0, import_react27.useColorModeValue)(`gray.100`, `gray.800`),
    color: (0, import_react27.useColorModeValue)(`gray.600`, `gray.500`),
    _selected: {
      color: `red.800`,
      bg: `red.100`
    },
    mr: 2,
    mt: 2,
    onClick: () => filterSkills(`devops`)
  }, /* @__PURE__ */ React.createElement(import_react27.HStack, {
    spacing: 1
  }, /* @__PURE__ */ React.createElement(import_react27.Icon, {
    as: import_ai2.AiOutlineCloudServer
  }), /* @__PURE__ */ React.createElement(import_react27.Text, null, "Devops")))), /* @__PURE__ */ React.createElement(import_react27.TabPanels, {
    minHeight: `45vh`
  }, /* @__PURE__ */ React.createElement(import_react27.TabPanel, {
    px: 0
  }, /* @__PURE__ */ React.createElement(MotionBox, {
    variants: container,
    initial: "hidden",
    animate: "visible"
  }, /* @__PURE__ */ React.createElement(import_react27.SimpleGrid, {
    columns: [1, 1, 2],
    spacing: 4,
    mt: 8
  }, skillsList.map((tool, index) => /* @__PURE__ */ React.createElement(skill_card_default, __spreadValues({
    key: index
  }, tool)))))), /* @__PURE__ */ React.createElement(import_react27.TabPanel, {
    px: 0
  }, /* @__PURE__ */ React.createElement(MotionBox, {
    variants: container,
    initial: "hidden",
    animate: "visible"
  }, /* @__PURE__ */ React.createElement(import_react27.SimpleGrid, {
    columns: [1, 2],
    spacing: 4,
    mt: 8
  }, skillsList.map((tool, index) => /* @__PURE__ */ React.createElement(skill_card_default, __spreadValues({
    key: index
  }, tool)))))), /* @__PURE__ */ React.createElement(import_react27.TabPanel, {
    px: 0
  }, /* @__PURE__ */ React.createElement(MotionBox, {
    variants: container,
    initial: "hidden",
    animate: "visible"
  }, /* @__PURE__ */ React.createElement(import_react27.SimpleGrid, {
    columns: [1, 2],
    spacing: 4,
    mt: 8
  }, skillsList.map((tool, index) => /* @__PURE__ */ React.createElement(skill_card_default, __spreadValues({
    key: index
  }, tool)))))), /* @__PURE__ */ React.createElement(import_react27.TabPanel, {
    px: 0
  }, /* @__PURE__ */ React.createElement(MotionBox, {
    variants: container,
    initial: "hidden",
    animate: "visible"
  }, /* @__PURE__ */ React.createElement(import_react27.SimpleGrid, {
    columns: [1, 2],
    spacing: 4,
    mt: 8
  }, skillsList.map((tool, index) => /* @__PURE__ */ React.createElement(skill_card_default, __spreadValues({
    key: index
  }, tool))))))))))));
};
var tech_stack_default = TechStack;

// route:D:\PersonalProjects\my-portfolio\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader4,
  meta: () => meta5
});
init_react();
var import_react29 = require("@chakra-ui/react");
var import_fa3 = require("react-icons/fa");
var import_bs2 = require("react-icons/bs");

// app/components/ui/Tags.tsx
init_react();
var import_react28 = require("@chakra-ui/react");
function useTagStyles(colorScheme = `accent`) {
  const theme2 = (0, import_react28.useTheme)();
  return {
    bg: (0, import_react28.useColorModeValue)(`${colorScheme}.100`, colorScheme === `accent` ? `var(--colors-accent-tag-bg-dark)` : getTagBackgroundDark(colorScheme, theme2)),
    color: (0, import_react28.useColorModeValue)(`${colorScheme}.800`, `${colorScheme}.200`)
  };
}
var Tag2 = (_a) => {
  var _b = _a, {
    colorScheme = `accent`,
    name,
    interactive = true
  } = _b, props = __objRest(_b, [
    "colorScheme",
    "name",
    "interactive"
  ]);
  const propsOverride = __spreadValues({
    size: `sm`,
    verticalAlign: `middle`
  }, useTagStyles(colorScheme));
  if (!interactive) {
    return /* @__PURE__ */ React.createElement(import_react28.Tag, __spreadValues(__spreadValues({}, props), propsOverride), name);
  }
  return /* @__PURE__ */ React.createElement(import_react28.Tag, __spreadValues(__spreadValues({}, props), propsOverride), name);
};
var Tags = (_a) => {
  var _b = _a, {
    tags,
    interactive = true,
    tagProps = {}
  } = _b, props = __objRest(_b, [
    "tags",
    "interactive",
    "tagProps"
  ]);
  if (!tags || tags.length === 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(import_react28.Flex, __spreadValues({
    alignItems: "center",
    flexWrap: "wrap",
    m: "-2px"
  }, props), tags.map((tag) => /* @__PURE__ */ React.createElement(Tag2, __spreadValues({
    key: tag,
    name: tag,
    interactive,
    m: "2px"
  }, tagProps))));
};

// route:D:\PersonalProjects\my-portfolio\app\routes\about.tsx
var import_remix9 = __toESM(require_remix());
var TURQUOISE = `#06b6d4`;
var loader4 = () => {
  return {
    companies,
    institutes
  };
};
var Card = (props) => {
  const { title, role, skills, period, logo, colorMode, alt } = props;
  return /* @__PURE__ */ React.createElement(CardTransition, null, /* @__PURE__ */ React.createElement(import_react29.Box, {
    px: 4,
    py: 5,
    borderWidth: "1px",
    _hover: { shadow: `lg` },
    bg: (0, import_react29.useColorModeValue)(`white`, `gray.800`),
    position: "relative",
    rounded: "md"
  }, /* @__PURE__ */ React.createElement(import_react29.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ React.createElement(import_react29.Flex, null, /* @__PURE__ */ React.createElement(import_react29.Image, {
    rounded: "full",
    w: 16,
    h: 16,
    objectFit: "cover",
    fallbackSrc: `/assets/images/placeholder.png`,
    src: logo,
    alt
  }), /* @__PURE__ */ React.createElement(import_react29.Stack, {
    spacing: 2,
    pl: 3,
    align: "left"
  }, /* @__PURE__ */ React.createElement(import_react29.Heading, {
    align: "left",
    fontSize: "xl",
    color: `mode.${colorMode}.career.text`
  }, title), /* @__PURE__ */ React.createElement(import_react29.Heading, {
    align: "left",
    fontSize: "sm",
    color: `mode.${colorMode}.career.subtext`
  }, role), /* @__PURE__ */ React.createElement(import_react29.Stack, {
    spacing: 1,
    mt: 3,
    isInline: true,
    alignItems: "center",
    display: [`none`, `none`, `flex`, `flex`]
  }, /* @__PURE__ */ React.createElement(Tags, {
    tags: skills,
    interactive: false,
    tagProps: {
      colorScheme: `gray`,
      padding: `0 3px`,
      size: `sm`
    }
  })))), /* @__PURE__ */ React.createElement(import_react29.Stack, {
    display: [`none`, `none`, `flex`, `flex`]
  }, /* @__PURE__ */ React.createElement(import_react29.Text, {
    fontSize: 14,
    color: `mode.${colorMode}.career.subtext`
  }, period))), /* @__PURE__ */ React.createElement(import_react29.Stack, {
    spacing: 1,
    mt: 3,
    isInline: true,
    alignItems: "center",
    display: [`flex`, `flex`, `none`, `none`]
  }, /* @__PURE__ */ React.createElement(Tags, {
    tags: skills,
    interactive: false,
    tagProps: {
      colorScheme: `gray`,
      padding: `0 3px`,
      size: `sm`
    }
  }))));
};
var About = () => {
  const { companies: companies2, institutes: institutes2 } = (0, import_remix9.useLoaderData)();
  const { colorMode } = (0, import_react29.useColorMode)();
  return /* @__PURE__ */ React.createElement(pageLayout_default, {
    title: "About",
    description: "My educational and professional journey so far"
  }, /* @__PURE__ */ React.createElement(PageSlideFade, null, /* @__PURE__ */ React.createElement(StaggerChildren, null, /* @__PURE__ */ React.createElement(MotionBox, null, /* @__PURE__ */ React.createElement(import_react29.Heading, null, /* @__PURE__ */ React.createElement(import_react29.Flex, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(header_default, {
    underlineColor: TURQUOISE,
    mt: 0,
    mb: 0
  }, "Career"), /* @__PURE__ */ React.createElement(import_react29.Stack, {
    pl: 3
  }, /* @__PURE__ */ React.createElement(import_react29.Box, {
    as: import_bs2.BsFillBriefcaseFill,
    size: "25px"
  }))))), /* @__PURE__ */ React.createElement(import_react29.VStack, {
    spacing: 4,
    marginBottom: 6,
    align: "left",
    mx: [0, 0, 6],
    mt: 12
  }, companies2.map((company, index) => /* @__PURE__ */ React.createElement(MotionBox, {
    whileHover: { y: -5 },
    key: index
  }, /* @__PURE__ */ React.createElement(Card, {
    key: index,
    title: company.title,
    role: company.role,
    skills: company.skills,
    period: company.period,
    logo: company.logo,
    colorMode
  })))), /* @__PURE__ */ React.createElement(import_react29.Heading, null, /* @__PURE__ */ React.createElement(import_react29.Flex, {
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(header_default, {
    underlineColor: TURQUOISE,
    mt: 0,
    mb: 0
  }, "Education"), /* @__PURE__ */ React.createElement(import_react29.Stack, {
    pl: 3
  }, /* @__PURE__ */ React.createElement(import_react29.Box, {
    as: import_fa3.FaGraduationCap,
    size: "25px"
  })))), /* @__PURE__ */ React.createElement(import_react29.VStack, {
    spacing: 4,
    marginBottom: 6,
    align: "left",
    mx: [0, 0, 6],
    mt: 12
  }, institutes2.map((institute, index) => /* @__PURE__ */ React.createElement(MotionBox, {
    whileHover: { y: -5 },
    key: index
  }, /* @__PURE__ */ React.createElement(Card, {
    key: index,
    title: institute.title,
    role: institute.role,
    skills: institute.skills,
    period: institute.period,
    logo: institute.logo,
    colorMode
  })))))));
};
var meta5 = () => {
  return { title: `About | Jotyy` };
};
var about_default = About;

// route:D:\PersonalProjects\my-portfolio\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5
});
init_react();

// app/components/home/home.tsx
init_react();
var import_react33 = require("@chakra-ui/react");
var import_react34 = __toESM(require("react"));
var import_remix10 = __toESM(require_remix());

// app/components/home/projects/index.tsx
init_react();
var import_react32 = require("@chakra-ui/react");

// app/components/home/projects/card.tsx
init_react();
var import_react30 = require("@chakra-ui/react");
var import_framer_motion7 = require("framer-motion");
var import_react31 = require("react");
var ProjectCard = ({
  title,
  description,
  link,
  technologies
}) => {
  const linkColor = useLinkColor();
  const textColor = (0, import_react30.useColorModeValue)(`gray.500`, `gray.200`);
  const [isOpen, setIsOpen] = (0, import_react31.useState)(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return /* @__PURE__ */ React.createElement(import_framer_motion7.motion.div, {
    layout: true,
    onClick: toggleOpen
  }, /* @__PURE__ */ React.createElement(import_react30.HStack, {
    p: 4,
    bg: (0, import_react30.useColorModeValue)(`white`, `gray.800`),
    rounded: "xl",
    borderWidth: "1px",
    w: "100%",
    h: "100%",
    textAlign: "left",
    align: "start",
    spacing: 4,
    cursor: "pointer",
    _hover: { shadow: `lg` }
  }, /* @__PURE__ */ React.createElement(import_react30.VStack, {
    align: "start",
    justify: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react30.VStack, {
    spacing: 0,
    align: "start"
  }, /* @__PURE__ */ React.createElement(import_framer_motion7.motion.div, {
    layout: true
  }, /* @__PURE__ */ React.createElement(import_react30.HStack, null, /* @__PURE__ */ React.createElement(import_react30.Text, {
    as: import_react30.Link,
    href: link,
    fontWeight: "bold",
    fontSize: "md",
    noOfLines: 1,
    onClick: (e) => e.stopPropagation,
    color: linkColor,
    isExternal: true
  }, title), /* @__PURE__ */ React.createElement(import_react30.HStack, null, technologies.map((tech, index) => /* @__PURE__ */ React.createElement(Tag2, {
    key: index,
    name: tech,
    mt: "1px",
    interactive: false,
    mr: "auto"
  }))))), /* @__PURE__ */ React.createElement(import_framer_motion7.AnimatePresence, null, /* @__PURE__ */ React.createElement(import_framer_motion7.motion.div, {
    layout: true,
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 }
  }, !isOpen && /* @__PURE__ */ React.createElement(import_react30.Text, {
    fontSize: "sm",
    color: "textColor",
    noOfLines: { base: 2 }
  }, description))), /* @__PURE__ */ React.createElement(import_framer_motion7.AnimatePresence, null, /* @__PURE__ */ React.createElement(import_framer_motion7.motion.div, {
    layout: true,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    variants: { exit: { transition: { staggerChildren: 0.1 } } }
  }, isOpen && /* @__PURE__ */ React.createElement(import_react30.Text, {
    fontSize: "sm",
    color: textColor
  }, description)))))));
};
var card_default = ProjectCard;

// app/components/home/projects/index.tsx
var import_framer_motion8 = require("framer-motion");
var ORANGE = `#ff9400`;
var Projects = ({ projects: projects2 }) => /* @__PURE__ */ React.createElement(import_react32.VStack, {
  align: "start",
  spacing: 8
}, /* @__PURE__ */ React.createElement(header_default, {
  underlineColor: ORANGE,
  mt: 0,
  mb: 0
}, "Projects"), /* @__PURE__ */ React.createElement(import_framer_motion8.AnimateSharedLayout, null, /* @__PURE__ */ React.createElement(import_react32.SimpleGrid, {
  columns: 1,
  spacing: 4,
  mt: 5,
  w: "100%"
}, projects2.map((project, index) => /* @__PURE__ */ React.createElement(MotionBox, {
  whileHover: { y: -5 },
  key: index
}, /* @__PURE__ */ React.createElement(card_default, {
  title: project.title,
  description: project.desc,
  blurHash: project.blurHash,
  logo: project.logo,
  link: project.link,
  technologies: project.technologies
}))))));
var projects_default = Projects;

// app/components/home/home.tsx
var ANIMATION_DURATION = 0.5;
var ORANGE2 = `#ff9400`;
var Home = ({ projects: projects2 }) => {
  const linkColor = useLinkColor();
  return /* @__PURE__ */ import_react34.default.createElement(import_react33.Flex, {
    direction: "column",
    align: "center"
  }, /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, null), /* @__PURE__ */ import_react34.default.createElement(import_react33.Flex, {
    direction: [`column`, `column`, `row`]
  }, /* @__PURE__ */ import_react34.default.createElement(MotionBox, {
    opacity: "0",
    initial: { translateX: -150, opacity: 0 },
    animate: {
      translateX: 0,
      opacity: 1,
      transition: {
        duration: ANIMATION_DURATION
      }
    },
    m: "auto",
    mb: [16, 16, `auto`]
  }, /* @__PURE__ */ import_react34.default.createElement(import_react33.Avatar, {
    size: `2xl`,
    src: `https://avatars.githubusercontent.com/u/30037764?v=4`
  })), /* @__PURE__ */ import_react34.default.createElement(MotionFlex, {
    ml: [`auto`, `auto`, 16],
    m: [`auto`, `initial`],
    w: [`90%`, `85%`, `80%`],
    maxW: "800px",
    opacity: "0",
    justify: "center",
    direction: "column",
    initial: {
      opacity: 0,
      translateX: 150
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: ANIMATION_DURATION
      }
    }
  }, /* @__PURE__ */ import_react34.default.createElement(header_default, {
    underlineColor: ORANGE2,
    emoji: "\u{1F44B}",
    mt: 0
  }, "Hey!"), /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, {
    as: "h2",
    fontSize: "2xl",
    fontWeight: "400",
    textAlign: "left"
  }, "My name is", ` `, /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, {
    as: "strong",
    fontWeight: "600"
  }, "Jotyy"), ` `, "and I'm a", ` `, /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, {
    as: "span",
    whiteSpace: "nowrap"
  }, "Full Stack Developer and"), ` `, /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, {
    as: "span",
    whiteSpace: "nowrap"
  }, "a blockchain lover\xA0"), "from", ` `, /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, {
    as: "span",
    whiteSpace: "nowrap"
  }, "CN")), /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, {
    as: "h2",
    fontSize: "2xl",
    fontWeight: "400",
    mt: 5,
    textAlign: "left"
  }, "This is my digital garden, where I write about the things I'm working on and share what I've learned. \u{1F60A}"))), /* @__PURE__ */ import_react34.default.createElement(MotionBox, {
    w: "100%",
    opacity: "0",
    initial: {
      translateY: 80
    },
    animate: {
      translateY: 0,
      opacity: 1,
      transition: {
        delay: ANIMATION_DURATION - 0.1,
        duration: ANIMATION_DURATION
      }
    }
  }, /* @__PURE__ */ import_react34.default.createElement(import_react33.Box, {
    mt: 10
  }, /* @__PURE__ */ import_react34.default.createElement(import_react33.Stack, {
    mb: 10,
    mx: [0, 0, 10],
    padding: 4,
    align: "start",
    borderLeft: "4px solid",
    borderColor: "#53c8c4",
    color: `whatsapp`,
    _hover: { shadow: `lg` },
    backgroundColor: (0, import_react33.useColorModeValue)(`gray.100`, `#1e2533`),
    rounded: "sm",
    fontSize: "md"
  }, /* @__PURE__ */ import_react34.default.createElement(import_react33.Text, {
    textAlign: "center",
    color: "#53c8c4",
    fontWeight: "bold"
  }, "Highlights"), /* @__PURE__ */ import_react34.default.createElement(import_react33.UnorderedList, {
    textAlign: "left",
    paddingLeft: 5,
    m: 0
  }, /* @__PURE__ */ import_react34.default.createElement(import_react33.ListItem, null, /* @__PURE__ */ import_react34.default.createElement(import_react33.Link, {
    as: import_remix10.Link,
    to: `/tech-stack`,
    color: linkColor
  }, "Tech Stack")))), /* @__PURE__ */ import_react34.default.createElement(projects_default, {
    projects: projects2
  }))));
};
var home_default = Home;

// app/data/projects.ts
init_react();
var projects = [
  {
    id: 1,
    title: `Lattice Wallet Desktop`,
    logo: `/assets/images/projects/pp.png`,
    blurHash: `L4ADc400P*Zi4Tu1y;Qo00pH#YXl`,
    link: ``,
    desc: `Lattice wallet Desktop is a decentralize wallet based on web3 and working on lattice blockchain. It supports multiple platforms Windows/MacOS/Linux.`,
    technologies: [`electron`, `web3`, `typescript`]
  },
  {
    id: 2,
    title: `Lattice.js`,
    link: ``,
    logo: `/assets/images/projects/notch.png`,
    blurHash: `L0Aer?tjH[tPyAayj[j[00ay%xkB`,
    desc: `This is a project made for Lattice BlockChain. Providing a simple way to take interaction with our chain. It's all written in TypeScript and using memony structure`,
    technologies: [`typescript`, `blockchain`, `dapp`]
  },
  {
    id: 3,
    title: `Lattice Wallet Mobile`,
    logo: `/assets/images/projects/workof.png`,
    blurHash: `L2M5%%0000EN00I:-oIp00kC?^sl`,
    link: ``,
    desc: `Lattice Wallet Mobile is a decentralize wallet application based on web3.dart and working on lattice blockchain. It supports multiple platforms Android/iOS.`,
    technologies: [`flutter`, `dart`, `web3`]
  },
  {
    id: 4,
    title: `He Xing Yue Che`,
    logo: `/assets/images/projects/souq.png`,
    blurHash: `L1O^uE0679I00AGT?.H{00y7p2tK`,
    link: ``,
    desc: `A Online taxi calling service application that build with native Android. It's already working well for over 3years.`,
    technologies: [`kotlin`, `android`]
  },
  {
    id: 5,
    title: `SmartCMS`,
    logo: `/assets/images/projects/gosave.png`,
    blurHash: `L09sWSxdH;s?%6axWAfk00V?%jax`,
    link: ``,
    desc: `The SmartCMS app is an IoT4.0 service, it makes factory working smarter with CMS system and device monitoring. Also it is a full stack project developed all by myself.`,
    technologies: [`nodejs`, `nestjs`, `react`]
  }
];

// route:D:\PersonalProjects\my-portfolio\app\routes\index.tsx
var loader5 = () => {
  return projects;
};
function Index() {
  return /* @__PURE__ */ React.createElement(pageLayout_default, {
    title: "Jotyy - Full Stack Developer"
  }, /* @__PURE__ */ React.createElement(home_default, {
    projects
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "442e99f4", "entry": { "module": "/build/entry.client-Q277D2N3.js", "imports": ["/build/_shared/chunk-CLPNRSBO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7TOR7BCI.js", "imports": ["/build/_shared/chunk-EGHF7JHN.js", "/build/_shared/chunk-3IQ2FFBO.js", "/build/_shared/chunk-QGVXN6MC.js", "/build/_shared/chunk-NRHD6BAO.js", "/build/_shared/chunk-YARXEFSV.js", "/build/_shared/chunk-XSQ6UOR2.js", "/build/_shared/chunk-4QPIW6F2.js", "/build/_shared/chunk-Z5TIKQG5.js", "/build/_shared/chunk-RJL2DGWZ.js", "/build/_shared/chunk-EKULA5TV.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-XXS64F46.js", "imports": ["/build/_shared/chunk-JDY5WR23.js", "/build/_shared/chunk-SCNVAVAX.js", "/build/_shared/chunk-BLMQNX4L.js", "/build/_shared/chunk-UC3Y46TN.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/achievements": { "id": "routes/achievements", "parentId": "root", "path": "achievements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/achievements-JSHL6SAR.js", "imports": ["/build/_shared/chunk-JDY5WR23.js", "/build/_shared/chunk-BLMQNX4L.js", "/build/_shared/chunk-UC3Y46TN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "root", "path": "blog/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-H7PY6DY6.js", "imports": ["/build/_shared/chunk-OFDP4QVL.js", "/build/_shared/chunk-JDY5WR23.js", "/build/_shared/chunk-UC3Y46TN.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-I6VWLSAV.js", "imports": ["/build/_shared/chunk-OFDP4QVL.js", "/build/_shared/chunk-JDY5WR23.js", "/build/_shared/chunk-BLMQNX4L.js", "/build/_shared/chunk-UC3Y46TN.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-Y56P7PGC.js", "imports": ["/build/_shared/chunk-SCNVAVAX.js", "/build/_shared/chunk-BLMQNX4L.js", "/build/_shared/chunk-UC3Y46TN.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tech-stack": { "id": "routes/tech-stack", "parentId": "root", "path": "tech-stack", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tech-stack-XVSDSHZK.js", "imports": ["/build/_shared/chunk-JDY5WR23.js", "/build/_shared/chunk-BLMQNX4L.js", "/build/_shared/chunk-UC3Y46TN.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-442E99F4.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/achievements": {
    id: "routes/achievements",
    parentId: "root",
    path: "achievements",
    index: void 0,
    caseSensitive: void 0,
    module: achievements_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/tech-stack": {
    id: "routes/tech-stack",
    parentId: "root",
    path: "tech-stack",
    index: void 0,
    caseSensitive: void 0,
    module: tech_stack_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
