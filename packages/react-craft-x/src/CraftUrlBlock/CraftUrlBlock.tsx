import { CraftUrlBlock } from "@craftdocs/craft-extension-api";
import React from "react";
import styled from "styled-components";
import Styled, { CSS } from "./CraftUrlBlock.styled";

export type CraftUrlBlockProps = {
  block: CraftUrlBlock;
};

const CraftUrlBlock: React.VFC<CraftUrlBlockProps> = ({ block, ...props }) => {
  const { url, imageUrl, title, pageDescription, layoutStyle } = block;
  const CraftUrl = styled(Styled[block.layoutStyle])`
    ${CSS.base(block)}
  `;
  return (
    <Styled.a href={url}>
      <CraftUrl>
        {imageUrl && (
          <Styled.icon block={block}>
            <Styled.img src={imageUrl} />
          </Styled.icon>
        )}
        <Styled.meta>
          {title && <Styled.title>{title}</Styled.title>}
          {pageDescription && (
            <Styled.description>{pageDescription}</Styled.description>
          )}
          {url && layoutStyle !== "small" && <Styled.url>{url}</Styled.url>}
        </Styled.meta>
      </CraftUrl>
    </Styled.a>
  );
};

export default CraftUrlBlock;
