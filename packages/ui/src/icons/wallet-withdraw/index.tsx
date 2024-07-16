import { Icon, IconConsumer, icon } from '@/ui/components/icon';

export const WalletWithdrawIcon = icon(({ ...props }) => (
  <Icon size={24} viewBox="0 0 24 24" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#4785FF' } = { fill: '#4785FF' }) => (
        <>
          <rect width="24" height="24" rx="4" fill="#313E62" />
          <path
            d="M5.55831 7.53125C5.41132 7.53161 5.27037 7.58977 5.16591 7.69318C5.06144 7.79659 5.00185 7.93694 5 8.08392V15.92C5 16.3937 5.09305 16.8703 5.38772 17.2636C5.68379 17.6584 6.19416 17.9023 6.76798 17.9023H16.857C18.0047 17.9023 19.0001 17.0423 19.0001 15.92V10.9319C19.0001 9.80961 18.0047 8.94958 16.857 8.94958H7.14301C6.53958 8.94958 6.11803 8.53508 6.11803 8.08392C6.11618 7.9367 6.05639 7.79614 5.95162 7.69269C5.84685 7.58924 5.70554 7.53124 5.55831 7.53125ZM12.0014 10.3947C12.8054 10.3947 13.5764 10.7141 14.1448 11.2825C14.7133 11.851 15.0327 12.622 15.0327 13.4259C15.0327 13.824 14.9543 14.2182 14.8019 14.5859C14.6496 14.9537 14.4263 15.2879 14.1448 15.5693C13.8634 15.8508 13.5292 16.0741 13.1614 16.2264C12.7937 16.3788 12.3995 16.4572 12.0014 16.4572C11.1975 16.4572 10.4265 16.1378 9.85803 15.5693C9.28957 15.0009 8.97021 14.2299 8.97021 13.4259C8.97021 12.622 9.28957 11.851 9.85803 11.2825C10.4265 10.7141 11.1975 10.3947 12.0014 10.3947Z"
            fill={fill}
          />
          <path
            d="M7.14301 6.09766C5.99678 6.09766 5 6.9605 5 8.08276C5 9.20502 5.99678 10.0665 7.14301 10.0665C7.29121 10.0661 7.43322 10.0069 7.53788 9.90202C7.64254 9.79709 7.70132 9.65494 7.70132 9.50673C7.70095 9.35877 7.64201 9.21698 7.53738 9.11236C7.43276 9.00774 7.29097 8.9488 7.14301 8.94842C6.54099 8.94842 6.11803 8.53392 6.11803 8.08276C6.11803 7.6316 6.54099 7.21851 7.14301 7.21851H15.6051C15.9942 7.21851 16.2987 7.52304 16.2987 7.91217V9.50673C16.2987 9.65494 16.3575 9.79709 16.4622 9.90202C16.5668 10.0069 16.7088 10.0661 16.857 10.0665C16.9306 10.0665 17.0033 10.052 17.0712 10.0238C17.1392 9.99572 17.2009 9.95449 17.2528 9.90252C17.3048 9.85054 17.346 9.78884 17.3742 9.72093C17.4023 9.65302 17.4168 9.58024 17.4168 9.50673V7.91357C17.4168 6.9182 16.599 6.09766 15.6051 6.09766H7.14301ZM11.6377 15.0955L10.3321 13.7885C10.2846 13.7409 10.2468 13.6845 10.2211 13.6223C10.1953 13.5601 10.1821 13.4935 10.1821 13.4262C10.1821 13.3589 10.1953 13.2923 10.2211 13.2301C10.2468 13.1679 10.2846 13.1114 10.3321 13.0638C10.3797 13.0163 10.4362 12.9785 10.4984 12.9528C10.5606 12.927 10.6272 12.9138 10.6945 12.9138C10.7618 12.9138 10.8284 12.927 10.8906 12.9528C10.9528 12.9785 11.0092 13.0163 11.0568 13.0638L11.4854 13.4924V12.1206C11.4854 11.8246 11.7223 11.606 12.0014 11.606C12.3003 11.606 12.5132 11.8584 12.5132 12.1221V13.4939L12.9207 13.085C12.9719 13.0278 13.0353 12.9827 13.1062 12.9531C13.1771 12.9235 13.2537 12.9101 13.3305 12.9138C13.4072 12.9176 13.4822 12.9385 13.5498 12.9749C13.6175 13.0114 13.6761 13.0625 13.7215 13.1245C13.8385 13.2965 13.8836 13.5756 13.6693 13.7871L12.3454 15.1096C12.2481 15.1982 12.1204 15.2462 11.9888 15.2436C11.8571 15.2409 11.7315 15.1879 11.6377 15.0955Z"
            fill={fill}
          />
        </>
      )}
    </IconConsumer>
  </Icon>
));
