import { Icon, icon, IconConsumer } from '@/ui/components/icon';

export const BlogCircleIcon = icon(({ ...props }) => (
  <Icon size={24} viewBox="0 0 24 24" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#616D8D' } = { fill: '#616D8D' }) => (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM5.40512 18.5957C5.67462 18.8652 6.01062 19 6.41312 19H17.5869C17.9894 19 18.3257 18.865 18.5957 18.5949C18.8652 18.3254 19 17.9894 19 17.5869V8.87012L15.1299 5H6.41312C6.01062 5 5.67462 5.13504 5.40512 5.40512C5.13504 5.67462 5 6.01062 5 6.41313V17.5869C5 17.9894 5.13504 18.3257 5.40512 18.5957ZM15.9375 14.625V15.5H8.0625V14.625H15.9375ZM18.125 9.375L14 10L14.625 5.875L18.125 9.375ZM12 9.375H8.0625V8.5H12V9.375ZM15.9375 12.4375H8.0625V11.5625H15.9375V12.4375Z"
          fill={fill}
        />
      )}
    </IconConsumer>
  </Icon>
));