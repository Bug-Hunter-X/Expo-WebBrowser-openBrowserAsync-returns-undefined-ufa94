# Expo WebBrowser.openBrowserAsync returns undefined

This issue describes a problem where `WebBrowser.openBrowserAsync` from Expo returns `undefined` when the user unexpectedly closes the browser.  This behavior is inconsistent and can lead to unexpected behavior in applications that rely on the result to perform further actions.

## Problem

The `WebBrowser.openBrowserAsync` function from Expo is designed to return an object containing information about the browser session. However, if the user closes the browser tab or window before the session completes, the function returns `undefined` instead of an object with `type: 'cancel'` as the documentation would suggest.

## Solution

The proposed solution utilizes a `try...catch` block to gracefully handle the unexpected `undefined` return from `WebBrowser.openBrowserAsync`. The code checks if the result is `undefined` and, if so, treats it as a cancellation by setting `type: 'cancel'` manually.

This ensures consistent handling regardless of how the browser is closed by the user. 