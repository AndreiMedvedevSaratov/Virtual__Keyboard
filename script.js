// Text area for output letters
const Output_Textarea = document.createElement('textarea');       


// Adding textarea for output
document.body.append(Output_Textarea);
Output_Textarea.classList.add('Output_Textarea');
// Output_Textarea.setAttribute('readonly', 'readonly');


// Constant for keyboard
const Main_Area = document.createElement('div');


// Creating keyboard
Main_Area.classList.add('main_area');
document.body.append(Main_Area);


// Creating rows in keyboard
const Main_Area_Rows = new DocumentFragment();

for (let i = 0; i < 5; i++) 
    {
        const Main_Area_Row = document.createElement('div');

        Main_Area_Row.classList.add('Main_Area_Row');
        Main_Area_Rows.append(Main_Area_Row);   
    }

Main_Area.append(Main_Area_Rows);


// Creating buttons in each row
for (let i = 0; i < 5; i++) 
    {
        const Temp_Row = new DocumentFragment();
        for (let i = 0; i < 15; i++) 
            {
                const Key = document.createElement('div');

                Key.classList.add('Key');
                Temp_Row.append(Key);
            }
        Main_Area.children[i].append(Temp_Row);
    }


// Remove unnecessary buttons
Main_Area.children[0].children[0].remove();
Main_Area.children[2].children[0].remove();
Main_Area.children[2].children[1].remove();
Main_Area.children[3].children[0].remove();
Main_Area.children[4].children[0].remove();
Main_Area.children[4].children[1].remove();
Main_Area.children[4].children[2].remove();
Main_Area.children[4].children[3].remove();
Main_Area.children[4].children[4].remove();
Main_Area.children[4].children[5].remove();


// Create not usual buttons
Main_Area.children[0].children[13].classList.add('Backspace');
Main_Area.children[1].children[0].classList.add('Tab');
Main_Area.children[1].children[14].classList.add('Delete');
Main_Area.children[2].children[0].classList.add('CapsLock');
Main_Area.children[2].children[12].classList.add('Enter');
Main_Area.children[3].children[0].classList.add('LeftShift');
Main_Area.children[3].children[12].classList.add('Arrow');
Main_Area.children[3].children[13].classList.add('RightShift');
Main_Area.children[4].children[0].classList.add('Control');
Main_Area.children[4].children[1].classList.add('Windows');
Main_Area.children[4].children[2].classList.add('Alt');
Main_Area.children[4].children[3].classList.add('Space');
Main_Area.children[4].children[4].classList.add('Alt');
Main_Area.children[4].children[5].classList.add('Control');
Main_Area.children[4].children[6].classList.add('Arrow');
Main_Area.children[4].children[7].classList.add('Arrow');
Main_Area.children[4].children[8].classList.add('Arrow');

// Info about operation system and the way to change keyboard layout
const Paragraph = document.createElement('p');  
document.body.append(Paragraph);
Paragraph.classList.add('Paragraph');
Paragraph.textContent = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: alt + shift';


//el.innetHTML = '<p>text</p>'



