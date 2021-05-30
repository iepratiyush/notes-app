import { IHS, ToDoCard } from "./shared.interface";

export const COLOR_MAP_LIGHT: IHS = {
    first:  '#F8BBD0',
    second: '#E1BEE7',
    third:  '#FFF59D',
    fourth: '#B39DDB',
    fifth:  '#9FA8DA'
}

export const COLOR_MAP_DARK: IHS = {
    first:  '#D81B60',
    second: '#8E24AA',
    third:  '#F57F17',
    fourth: '#512DA8',
    fifth:  '#303F9F'
}

export const TO_DO_CARD: ToDoCard[] = [
    {
        text: 'Note1',
        color: 'first'
    },
    {
        text: 'Note2',
        color: 'second'
    },
    {
        text: 'Note3',
        color: 'fourth'
    },
    {
        text: 'Note4',
        color: 'fifth'
    },
];

export const DONE_CARD: ToDoCard[] = [
    {
        text: 'Note5',
        color: 'third'
    },
    {
        text: 'Note6',
        color: 'second'
    },
];


