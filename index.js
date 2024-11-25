/// <reference types='../CTAutocomplete' />

import Settings from './config';

const HelpLog = "\n&6===========================================\n&r - Welcome to Circuit Client!\n - To open the menu type /circuit in chat!\n&6===========================================";

register('command', (args) => {
    if(args == 'help') {
        ChatLib.chat(HelpLog);
    }
    else {
        Settings.openGUI();
    };
}).setName('circuit').setAliases('c');