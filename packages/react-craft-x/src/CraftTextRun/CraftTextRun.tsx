import React from "react";
import { CraftTextRun } from "@craftdocs/craft-extension-api";
import Styled from "./CraftTextRun.Styled";
import styled from "styled-components";

export type CraftAnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export interface CraftAnchor extends React.FC<CraftAnchorProps> {}

const CraftAnchorDefault: CraftAnchor = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export type CraftTextRunProps = {
  text: CraftTextRun;
  prev?: CraftTextRun | null;
  next?: CraftTextRun | null;
};

const CraftTextRun: React.FC<CraftTextRunProps> = ({
  text,
  children,
  prev,
  next,
  ...props
}) => {
  let styledText = (
    <Styled.Text text={text} prev={prev} next={next} {...props}>
      {text.text}
    </Styled.Text>
  );

  if (text.highlightColor && prev?.highlightColor !== text.highlightColor) {
    styledText = (
      <Styled.HighlightColor highlightColor={text.highlightColor}>
        {styledText}
        {children}
      </Styled.HighlightColor>
    );
  }

  if (text.isCode) {
    styledText = <Styled.Code>{styledText}</Styled.Code>;
  }

  const StyledAnchor = styled(CraftAnchorDefault)`
    ${Styled.anchor(text)}
  `;
  if (text.link) {
    if (text.link.type === "url") {
      if (
        prev?.link?.type !== "url" ||
        prev.link.url !== text.link.url ||
        prev?.highlightColor !== text.highlightColor
      ) {
        styledText = (
          <StyledAnchor href={text.link.url}>
            {styledText}
            {children}
          </StyledAnchor>
        );
      }
    }
  }

  return styledText;
};

export default CraftTextRun;
