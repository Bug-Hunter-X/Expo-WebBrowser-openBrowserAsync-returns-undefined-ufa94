import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result;
  try {
    result = await WebBrowser.openBrowserAsync('https://example.com');
  } catch (error) {
    console.error("Error opening browser:", error);
    return; //Handle the error appropriately
  }

  if (result === undefined) {
    result = { type: 'cancel' };
  }

  console.log(result);
  // Handle result, considering the case where result.type === 'cancel'
}

// The solution handles undefined result by treating it as a cancellation.