// Key codes for every button, each key is an object
const Key_Codes= [                                               
    [
        { Key_Code: 'Backquote', English: '`', Russian: 'ё', Output_Flag: true, CapsRus: 'Ё', CapsEng: '~' },
        { Key_Code: 'Digit1', English: '1', Russian: '1', Output_Flag: true, CapsRus: '!', CapsEng: '!' },
        { Key_Code: 'Digit2', English: '2', Russian: '2', Output_Flag: true, CapsRus: '"', CapsEng: '@' },
        { Key_Code: 'Digit3', English: '3', Russian: '3', Output_Flag: true, CapsRus: '№', CapsEng: '#' },
        { Key_Code: 'Digit4', English: '4', Russian: '4', Output_Flag: true, CapsRus: ';', CapsEng: '$' },
        { Key_Code: 'Digit5', English: '5', Russian: '5', Output_Flag: true, CapsRus: '%', CapsEng: '%' },
        { Key_Code: 'Digit6', English: '6', Russian: '6', Output_Flag: true, CapsRus: ':', CapsEng: '^' },
        { Key_Code: 'Digit7', English: '7', Russian: '7', Output_Flag: true, CapsRus: '?', CapsEng: '&' },
        { Key_Code: 'Digit8', English: '8', Russian: '8', Output_Flag: true, CapsRus: '*', CapsEng: '*' },
        { Key_Code: 'Digit9', English: '9', Russian: '9', Output_Flag: true, CapsRus: '(', CapsEng: '(' },
        { Key_Code: 'Digit0', English: '0', Russian: '0', Output_Flag: true, CapsRus: ')', CapsEng: ')' },
        { Key_Code: 'Minus', English: '-', Russian: '-', Output_Flag: true, CapsRus: '_', CapsEng: '_' },
        { Key_Code: 'Equal', English: '=', Russian: '=', Output_Flag: true, CapsRus: '+', CapsEng: '+' },
        { Key_Code: 'Backspace', English: 'Backspace', Russian: 'Backspace', Output_Flag: false, CapsRus: 'Backspace', CapsEng: 'Backspace' }
    ],

    [
        { Key_Code: 'Tab', English: 'Tab', Russian: 'Tab', Output_Flag: false, CapsRus: 'Tab', CapsEng: 'Tab' },
        { Key_Code: 'KeyQ', English: 'q', Russian: 'й', Output_Flag: true, CapsRus: 'Й', CapsEng: 'Q' },
        { Key_Code: 'KeyW', English: 'w', Russian: 'ц', Output_Flag: true, CapsRus: 'Ц', CapsEng: 'W' },
        { Key_Code: 'KeyE', English: 'e', Russian: 'у', Output_Flag: true, CapsRus: 'У', CapsEng: 'E' },
        { Key_Code: 'KeyR', English: 'r', Russian: 'к', Output_Flag: true, CapsRus: 'К', CapsEng: 'R' },
        { Key_Code: 'KeyT', English: 't', Russian: 'е', Output_Flag: true, CapsRus: 'Е', CapsEng: 'T' },
        { Key_Code: 'KeyY', English: 'y', Russian: 'н', Output_Flag: true, CapsRus: 'Н', CapsEng: 'Y' },
        { Key_Code: 'KeyU', English: 'u', Russian: 'г', Output_Flag: true, CapsRus: 'Г', CapsEng: 'U' },
        { Key_Code: 'KeyI', English: 'i', Russian: 'ш', Output_Flag: true, CapsRus: 'Ш', CapsEng: 'I' },
        { Key_Code: 'KeyO', English: 'o', Russian: 'щ', Output_Flag: true, CapsRus: 'Щ', CapsEng: 'O' },
        { Key_Code: 'KeyP', English: 'p', Russian: 'з', Output_Flag: true, CapsRus: 'З', CapsEng: 'P' },
        { Key_Code: 'BracketLeft', English: '[', Russian: 'х', Output_Flag: true, CapsRus: 'Х', CapsEng: '{' },
        { Key_Code: 'BracketRight', English: ']', Russian: 'ъ', Output_Flag: true, CapsRus: 'Ъ', CapsEng: '}' },
        { Key_Code: 'Backslash', English: '\\', Russian: '\\', Output_Flag: true, CapsRus: '/', CapsEng: '|' },
        { Key_Code: 'Delete', English: 'DEL', Russian: 'DEL', Output_Flag: false, CapsRus: 'DEL', CapsEng: 'DEL' },
    ],

    [
        { Key_Code: 'CapsLock', English: 'Caps Lock', Russian: 'Caps Lock', Output_Flag: false, CapsRus: 'Caps Lock', CapsEng: 'Caps Lock' },
        { Key_Code: 'KeyA', English: 'a', Russian: 'ф', Output_Flag: true, CapsRus: 'Ф', CapsEng: 'A' },
        { Key_Code: 'KeyS', English: 's', Russian: 'ы', Output_Flag: true, CapsRus: 'Ы', CapsEng: 'S' },
        { Key_Code: 'KeyD', English: 'd', Russian: 'в', Output_Flag: true, CapsRus: 'В', CapsEng: 'D' },
        { Key_Code: 'KeyF', English: 'f', Russian: 'а', Output_Flag: true, CapsRus: 'А', CapsEng: 'F' },
        { Key_Code: 'KeyG', English: 'g', Russian: 'п', Output_Flag: true, CapsRus: 'П', CapsEng: 'G' },
        { Key_Code: 'KeyH', English: 'h', Russian: 'р', Output_Flag: true, CapsRus: 'Р', CapsEng: 'H' },
        { Key_Code: 'KeyJ', English: 'j', Russian: 'о', Output_Flag: true, CapsRus: 'О', CapsEng: 'J' },
        { Key_Code: 'KeyK', English: 'k', Russian: 'л', Output_Flag: true, CapsRus: 'Л', CapsEng: 'K' },
        { Key_Code: 'KeyL', English: 'l', Russian: 'д', Output_Flag: true, CapsRus: 'Д', CapsEng: 'L' },
        { Key_Code: 'Semicolon', English: ';', Russian: 'ж', Output_Flag: true, CapsRus: 'Ж', CapsEng: ':' },
        { Key_Code: 'Quote', English: '\'', Russian: 'э', Output_Flag: true, CapsRus: 'Э', CapsEng: '"' },
        { Key_Code: 'Enter', English: 'Enter', Russian: 'Enter', Output_Flag: false, CapsRus: 'Enter', CapsEng: 'Enter' },
    ],

    [
        { Key_Code: 'ShiftLeft', English: 'Shift', Russian: 'Shift', Output_Flag: false, CapsRus: 'Shift', CapsEng: 'Shift' },
        { Key_Code: 'NoKey_Code', English: '\\', Russian: '\\', Output_Flag: true, CapsRus: '\\', CapsEng: '\\' },
        { Key_Code: 'KeyZ', English: 'z', Russian: 'я', Output_Flag: true, CapsRus: 'Я', CapsEng: 'Z' },
        { Key_Code: 'KeyX', English: 'x', Russian: 'ч', Output_Flag: true, CapsRus: 'Ч', CapsEng: 'X' },
        { Key_Code: 'KeyC', English: 'c', Russian: 'с', Output_Flag: true, CapsRus: 'С', CapsEng: 'C' },
        { Key_Code: 'KeyV', English: 'v', Russian: 'м', Output_Flag: true, CapsRus: 'М', CapsEng: 'V' },
        { Key_Code: 'KeyB', English: 'b', Russian: 'и', Output_Flag: true, CapsRus: 'И', CapsEng: 'B' },
        { Key_Code: 'KeyN', English: 'n', Russian: 'т', Output_Flag: true, CapsRus: 'Т', CapsEng: 'N' },
        { Key_Code: 'KeyM', English: 'm', Russian: 'ь', Output_Flag: true, CapsRus: 'Ь', CapsEng: 'M' },
        { Key_Code: 'Comma', English: ',', Russian: 'б', Output_Flag: true, CapsRus: 'Б', CapsEng: '<' },
        { Key_Code: 'Period', English: '.', Russian: 'ю', Output_Flag: true, CapsRus: 'Ю', CapsEng: '>' },
        { Key_Code: 'Slash', English: '\/', Russian: '.', Output_Flag: true, CapsRus: ',', CapsEng: '?' },
        { Key_Code: 'ArrowUp', English: '▲', Russian: '▲', Output_Flag: true, CapsRus: '▲', CapsEng: '▲' },
        { Key_Code: 'ShiftRight', English: 'Shift', Russian: 'Shift', Output_Flag: false, CapsRus: 'Shift', CapsEng: 'Shift' },
    ],

    [
        { Key_Code: 'ControlLeft', English: 'Ctrl', Russian: 'Ctrl', Output_Flag: false, CapsRus: 'Ctrl', CapsEng: 'Ctrl' },
        { Key_Code: 'MetaLeft', English: 'Win', Russian: 'Win', Output_Flag: false, CapsRus: 'Win', CapsEng: 'Win' },
        { Key_Code: 'AltLeft', English: 'Alt', Russian: 'Alt', Output_Flag: false, CapsRus: 'Alt', CapsEng: 'Alt' },
        { Key_Code: 'Space', English: ' ', Russian: ' ', Output_Flag: true, CapsRus: ' ', CapsEng: ' ' },
        { Key_Code: 'AltRight', English: 'Alt', Russian: 'Alt', Output_Flag: false, CapsRus: 'Alt', CapsEng: 'Alt' },
        { Key_Code: 'ControlRight', English: 'Ctrl', Russian: 'Ctrl', Output_Flag: false, CapsRus: 'Ctrl', CapsEng: 'Ctrl' },
        { Key_Code: 'ArrowLeft', English: '◄', Russian: '◄', Output_Flag: true, CapsRus: '◄', CapsEng: '◄' },
        { Key_Code: 'ArrowDown', English: '▼', Russian: '▼', Output_Flag: true, CapsRus: '▼', CapsEng: '▼' },
        { Key_Code: 'ArrowRight', English: '►', Russian: '►', Output_Flag: true, CapsRus: '►', CapsEng: '►' },
    ],
];


