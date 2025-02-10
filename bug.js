import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log(result);
}

//In some cases, result is undefined when the browser is closed unexpectedly by the user.