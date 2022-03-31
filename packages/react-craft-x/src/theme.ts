import {
  Color,
  CraftCardBackgroundColorKey,
  CraftTableCellFillColor,
  FontStyle,
  TextHighlightColor,
} from '@craftdocs/craft-extension-api'
import { css } from 'styled-components'

type screen = {
  maxWidth: string
  paddingX: string
}

export type colors = {
  color: Record<Color, string>
  background: Record<Color, string>
  fontStyle: Record<FontStyle, ReturnType<typeof css>>
  text: {
    highlightColor: Record<TextHighlightColor, string>
    anchoredHighlightColor: Record<
      | 'beachGradient'
      | 'nightSkyGradient'
      | 'sunsetGradient'
      | 'orangeGradient'
      | 'goldGradient',
      string
    >
    card: {
      backgroundColorKey: Record<CraftCardBackgroundColorKey, string>
    }
  }
  table: {
    fillColor: Record<CraftTableCellFillColor, string>
  }
}

export type common = {
  round: string
  marginX: string
}

export type theme = {
  common: common
  screen: screen
  light: colors
}

export const theme: theme = {
  common: {
    round: '4px',
    marginX: '10px',
  },
  screen: {
    maxWidth: '780px',
    paddingX: '20px',
  },
  light: {
    background: {
      text: '#e9e9e9',
      text1: '#e6e6e6',
      text2: '#eff0f1',
      text3: '#f4f4f5',
      text4: '#f5f6f7',
      grey: '#e8e9ea',
      grey1: '#eceef0',
      grey2: '#f0f1f3',
      grey3: '#f3f4f6',
      grey4: '#f6f7f9',
      pink: '#f0e6f3',
      pink1: '#f4e6f9',
      pink2: '#f9e6ff',
      pink3: '#fee6fa',
      pink4: '#ffe6f6',
      purple: '#e6e6ef',
      purple1: '#e6e6f5',
      purple2: '#e6e6ff',
      purple3: '#eee6ff',
      purple4: '#f4e6ff',
      blue: '#e6ebf3',
      blue1: '#e6edf8',
      blue2: '#e6f0ff',
      blue3: '#e6f3ff',
      blue4: '#e6f5ff',
      cyan: '#e6eeef',
      cyan1: '#e6f3f6',
      cyan2: '#e6f8fc',
      cyan3: '#e6fafb',
      cyan4: '#e6fbfa',
      green: '#e6f0ec',
      green1: '#e6f5f0',
      green2: '#e6faf3',
      green3: '#e6fbeb',
      green4: '#f2fbe6',
      olive: '#e9ede6',
      olive1: '#eaf1e6',
      olive2: '#ecf5e6',
      olive3: '#f1f7e6',
      olive4: '#f5f7e6',
      red: '#f2e6ea',
      red1: '#f8e6ec',
      red2: '#fde6ea',
      red3: '#ffe6e6',
      red4: '#ffedea',
      yellow: '#f3ede6',
      yellow1: '#f9f1e6',
      yellow2: '#fff4e6',
      yellow3: '#fff7e6',
      yellow4: '#fef8e6',
    },
    color: {
      text: '#1f2225',
      text1: '#040405',
      text2: '#5a5f66',
      text3: '#7e8389',
      text4: '#8e9499',
      grey: '#1a2229',
      grey1: '#3c4d60',
      grey2: '#5c6b7b',
      grey3: '#778493',
      grey4: '#90a0b1',
      pink: '#5f047c',
      pink1: '#8604ae',
      pink2: '#af04e4',
      pink3: '#d704ba',
      pink4: '#e30491',
      purple: '#050453',
      purple1: '#06048c',
      purple2: '#0704e4',
      purple3: '#5004e4',
      purple4: '#8104e4',
      blue: '#043176',
      blue1: '#0445aa',
      blue2: '#045ce4',
      blue3: '#047ae4',
      blue4: '#048ee4',
      cyan: '#044a5b',
      cyan1: '#047994',
      cyan2: '#04a7cd',
      cyan3: '#04b3bd',
      cyan4: '#04bdb4',
      green: '#045e40',
      green1: '#048f60',
      green2: '#04b579',
      green3: '#04c433',
      green4: '#71c005',
      olive: '#1f4605',
      olive1: '#2c6505',
      olive2: '#3c8d05',
      olive3: '#699c05',
      olive4: '#88a105',
      red: '#6f0429',
      red1: '#a8043c',
      red2: '#d50929',
      red3: '#e30405',
      red4: '#e3432f',
      yellow: '#794805',
      yellow1: '#aa6506',
      yellow2: '#e38405',
      yellow3: '#e39905',
      yellow4: '#deaa05',
    },
    fontStyle: {
      system: css`
        font-family: Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
      `,
      'system-serif': css`
        font-family: 'Noto Serif', serif;
      `,
      'system-mono': css`
        font-family: 'Roboto Mono', monospace;
      `,
      'system-rounded': css`
        font-family: 'Varela Round', sans-serif;
      `,
    },
    table: {
      fillColor: {
        greyFill: '#C7C8C8',
        greyFill1: '#CCD1D8',
        greyFill2: '#D6D9DB',
        greyFill3: '#E2E2E3',
        greyFill4: '#E3E6E9',
        greyFill5: '#ECEDEE',
        greyFill6: '#F7F8F9',
        greyFill7: '#FAFAFB',
        purpleFill: '#CDCCFF',
        purpleFill1: '#E5E5FF',
        purpleFill2: '#F7F7FF',
        blueFill: '#C5D8FF',
        blueFill1: '#E3ECFF',
        blueFill2: '#F7FAFF',
        cyanFill: '#B7E6F6',
        cyanFill1: '#DEF4FB',
        cyanFill2: '#F9FDFE',
        oliveFill: '#CAE3BF',
        oliveFill1: '#E6F1DF',
        oliveFill2: '#F9FCF7',
        greenFill: '#B9EBD2',
        greenFill1: '#E1F7EB',
        greenFill2: '#F6FCF9',
        yellowFill: '#FFCFA1',
        yellowFill1: '#FFE9D4',
        yellowFill2: '#FFFAF4',
        pinkFill: '#FFC5E5',
        pinkFill1: '#F2C4FF',
        pinkFill2: '#FFE4F3',
        pinkFill3: '#FAE3FF',
        pinkFill4: '#FFF9FC',
        pinkFill5: '#FEF8FF',
        redFill: '#FEC9CB',
        redFill1: '#FFE7E8',
        redFill2: '#FFF9F9',
      },
    },
    text: {
      highlightColor: {
        yellow: '#fff999',
        lime: '#d3ffb0',
        green: '#b0ffd3',
        cyan: '#b1fffe',
        blue: '#c7e7ff',
        purple: '#e7d7ff',
        pink: '#ffd5f9',
        red: '#ffd6d6',
        grey: '#e3e6e8',
        beachGradient:
          'linear-gradient(90deg, rgb(40, 188, 190) 0%, rgb(57, 53, 221) 100%)',
        nightSkyGradient:
          'linear-gradient(90deg, rgb(36, 73, 254) 0%, rgb(202, 75, 167) 100%)',
        sunsetGradient:
          'linear-gradient(90deg, rgb(255, 113, 0) 0%, rgb(243, 0, 173) 100%)',
        orangeGradient:
          'linear-gradient(90deg, rgb(243, 170, 0) 0%, rgb(228, 62, 41) 100%)',
        goldGradient:
          'linear-gradient(90deg, rgb(177, 106, 77) 0%, rgb(213, 166, 56) 100%)',
      },
      anchoredHighlightColor: {
        beachGradient: 'rgb(49, 121, 206)',
        nightSkyGradient: 'rgb(119, 74, 211)',
        sunsetGradient: 'rgb(249, 57, 87)',
        orangeGradient: 'rgb(236, 116, 21)',
        goldGradient: 'rgb(195, 136, 67)',
      },
      card: {
        backgroundColorKey: {
          white: 'none',
          'dark-gray': 'none',
          blue: 'none',
          ocean: 'none',
          cyan: 'none',
          green: 'none',
          purple: 'none',
          magenta: 'none',
          bloodOrange: 'none',
          orange: 'none',
          brown: 'none',
          lightYellow: 'none',
          lightGreen: 'none',
          lightBlue: 'none',
          lightPink: 'none',
          blue_dimmed: 'none',
          ocean_dimmed: 'none',
          cyan_dimmed: 'none',
          green_dimmed: 'none',
          purple_dimmed: 'none',
          magenta_dimmed: 'none',
          bloodOrange_dimmed: 'none',
          orange_dimmed: 'none',
          brown_dimmed: 'none',
          lightYellow_dimmed: 'none',
          lightGreen_dimmed: 'none',
          lightBlue_dimmed: 'none',
          lightPink_dimmed: 'none',
          blue_vivid: 'none',
          ocean_vivid: 'none',
          cyan_vivid: 'none',
          green_vivid: 'none',
          purple_vivid: 'none',
          magenta_vivid: 'none',
          bloodOrange_vivid: 'none',
          orange_vivid: 'none',
          brown_vivid: 'none',
          lightYellow_vivid: 'none',
          lightGreen_vivid: 'none',
          lightBlue_vivid: 'none',
          lightPink_vivid: 'none',
        },
      },
    },
  },
}