// Constant Language for English or Russian keyboard layout
let Current_Language = 'Russian';


// Working with local storage to install saved earlier language
if (localStorage.Stored_Language !== null) Current_Language = localStorage.Stored_Language;


// Constant for pressed CapsLock or not pressed CapsLock
let Caps_Lock_Pressed = 'No';  // Can be 'Yes' or 'No'


// Function for writing letters on buttons of keyboard
function Write_Letters_On_Keys() 
    {
        for (let i = 0; i < Main_Area.children.length; i++) 
            {
                for (let j = 0; j < Main_Area.children[i].children.length; j++) 
                    {
                        Main_Area.children[i].children[j].dataset.Key_Code = Key_Codes[i][j].Key_Code;
                        Main_Area.children[i].children[j].dataset.English = Key_Codes[i][j].English;
                        Main_Area.children[i].children[j].dataset.Russian = Key_Codes[i][j].Russian;
                        Main_Area.children[i].children[j].dataset.CapsEng = Key_Codes[i][j].CapsEng;
                        Main_Area.children[i].children[j].dataset.CapsRus = Key_Codes[i][j].CapsRus;
                        Main_Area.children[i].children[j].dataset.Output_Flag = Key_Codes[i][j].Output_Flag;
                        if (Caps_Lock_Pressed === 'No') Main_Area.children[i].children[j].textContent = Key_Codes[i][j][Current_Language];
                            else
                                {
                                    if (Current_Language === 'Russian') Main_Area.children[i].children[j].textContent = Key_Codes[i][j].CapsRus;
                                        else Main_Area.children[i].children[j].textContent = Key_Codes[i][j].CapsEng;
                                }
                        
                    }
            }
    }


