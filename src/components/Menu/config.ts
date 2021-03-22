import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.waterswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.waterswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/staking',
  },
  // {
  //   label: 'Referrals',
  //   icon: 'PoolIcon3',
  //   href: '/referrals',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xCd669f6266F94126471402264Aafb1966C5114b8',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xa70bd5d28ea7a4c10393c8110d9fcc2e18d421d0',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Water-Finance',
      },
      {
        label: 'Docs',
        href: 'https://water-finance.gitbook.io/water-finance/',
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon1',
    href: 'https://water-finance.gitbook.io/water-finance/security/audit',
  },
  {
    label: 'Roadmap',
    icon: 'GooseIcon',
    href: 'https://water-finance.gitbook.io/water-finance/roadmap',
  },
  {
    label: 'Hybrid Burning Mechanism',
    icon: 'AuditIcon',
    href: 'https://water-finance.gitbook.io/water-finance/tokenomics/hybrid-burning-mechanism',
  },
]

export default config
