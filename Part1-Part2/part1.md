## Process Notes

### 1. Fixed the navigation error

When I clicked the navigation menu, I noticed an error in the browser console:

```text
Uncaught SyntaxError: Failed to execute 'querySelector' on 'Document':
'[http://127.0.0.1:5500/breezy-fulltime-test.html#features]' is not a valid selector.
```

I first looked at the console error and then found the JavaScript function responsible for the navigation. The problem was that the code was using:

```js
document.querySelector(a.href)
```

`a.href` returns the full URL, such as:

```text
http://127.0.0.1:5500/breezy-fulltime-test.html#features
```

That full URL is not a valid CSS selector for `querySelector()`.

I changed it to:

```js
document.querySelector(a.getAttribute('href'))
```

`getAttribute('href')` returns only the value from the HTML attribute, such as:

```text
#features
```

which can be used correctly as a selector.

The console error was useful because it directly pointed me toward the navigation code and helped me trace the problem back to how the `href` value was being passed to `querySelector()`.
