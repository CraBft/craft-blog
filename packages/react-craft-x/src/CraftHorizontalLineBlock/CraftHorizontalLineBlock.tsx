import React from "react";
import styled from "styled-components";
import { CraftHorizontalLineBlock } from "@craftdocs/craft-extension-api";
import Styled, { CSS } from "./CraftHorizontalLineBlock.styled";

export type CraftHorizontalLineBlockProps = {
  block: CraftHorizontalLineBlock;
};

const CraftHorizontalLineBlock: React.VFC<CraftHorizontalLineBlockProps> = ({
  block,
  ...props
}) => {
  const HorizontalLine = styled(Styled[block.lineStyle])`
    ${CSS.base}
  `;

  return <HorizontalLine block={block} {...props} />;
};

export default CraftHorizontalLineBlock;
