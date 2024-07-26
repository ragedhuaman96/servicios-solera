import React, { FC } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
    onClick: any,
    variant?: 'success' | 'error' | 'text',
    children: React.ReactNode
}

const variantStyles:any = {
    success: css`
        border: 1px solid #4ac338;
        color: #4ac338;
    `,
    error: css`
        border: 1px solid red;
        color: red;
    `,
    text: css`
        color: #2e70b5;
    `
};

const StyledButton = styled.button<{ variant: 'success' | 'error' | 'text' }>`
  padding: 1rem;
  border-radius: 0.375rem;
  ${(props: { variant: string | number; }) => variantStyles[props.variant]}
`;

const Button: FC<ButtonProps> = ({ onClick, children, variant = 'text' }) => {
    return (
        <StyledButton onClick={onClick} variant={variant}>
            {children}
        </StyledButton>
    );
};

export default Button;