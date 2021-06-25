import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secundary: string,
            text: string,
            lightText: string,
            background: string,
            lightGrey: string,
            white: string,
            black: string,
        },
        images:{
            src: string
        }
    }
}