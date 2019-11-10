export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  shadow: string;
  text: string;
  border: string;
}

const theme: Theme = {
  primary: "#ff6666",
  secondary: "#f7f1f1",
  accent: "#ff7676",
  shadow: "rgba(100,100,100,0.1)",
  text: "#fff",
  border: "rgba(255, 255, 255, 0.3)",
};

export default theme;