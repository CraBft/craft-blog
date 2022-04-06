import { Color, CraftBlock, TodoState } from '@craftdocs/craft-extension-api'
import styled from 'styled-components'
import { css } from 'styled-components'
import { baseStyle, theme } from '../theme'
import ToggleSvgr from '../svgr/Toggle'
import TodoChecked from '../svgr/TodoChecked'
import TodoCanceled from '../svgr/TodoCanceled'
import TodoUnchecked from '../svgr/TodoUnChecked'
import TodoCheckedR from '../svgr/TodoCheckedR'
import TodoCanceledR from '../svgr/TodoCanceledR'
import TodoUncheckedR from '../svgr/TodoUnCheckedR'

export const CSS = {
  base: css`
    box-sizing: border-box;
  `,
  color: (color: Color) => css`
    color: ${theme.light.color[color]};
  `,
  todo: (state: TodoState, isRounded: boolean) => css`
    width: 16px;
    height: 16px;

    ${state === 'checked'
      ? isRounded
        ? css`
            fill: ${theme.light.todo.rounded.checked};
          `
        : css`
            fill: ${theme.light.todo.squre.checked};
          `
      : css`
          fill: ${theme.light.todo.rounded.unChecked};
        `}
  `,
}

type TodoIconProps = {
  'data-state': TodoState
  'data-is-rounded': boolean
}

const Styled = {
  indent: styled.div<{ level: number }>`
    padding-left: ${({ level }) => level * 28}px; ;
  `,
  focusDecoration: {
    container: styled.blockquote`
      display: flex;
      box-sizing: border-box;
      margin: 0px;
    `,
    focus: styled.div<{
      block: CraftBlock
      prev?: CraftBlock
      next?: CraftBlock
    }>`
      background-color: ${({ block: { color } }) => theme.light.color[color]};
      min-width: 4px;
      max-width: 4px;

      ${({ prev, block }) =>
        !(prev && prev.color === block.color && prev.hasFocusDecoration) &&
        css`
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        `}
      ${({ next, block }) =>
        !(next && next.color === block.color && next.hasFocusDecoration) &&
        css`
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;
        `}
    `,
    padding: styled.div`
      padding-left: 14px;
    `,
  },
  blockDecoration: styled.div<{
    block: CraftBlock
    prev?: CraftBlock
    next?: CraftBlock
  }>`
    background-color: ${({ block: { color } }) => theme.light.background[color]};

    padding: 12px 10px;

    ${({ prev, block }) =>
      !(prev && prev.color === block.color && prev.hasBlockDecoration) &&
      css`
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      `}
    ${({ next, block }) =>
      !(next && next.color === block.color && next.hasBlockDecoration) &&
      css`
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      `}
  `,
  ul: styled.ul`
    padding: 0px;
    margin: 0px;
  `,
  ol: styled.ol`
    padding: 0px;
    margin: 0px;
  `,
  li: styled.li`
    display: flex;
    width: 100%;
  `,
  icon: styled.div<{
    block: CraftBlock
  }>`
    display: inline;
    min-width: 28px;
    padding: 0px 6px 0px 4px;
    box-sizing: border-box;
    ${({ block }) => block.type === 'textBlock' && theme.fontStyle[block.style.fontStyle]}
    ${({ block }) => block.type === 'textBlock' && baseStyle.font[block.style.textStyle]}
  `,
  todo: {
    container: styled.div`
      display: flex;
    `,
    icons: [
      {
        checked: styled(TodoChecked)<TodoIconProps>`
          ${(props) => CSS.todo(props['data-state'], props['data-is-rounded'])}
        `,
        canceled: styled(TodoCanceled)<TodoIconProps>`
          ${(props) => CSS.todo(props['data-state'], props['data-is-rounded'])}
        `,
        unchecked: styled(TodoUnchecked)<TodoIconProps>`
          ${(props) => CSS.todo(props['data-state'], props['data-is-rounded'])}
        `,
      },
      {
        checked: styled(TodoCheckedR)<TodoIconProps>`
          ${(props) => CSS.todo(props['data-state'], props['data-is-rounded'])}
        `,
        canceled: styled(TodoCanceledR)<TodoIconProps>`
          ${(props) => CSS.todo(props['data-state'], props['data-is-rounded'])}
        `,
        unchecked: styled(TodoUncheckedR)<TodoIconProps>`
          ${(props) => CSS.todo(props['data-state'], props['data-is-rounded'])}
        `,
      },
    ],
  },
  toggle: {
    details: styled.details`
      &[open] > summary > div > svg {
        transform: rotate(90deg);
      }
    `,
    summary: styled.summary`
      display: flex;
      cursor: pointer;
      &::marker {
        display: none;
      }
    `,
    icon: styled(({ color, hasChildren, ...props }: { color: Color; hasChildren: boolean }) => (
      <ToggleSvgr {...props} />
    ))`
      transition: all 0.3s ease 0s;
      width: 13px;
      height: 13px;
      fill: ${({ color }) => theme.light.color[color]};
      stroke: ${({ color }) => theme.light.color[color]};

      ${({ hasChildren }) =>
        !hasChildren &&
        css`
          opacity: 33.3%;
        `};
    `,
  },
}

export default Styled
