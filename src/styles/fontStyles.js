import * as Font from 'expo-font';

// Load the custom font
async function loadFonts() {
  await Font.loadAsync({
    'Sora-Regular': require('../../assets/fonts/Sora-Regular.ttf'),
    // Add other font variations if needed
  });
}

// Call the function to load fonts
loadFonts();

export const fontFamily='Sora-Regular'