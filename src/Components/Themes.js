import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
  body: "#E6E6FA",
  fontColor: "#000",
  navbar: "#ADD8E6",
  cardBody : "#ADD8E6",
  buttonStyleBackgoundColor : "#ADD8E6",
  buttonStyleBorderRadiusColor : "2px #000 solid",
  buttonStyleColor : "#000",
  buttonStyleSmallBackgoundColor : "#ADD8E6",
  buttonStyleSmallBorderRadiusColor : "2px #000 solid",
  buttonStyleSmallColor : "#000",
  main: "5px solid #ADD8E6",
  focus: "#E6E6FA"

}

export const darkTheme = {
  body: "#4F4F4F",
  fontColor: "#fff",
  navbar: "#7B68EE",
  cardBody :"#7B68EE",
  buttonStyleBackgoundColor : "#7B68EE",
  buttonStyleBorderRadiusColor : "2px #fff solid",
  buttonStyleColor : "#fff",
  hoverBackgroundColor: "#4F4F4F ",
  hoverBorderCorlor: "2px #fff solid",
  hoverColor: "#fff",
  buttonStyleSmallBackgoundColor : "#7B68EE",
  buttonStyleSmallBorderRadiusColor : "2px #fff solid",
  buttonStyleSmallColor : "#fff",
  main: "5px solid #7B68EE",
  focus: "#4F4F4F"
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

  .buttonStyle {
    background-color: ${props => props.theme.buttonStyleBackgoundColor};
    border: ${props => props.theme.buttonStyleBorderRadiusColor};
    color: ${props => props.theme.buttonStyleColor};
  }

  .buttonStyle:hover {
    background-color: ${props => props.theme.hoverBackgroundColor}; 
    color: ${props => props.theme.hoverColor};
    border: ${props => props.theme.hoverBorderCorlor};
  
  }

  .buttonStyleSmall {
    background-color: ${props => props.theme.buttonStyleSmallBackgoundColor};
    border: ${props => props.theme.buttonStyleSmallBorderRadiusColor};
    color: ${props => props.theme.buttonStyleSmallColor};
  }

  .buttonStyleSmall:hover {
    background-color: ${props => props.theme.hoverBackgroundColor}; 
    color: ${props => props.theme.hoverColor};
    border: ${props => props.theme.hoverBorderCorlor};
  
  }

  .main {
    border : ${props => props.theme.main};
  }

  .buttonStyle:focus {     
    background-color:${props => props.theme.focus};    
  }

`