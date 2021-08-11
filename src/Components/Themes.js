import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
  body: "#E6E6FA",
  fontColor: "#000",
  navbar: "#ADD8E6",
  cardBody : "#ADD8E6"

}

export const darkTheme = {
  body: "#4F4F4F",
  fontColor: "#fff",
  navbar: "#6A5ACD",
  cardBody :"#7B68EE"
}

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${props => props.theme.body}
  }

  .navbar {
    background-color: ${props => props.theme.navbar}
  }

  .card-body {
    background-color: ${props => props.theme.cardBody}
  }

`