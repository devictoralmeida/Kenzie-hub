import styled, { css } from "styled-components";

interface IStyledHeadline {
  fontweight?: 'bold';
  fontsize: 'big' | 'medium' | 'small'
}

interface IParagraphStyles {
  color?: 'gray';
  fontweight?: 'bold';
}

export const HeadlineStyles = css<IStyledHeadline>`
  font-family: var(--font-primary);
  color: var(--color-grey-0);
  line-height: 1.6;
  font-weight: ${({ fontweight }) => (fontweight === "bold" ? 700 : 600)};
  ${({ fontsize }) => {
    switch (fontsize) {
      case "big":
        return css`
          font-size: 1.125rem;
        `;
      case "medium":
        return css`
          font-size: 1rem;
        `;

      case "small":
        return css`
          font-size: 0.875rem;
        `;
    }
  }}
`;

export const StyledHeadline1 = styled.h1<IStyledHeadline>`
  ${HeadlineStyles};
`;

export const StyledHeadline2 = styled.h2<IStyledHeadline>`
  ${HeadlineStyles};
`;

export const StyledHeadline3 = styled.h3<IStyledHeadline>`
  ${HeadlineStyles};
`;

export const ParagraphStyles = css<IParagraphStyles>`
  font-family: var(--font-primary);
  line-height: 1.6;
  color: ${({ color }) => (color === "gray" ? "#868E96" : "#ffffff")};
  font-weight: ${({ fontweight }) => (fontweight === "bold" ? 600 : 400)};
  font-size: 0.75rem;
`;

export const StyledParagraph = styled.p<IParagraphStyles>`
  ${ParagraphStyles}
`;

export const StyledSpan = styled.span`
  font-family: var(--font-primary);
  color: var(--color-negative);
  font-size: 0.75rem;
`;
