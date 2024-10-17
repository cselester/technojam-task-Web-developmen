document.getElementById('translateButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const targetLanguage = document.getElementById('languageSelect').value;

    if (!inputText) {
        alert('Please enter text to translate.');
        return;
    }

    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|${targetLanguage}`);
        const data = await response.json();
        
        if (data.responseData.translatedText) {
            document.getElementById('outputText').innerText = data.responseData.translatedText;
        } else {
            document.getElementById('outputText').innerText = 'Translation not available.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('outputText').innerText = 'Error occurred while translating.';
    }
});
