import styled from 'styled-components';

interface TextboxProps {
    children?: React.ReactNode;
    isValid?: boolean;
    placeholder?: string;
}

interface StyledTextboxProps {
    isValid?: boolean;
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
`;

const Textbox = ({ children, placeholder, isValid = true }: TextboxProps) => {
    return <StyledTextbox type="text" isValid={isValid} placeholder={placeholder}></StyledTextbox>
}

export default Textbox;