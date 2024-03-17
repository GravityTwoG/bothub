import { Icon, IconConsumer, icon } from '@/ui/components/icon';

export const CookieIcon = icon(({ ...props }) => (
  <Icon size={24} viewBox="0 0 24 24" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#848798' } = { fill: '#848798' }) => (
        <path d="M9.99864 19C8.75383 19 7.584 18.764 6.48917 18.2921C5.39433 17.8201 4.44198 17.1802 3.6321 16.3722C2.82222 15.5636 2.18122 14.6128 1.70909 13.5198C1.23696 12.4267 1.0006 11.2588 1 10.016C1 8.80321 1.25136 7.62421 1.75409 6.47906C2.25681 5.3339 2.9542 4.3268 3.84627 3.45775C4.73833 2.5893 5.79927 1.93048 7.02909 1.48128C8.2589 1.03209 9.6087 0.897326 11.0785 1.07701C11.3034 1.10695 11.4759 1.20068 11.5959 1.3582C11.7159 1.51572 11.7834 1.72894 11.7984 1.99786C11.8284 2.95615 11.4756 4.30364 12.1583 4.98523C12.841 5.66681 14.3636 5.49472 15.3078 5.52406C15.6228 5.53904 15.8627 5.62888 16.0277 5.79358C16.1927 5.95829 16.2827 6.21283 16.2977 6.55722C16.3277 7.1861 16.0799 8.17453 16.4327 8.57881C16.7854 8.98309 17.7156 8.81818 18.3449 9.02781C18.5548 9.10267 18.7162 9.21138 18.829 9.35392C18.9418 9.49647 18.9979 9.67226 18.9973 9.88128C19.0273 11.1241 18.8098 12.2995 18.3449 13.4075C17.8799 14.5155 17.2425 15.4852 16.4327 16.3165C15.6228 17.1472 14.6629 17.8021 13.5531 18.2813C12.4433 18.7604 11.2584 19 9.99864 19ZM8.64884 8.21925C9.02378 8.21925 9.34264 8.08838 9.6054 7.82665C9.86816 7.56492 9.99924 7.24659 9.99864 6.87166C9.99864 6.49733 9.86756 6.17929 9.6054 5.91756C9.34324 5.65583 9.02438 5.52466 8.64884 5.52406C8.2739 5.52406 7.95535 5.65523 7.69319 5.91756C7.43103 6.17989 7.29964 6.49792 7.29905 6.87166C7.29905 7.24599 7.43043 7.56432 7.69319 7.82665C7.95595 8.08898 8.2745 8.21985 8.64884 8.21925ZM6.84911 12.7112C7.22406 12.7112 7.54291 12.5804 7.80567 12.3186C8.06843 12.0569 8.19951 11.7386 8.19891 11.3636C8.19891 10.9893 8.06783 10.6713 7.80567 10.4095C7.54351 10.1478 7.22466 10.0166 6.84911 10.016C6.47417 10.016 6.15562 10.1472 5.89346 10.4095C5.6313 10.6719 5.49992 10.9899 5.49932 11.3636C5.49932 11.738 5.6307 12.0563 5.89346 12.3186C6.15622 12.581 6.47477 12.7118 6.84911 12.7112ZM12.6982 13.6096C12.9532 13.6096 13.1671 13.5234 13.3398 13.3509C13.5126 13.1784 13.5987 12.9652 13.5981 12.7112C13.5981 12.4567 13.5117 12.2435 13.3389 12.0716C13.1662 11.8997 12.9526 11.8134 12.6982 11.8128C12.4433 11.8128 12.2297 11.8991 12.0575 12.0716C11.8854 12.2441 11.799 12.4573 11.7984 12.7112C11.7984 12.9658 11.8848 13.1793 12.0575 13.3518C12.2303 13.5243 12.4439 13.6102 12.6982 13.6096Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));