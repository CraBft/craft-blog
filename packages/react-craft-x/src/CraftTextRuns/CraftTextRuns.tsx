import { CraftTextRun as CraftTextRunType } from "@craftdocs/craft-extension-api";
import React, { ReactNode } from "react";
import CraftTextRun from "../CraftTextRun";
import Styled from "./CraftTextRuns.styled";

export type CraftTextRunsProps = {
  content: CraftTextRunType[];
};

const CraftTextRuns = ({ content, ...props }: CraftTextRunsProps) => {
  const renderCraftTextRuns = () => {
    const textNodes: ReactNode[] = [];
    for (let i = 0; i < content.length; ++i) {
      let text = content[i];
      let prev = i !== 0 ? content[i - 1] : null;
      let next = i + 1 < content.length ? content[i + 1] : null;

      if (text.highlightColor) {
        const childrenTextNodes: ReactNode[] = [];
        const parentKey = i;
        const parentText = text;
        const parentPrev = prev;
        const parentNext = next;

        while (
          i < content.length &&
          text.highlightColor &&
          text.highlightColor === next?.highlightColor
        ) {
          text = content[++i];
          prev = i !== 0 ? content[i - 1] : null;
          next = i + 1 < content.length ? content[i + 1] : null;

          if (text.link) {
            const linkeNodes: ReactNode[] = [];
            const parentKey = i;
            const parentText = text;
            const parentPrev = prev;
            const parentNext = next;
            if (text.link.type === "url") {
              while (
                i < content.length &&
                next?.link?.type === "url" &&
                text?.link?.type === "url" &&
                text?.link?.url === next?.link.url &&
                text.highlightColor &&
                text.highlightColor === next?.highlightColor
              ) {
                text = content[++i];
                prev = i !== 0 ? content[i - 1] : null;
                next = i + 1 < content.length ? content[i + 1] : null;

                linkeNodes.push(
                  <CraftTextRun key={i} text={text} prev={prev} next={next} />
                );
              }
            }
            childrenTextNodes.push(
              <CraftTextRun
                key={parentKey}
                text={parentText}
                prev={parentPrev}
                next={parentNext}
              >
                {linkeNodes}
              </CraftTextRun>
            );
          } else {
            childrenTextNodes.push(
              <CraftTextRun key={i} text={text} prev={prev} next={next} />
            );
          }
        }
        textNodes.push(
          <CraftTextRun
            key={parentKey}
            text={parentText}
            prev={parentPrev}
            next={parentNext}
          >
            {childrenTextNodes}
          </CraftTextRun>
        );
      } else if (text.link) {
        const linkeNodes: ReactNode[] = [];
        const parentKey = i;
        const parentText = text;
        const parentPrev = prev;
        const parentNext = next;
        if (text.link.type === "url") {
          while (
            i < content.length &&
            next?.link?.type === "url" &&
            text?.link?.type === "url" &&
            text?.link?.url === next?.link.url
          ) {
            text = content[++i];
            prev = i !== 0 ? content[i - 1] : null;
            next = i + 1 < content.length ? content[i + 1] : null;

            linkeNodes.push(
              <CraftTextRun key={i} text={text} prev={prev} next={next} />
            );
          }
        }

        textNodes.push(
          <CraftTextRun
            key={parentKey}
            text={parentText}
            prev={parentPrev}
            next={parentNext}
          >
            {linkeNodes}
          </CraftTextRun>
        );
      } else {
        textNodes.push(
          <CraftTextRun key={i} text={text} prev={prev} next={next} />
        );
      }
    }
    return textNodes;
  };

  return (
    <Styled.Container {...props}>
      <Styled.Relaytive>{renderCraftTextRuns()}</Styled.Relaytive>
    </Styled.Container>
  );
};

export default CraftTextRuns;
