interface ButtonType {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    fullWidth?: boolean;
}

const BaseButtonStyle = {
    borderRadius: 50,
    fontFamily: "Armata",
    fontSize: "19px",
    border: 0,
    lineHeight: "50px",
    padding: "0px 20px",
    textTransform: "uppercase"
} as React.CSSProperties;

const Button = ({ children, onClick, variant = "primary", fullWidth = false }: ButtonType) => {
    const ButtonStyle = {
        ...BaseButtonStyle,
        backgroundColor: variant === "primary" ? "#DDB63E" : "#97B09D",
        width: fullWidth ? "100%" : "auto"
    };

    return <button type="button" style={ButtonStyle} onClick={onClick}>{children}</button>
}

export default Button;