// Writing letters on buttons of keyboard
Write_Letters_On_Keys();


// Constant for body
const Body = document.querySelector('body');


// Changing language keyboard layout by pressing "Alt" + "Shift"   
let Pressed_First_Key;

Body.addEventListener('keyup', (event) => 
    {
        if (event.keyCode === 16 || event.keyCode === 18) 
            {
                Pressed_First_Key = undefined;
            }
    });

Body.addEventListener('keydown', (event) => 
    {
        event.preventDefault();
        if ((Pressed_First_Key === 16 && event.keyCode === 18) || (Pressed_First_Key === 18 && event.keyCode === 16)) 
            {
                if (Current_Language === 'English') 
                    {
                        Current_Language = 'Russian';
                        localStorage.Stored_Language = "Russian";  // Working with local storage to save selected language
                    }
                    else 
                        {
                            Current_Language = 'English';
                            localStorage.Stored_Language = "English";  // Working with local storage to save selected language
                        }
                Write_Letters_On_Keys();
                return;
            }  
        if (event.keyCode === 16 || event.keyCode === 18) 
            {
                Pressed_First_Key = event.keyCode;
            }
    });
    

// Function for printing letter in output text area
function Output_Printing(Letter_For_Printing) 
    {
        let Char = '';
        
        if (Letter_For_Printing.dataset.Output_Flag === 'false') return;
        if (Current_Language === 'English' && Caps_Lock_Pressed === 'No') Char = Letter_For_Printing.dataset.English;
        if (Current_Language === 'Russian' && Caps_Lock_Pressed === 'No')  Char = Letter_For_Printing.dataset.Russian;
        if (Current_Language === 'English' && Caps_Lock_Pressed === 'Yes')  Char = Letter_For_Printing.dataset.CapsEng;
        if (Current_Language === 'Russian' && Caps_Lock_Pressed === 'Yes')  Char = Letter_For_Printing.dataset.CapsRus;

        Output_Textarea.textContent = Output_Textarea.textContent + Char;
    }

// What to do if click by left button of Mouse?
Main_Area.addEventListener('mousedown', event => 
    {
        if (event.target.classList.contains('Key')) 
            {
                Output_Printing(event.target);
                event.target.classList.add('Button_Pressed');
            }
    });

Main_Area.addEventListener('mouseup', event => 
    {
        if (event.target.classList.contains('Key')) 
            {
                event.target.classList.remove('Button_Pressed');
            }
    });

Main_Area.addEventListener('mouseout', event => 
    {
        if (event.target.classList.contains('Key')) 
            {
                event.target.classList.remove('Button_Pressed');
            }
    });


