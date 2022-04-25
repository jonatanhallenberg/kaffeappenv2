import styled from 'styled-components';

interface AlertListProps {
    children?: React.ReactNode;
    variant?: 'danger' | 'success';
}

interface StyledTextboxProps {
    variant?: 'danger' | 'success';
}

const StyledAlertList = styled.ul<StyledTextboxProps>`
    color: white;
    background-color: ${props => props.variant === 'danger' ? '#E45454' : '#97B09D'};
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: 'Scope one';
`;

const AlertList = ({ children, variant = 'danger' }: AlertListProps) => {
    return <StyledAlertList variant={variant}>{children}</StyledAlertList>
}

export default AlertList;