import styled from 'styled-components';

interface TextboxProps {
    children?: React.ReactNode;
    isValid?: boolean;
    placeholder?: string;
    fullWidth?: boolean;
}

interface StyledTextboxProps {
    isValid?: boolean;
    fullWidth?: boolean;
}

const StyledTextbox = styled.input<StyledTextboxProps>`
    font-family: Armata;
    font-size: 17px;
    line-height: 50px;
    background-color: ${props => props.isValid ? 'auto' : '#FFD3D3'};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.isValid ? '#ADADAD' : '#E45454'};
    border-radius: 3px;
    width: ${ props => props.fullWidth ? '100%' : 'auto'};
`;

const Textbox = ({ children, placeholder, isValid = true, fullWidth = false }: TextboxProps) => {
    return <StyledTextbox type="text" isValid={isValid} fullWidth={fullWidth} placeholder={placeholder}></StyledTextbox>
}

export default Textbox;