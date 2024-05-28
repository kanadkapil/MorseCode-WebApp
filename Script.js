// Morse Code Mappings
const morseEncodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..',
    'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----',
    '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '0': '-----', ' ': '/'
};

const morseDecodeMap = Object.fromEntries(Object.entries(morseEncodeMap).map(([k, v]) => [v, k]));

// Function to encode text to Morse code
function encodeToMorse(text) {
    return text.toUpperCase().split('').map(char => morseEncodeMap[char] || '?').join(' ');
}

// Function to decode Morse code to text
function decodeFromMorse(morseCode) {
    return morseCode.split(' ').map(code => morseDecodeMap[code] || '?').join('');
}

// Event listeners for buttons
document.getElementById('encodeBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encodedText = encodeToMorse(inputText);
    document.getElementById('outputText').value = encodedText;
});

document.getElementById('decodeBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decodedText = decodeFromMorse(inputText);
    document.getElementById('outputText').value = decodedText;
});

// Python and C++ code for download
const pythonCode = `
# Morse Code Mappings
morse_encode_map = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..',
    'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----',
    '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '0': '-----', ' ': '/'
}

morse_decode_map = {v: k for k, v in morse_encode_map.items()}

# Function to encode text to Morse code
def encode_to_morse(text):
    return ' '.join(morse_encode_map.get(char.upper(), '?') for char in text)

# Function to decode Morse code to text
def decode_from_morse(morse_code):
    return ''.join(morse_decode_map.get(code, '?') for code in morse_code.split())

# Main function
def main():
    while True:
        print("Morse Code Encoder/Decoder")
        print("1. Encode to Morse Code")
        print("2. Decode from Morse Code")
        print("3. Exit")
        choice = input("Choose an option (1, 2, or 3): ")

        if choice == '1':
            text = input("Enter text to encode: ")
            encoded_text = encode_to_morse(text)
            print("Encoded Morse Code:", encoded_text)
        elif choice == '2':
            morse_code = input("Enter Morse Code to decode (use space between characters and '/' for space between words): ")
            decoded_text = decode_from_morse(morse_code)
            print("Decoded Text:", decoded_text)
        elif choice == '3':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
`;

const cppCode = `
#include <iostream>
#include <unordered_map>
#include <string>
#include <sstream>
#include <algorithm>

using namespace std;

// Morse Code Mappings
unordered_map<char, string> morseEncodeMap = {
    {'A', ".-"},   {'B', "-..."}, {'C', "-.-."}, {'D', "-.."},  {'E', "."},
    {'F', "..-."}, {'G', "--."},  {'H', "...."}, {'I', ".."},   {'J', ".---"},
    {'K', "-.-"},  {'L', ".-.."}, {'M', "--"},   {'N', "-."},   {'O', "---"},
    {'P', ".--."},{'Q', "--.-"}, {'R', ".-."},  {'S', "..."},  {'T', "-"},
    {'U', "..-"},  {'V', "...-"}, {'W', ".--"},  {'X', "-..-"},{'Y', "-.--"},
    {'Z', "--.."}, {'1', ".----"},{'2', "..---"},{'3', "...--"},{'4', "....-"},
    {'5', "....."},{'6', "-...."},{'7', "--..."},{'8', "---.."},{'9', "----."},
    {'0', "-----"},{' ', " / "}
};

unordered_map<string, char> morseDecodeMap = {
    {".-", 'A'},   {"-...", 'B'}, {"-.-.", 'C'}, {"-..", 'D'},  {".", 'E'},
    {"..-.", 'F'}, {"--.", 'G'},  {"....", 'H'}, {"..", 'I'},   {".---", 'J'},
    {"-.-", 'K'},  {".-..", 'L'}, {"--", 'M'},   {"-.", 'N'},   {"---", 'O'},
    {".--.", 'P'}, {"--.-", 'Q'}, {".-.", 'R'},  {"...", 'S'},  {"-", 'T'},
    {"..-", 'U'},  {"...-", 'V'}, {".--", 'W'},  {"-..-", 'X'}, {"-.--", 'Y'},
    {"--..", 'Z'}, {".----", '1'},{"..---", '2'},{"...--", '3'},{"....-", '4'},
    {".....", '5'},{"-....", '6'},{"--...", '7'},{"---..", '8'},{"----.", '9'},
    {"-----", '0'},{" / ", ' '}
};

// Function to encode text to Morse code
string encodeToMorse(const string &text) {
    stringstream morseStream;
    for (const char &ch : text) {
        char upperChar = toupper(ch);
        if (morseEncodeMap.find(upperChar) != morseEncodeMap.end()) {
            morseStream << morseEncodeMap[upperChar] << " ";
        } else {
            morseStream << "? "; // Unknown character
        }
    }
    return morseStream.str();
}

// Function to decode Morse code to text
string decodeFromMorse(const string &morseCode) {
    stringstream textStream;
    stringstream morseStream(morseCode);
    string morseChar;
    while (morseStream >> morseChar) {
        if (morseDecodeMap.find(morseChar) != morseDecodeMap.end()) {
            textStream << morseDecodeMap[morseChar];
        } else {
            textStream << "?"; // Unknown Morse code
        }
    }
    return textStream.str();
}

// Main function
int main() {
    string input;
    int choice;

    cout << "Morse Code Encoder/Decoder\\n";
    cout << "1. Encode to Morse Code\\n";
    cout << "2. Decode from Morse Code\\n";
    cout << "Choose an option (1 or 2): ";
    cin >> choice;
    cin.ignore(); // Ignore the newline character after choice

    if (choice == 1) {
        cout << "Enter text to encode: ";
        getline(cin, input);
        string morseCode = encodeToMorse(input);
        cout << "Encoded Morse Code: " << morseCode << "\\n";
    } else if (choice == 2) {
        cout << "Enter Morse Code to decode (use space between characters and '/' for space between words): ";
        getline(cin, input);
        string decodedText = decodeFromMorse(input);
        cout << "Decoded Text: " << decodedText << "\\n";
    } else {
        cout << "Invalid choice.\\n";
    }

    return 0;
}
`;

// Function to create a blob and set the href attribute for download
function createDownloadLink(code, elementId) {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    document.getElementById(elementId).href = url;
}

// Create download links for Python and C++ files
createDownloadLink(pythonCode, 'downloadPython');
createDownloadLink(cppCode, 'downloadCpp');
