import { theme } from 'antd'
import { Inter } from 'next/font/google'

const interFont = Inter({
  subsets: ['latin'],
})

export const Theme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Colors
    colorPrimary: '#007bff', // Blue color for primary elements
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorTextBase: '#000000', // Black text
    colorLink: '#007bff', // Blue links
    colorBgBase: '#f8f9fa', // Light gray background
    colorBgContainer: '#ffffff', // White container background
    colorBorder: '#d4d4d8',
    colorBorderSecondary: '#e4e4e7',
    colorSplit: 'rgba(24, 24, 27, 0.07)',
    // Typography
    fontFamily: `${interFont.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    linkDecoration: 'underline',

    //Form
    controlItemBgActive: '#f4f4f5',
    controlOutline: 'rgba(24, 24, 27, 0.1)',
    controlHeight: 36,
    controlHeightSM: 32,

    // Layout
    padding: 16,
    boxShadow:
      '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    borderRadius: 6,
    lineType: 'solid',
    lineWidth: 1,
    motion: false,
  },
  components: {
    Form: {
      itemMarginBottom: '22px',
    },

    Layout: {
      headerBg: '#007bff', // Blue topBar background color
      footerBg: '#ffffff', // White footer background color
      bodyBg: '#f8f9fa', // Light gray page background color
      siderBg: '#ffffff', // White leftBar background color
    },
    Menu: {
      activeBarBorderWidth: 0,
      itemHeight: 30,
      //topbar menu items
      horizontalItemSelectedColor: '#007bff', // Blue selected item color
      horizontalItemSelectedBg: 'transparent',
      //leftbar menu items
      itemSelectedColor: '#007bff', // Blue selected item color
      itemSelectedBg: 'transparent',
      itemActiveBg: 'transparent',
      //topbar and leftbar menu items
      itemHoverColor: '#007bff', // Blue hover item color
      itemHoverBg: 'transparent',
      itemColor: '#909090', // Gray item color
      itemBg: 'transparent',
      iconMarginInlineEnd: 8,
      iconSize: 16,
    },
    Button: {
      paddingInlineSM: 11,
      fontWeight: 500,
      colorPrimary: '#007bff', // Blue button color
      colorPrimaryHover: '#0056b3', // Darker blue on hover
      colorPrimaryActive: '#004085', // Even darker blue on active
      colorPrimaryOutline: '#007bff', // Blue outline for primary buttons
    },
    Calendar: {
      itemBg: '#ffffff', // White background for calendar items
      itemBorderColor: '#d4d4d8', // Light gray border for calendar items
      itemHoverBg: '#f8f9fa', // Light gray background on hover
      itemActiveBg: '#007bff', // Blue background for active items
      itemActiveColor: '#ffffff', // White text for active items
      itemTodayBorderColor: '#007bff', // Blue border for today's date
    },
    Card: {
      backgroundColor: '#ffffff', // White background for cards
      borderColor: '#d4d4d8', // Light gray border for cards
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Light shadow for cards
      borderRadius: 8, // Slightly rounded corners for cards
    },
  },
}
