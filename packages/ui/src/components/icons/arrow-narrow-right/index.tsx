import { Icon, IconConsumer, icon } from '../../icon';

export const ArrowNarrowRightIcon = icon(({ ...props }) => (
  <Icon size={20} viewBox="0 0 20 20" fill="none" {...props}>
    <IconConsumer>
      {({ fill } = { fill: '#616D8D' }) => (
        <path fillRule="evenodd" clipRule="evenodd" d="M12.293 5.293C12.4805 5.10553 12.7348 5.00021 13 5.00021C13.2652 5.00021 13.5195 5.10553 13.707 5.293L17.707 9.293C17.8945 9.48053 17.9998 9.73484 17.9998 10C17.9998 10.2652 17.8945 10.5195 17.707 10.707L13.707 14.707C13.5184 14.8892 13.2658 14.99 13.0036 14.9877C12.7414 14.9854 12.4906 14.8802 12.3052 14.6948C12.1198 14.5094 12.0146 14.2586 12.0123 13.9964C12.01 13.7342 12.1108 13.4816 12.293 13.293L14.586 11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H14.586L12.293 6.707C12.1055 6.51947 12.0002 6.26516 12.0002 6C12.0002 5.73484 12.1055 5.48053 12.293 5.293Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));
