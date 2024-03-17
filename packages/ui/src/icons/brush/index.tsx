import { Icon, IconConsumer, icon } from '@/ui/components/icon';

export const BrushIcon = icon(({ ...props }) => (
  <Icon size={16} viewBox="0 0 16 16" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#ffffff' } = { fill: '#ffffff' }) => (
        <path d="M14.0859 1C14.3516 1 14.599 1.04948 14.8281 1.14844C15.0573 1.2474 15.2604 1.38542 15.4375 1.5625C15.6146 1.73958 15.75 1.9401 15.8438 2.16406C15.9375 2.38802 15.9896 2.63802 16 2.91406C16 3.16927 15.9531 3.41146 15.8594 3.64062C15.7656 3.86979 15.625 4.07812 15.4375 4.26562C13.8594 5.84375 12.2839 7.42188 10.7109 9C9.13802 10.5781 7.5599 12.1562 5.97656 13.7344C5.94531 14.0521 5.85938 14.349 5.71875 14.625C5.57812 14.901 5.39844 15.1406 5.17969 15.3438C4.96094 15.5469 4.70573 15.7057 4.41406 15.8203C4.1224 15.9349 3.81771 15.9948 3.5 16H1.5C1.29167 16 1.09635 15.9609 0.914062 15.8828C0.731771 15.8047 0.572917 15.6979 0.4375 15.5625C0.302083 15.4271 0.195312 15.2682 0.117188 15.0859C0.0390625 14.9036 0 14.7083 0 14.5V14H0.5C0.635417 14 0.752604 13.9505 0.851562 13.8516C0.950521 13.7526 1 13.6354 1 13.5C1 13.1823 1.05729 12.8802 1.17188 12.5938C1.28646 12.3073 1.44792 12.0521 1.65625 11.8281C1.86458 11.6042 2.10417 11.4219 2.375 11.2812C2.64583 11.1406 2.94271 11.0547 3.26562 11.0234C4.84375 9.44531 6.42188 7.86979 8 6.29688C9.57812 4.72396 11.1562 3.14583 12.7344 1.5625C12.9167 1.38021 13.1224 1.24219 13.3516 1.14844C13.5807 1.05469 13.8255 1.00521 14.0859 1ZM4.5 11.2109C4.78646 11.3359 5.04167 11.5104 5.26562 11.7344C5.48958 11.9583 5.66406 12.2135 5.78906 12.5L6.69531 11.5938C6.3776 11.0521 5.94792 10.6224 5.40625 10.3047L4.5 11.2109ZM3.5 15C3.70833 15 3.90365 14.9609 4.08594 14.8828C4.26823 14.8047 4.42708 14.6979 4.5625 14.5625C4.69792 14.4271 4.80469 14.2682 4.88281 14.0859C4.96094 13.9036 5 13.7083 5 13.5C5 13.2917 4.96094 13.0964 4.88281 12.9141C4.80469 12.7318 4.69792 12.5729 4.5625 12.4375C4.42708 12.3021 4.26823 12.1953 4.08594 12.1172C3.90365 12.0391 3.70833 12 3.5 12C3.29167 12 3.09635 12.0391 2.91406 12.1172C2.73177 12.1953 2.57292 12.3021 2.4375 12.4375C2.30208 12.5729 2.19531 12.7318 2.11719 12.9141C2.03906 13.0964 2 13.2917 2 13.5C2 13.7865 1.92448 14.0521 1.77344 14.2969C1.6224 14.5417 1.41406 14.7266 1.14844 14.8516C1.24219 14.9505 1.35938 15 1.5 15H3.5ZM14.7344 3.5625C14.9115 3.38542 15 3.16927 15 2.91406C15 2.78906 14.9766 2.67188 14.9297 2.5625C14.8828 2.45312 14.8177 2.35417 14.7344 2.26562C14.651 2.17708 14.5547 2.11198 14.4453 2.07031C14.3359 2.02865 14.2161 2.00521 14.0859 2C13.8307 2 13.6146 2.08854 13.4375 2.26562L6.13281 9.57812C6.64844 9.92188 7.07812 10.3516 7.42188 10.8672L14.7344 3.5625Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));