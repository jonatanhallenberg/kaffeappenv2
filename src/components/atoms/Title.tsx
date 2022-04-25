interface TitleType {
    children: React.ReactNode;
}

const TitleStyle = {
    fontFamily: "Scope One",
    fontSize: "30px",
    textTransform: "uppercase"
} as React.CSSProperties;

const Title = ({ children }: TitleType) => (<h1 style={TitleStyle}>{children}</h1>);

export default Title;