// What to do if button pressed
Body.addEventListener('keydown', (event) => 
    {
        let Current_Element = document.querySelector(`[data--key_-code="${event.code}"]`);
    
        Current_Element.classList.add('Button_Pressed');
        Output_Printing(Current_Element);
    });
    
Body.addEventListener('keyup', (event) => 
    {
        document.querySelector(`[data--key_-code="${event.code}"]`).classList.remove('Button_Pressed');
    });


// If CapsLock pressed changing keyboard state 
Body.addEventListener('keydown', (event) => 
    {
        if (event.keyCode === 20) 
            {
                if (Caps_Lock_Pressed === 'Yes') Caps_Lock_Pressed = 'No';
                    else Caps_Lock_Pressed = 'Yes';
                Write_Letters_On_Keys();
            }  
    });

Main_Area.addEventListener('mousedown', event => 
    {
        if (event.target.classList.contains('CapsLock')) 
            {
                event.target.classList.add('Button_Pressed');
                if (Caps_Lock_Pressed === 'Yes') Caps_Lock_Pressed = 'No';
                    else Caps_Lock_Pressed = 'Yes';
                Write_Letters_On_Keys();
            }
    });


// If Shift pressed changing keyboard state
Body.addEventListener('keydown', (event) => 
    {
        if (event.keyCode === 16) 
            {
                if (Caps_Lock_Pressed === 'Yes') Caps_Lock_Pressed = 'No';
                    else Caps_Lock_Pressed = 'Yes';
                Write_Letters_On_Keys();
            }  
    });

Body.addEventListener('keyup', (event) => 
    {
        if (event.keyCode === 16) 
            {
                if (Caps_Lock_Pressed === 'Yes') Caps_Lock_Pressed = 'No';
                    else Caps_Lock_Pressed = 'Yes';
                Write_Letters_On_Keys();
            }  
    });

// Pressing on shift by mouse not working    
/*    
Main_Area.addEventListener('mousedown', event => 
    {
        if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) 
            {
                if (Caps_Lock_Pressed === 'Yes') Caps_Lock_Pressed = 'No';
                    else Caps_Lock_Pressed = 'Yes';
                Write_Letters_On_Keys();
            }
    });

    
Main_Area.addEventListener('mouseup', event => 
    {
        if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) 
            {
                if (Caps_Lock_Pressed === 'Yes') Caps_Lock_Pressed = 'No';
                    else Caps_Lock_Pressed = 'Yes';
                Write_Letters_On_Keys();
            }
        
    });
*/
   

// If TAB pressed 
Body.addEventListener('keydown', (event) => 
    {
        if (event.keyCode === 9) Output_Textarea.textContent = Output_Textarea.textContent + '\t';
    });

Main_Area.addEventListener('mousedown', event => 
    {
        if (event.target.classList.contains('Tab')) Output_Textarea.textContent = Output_Textarea.textContent + '\t';
    });


// If Enter pressed 
Body.addEventListener('keydown', (event) => 
    {
        if (event.keyCode === 13) Output_Textarea.textContent = Output_Textarea.textContent + '\n';
    });

Main_Area.addEventListener('mousedown', event => 
    {
        if (event.target.classList.contains('Enter')) Output_Textarea.textContent = Output_Textarea.textContent + '\n';
    });


// If BackSpace pressed 
Body.addEventListener('keydown', (event) => 
    {
        if (event.keyCode === 8) 
            {
                Output_Textarea.setRangeText('', Output_Textarea.selectionStart - 1, Output_Textarea.selectionEnd);
            }  
    });

Main_Area.addEventListener('mousedown', event => 
    {
        if (event.target.classList.contains('Backspace')) 
            {
                Output_Textarea.setRangeText('', Output_Textarea.selectionStart - 1, Output_Textarea.selectionEnd);
            }
    });


// If Del pressed 
Body.addEventListener('keydown', (event) => 
    {
        if (event.keyCode === 46) 
            {
                Output_Textarea.setRangeText('', Output_Textarea.selectionStart, Output_Textarea.selectionEnd + 1);
            }  
    });

Main_Area.addEventListener('mousedown', event => 
    {
        if (event.target.classList.contains('Delete')) 
            {
                Output_Textarea.setRangeText('', Output_Textarea.selectionStart, Output_Textarea.selectionEnd + 1);
            }
    });


    
    
    

