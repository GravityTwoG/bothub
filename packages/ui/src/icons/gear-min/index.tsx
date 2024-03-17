import { Icon, IconConsumer, icon } from '@/ui/components/icon';

export const GearMinIcon = icon(({ ...props }) => (
  <Icon size={18} viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#4785FF' } = { fill: '#4785FF' }) => (
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8797 1.15468C12.9029 1.0985 12.9458 1.05269 13.0003 1.02581C13.0548 0.998922 13.1172 0.9928 13.1758 1.00858L14.1982 1.28777C14.2567 1.30394 14.3074 1.34089 14.3407 1.39172C14.374 1.44254 14.3877 1.50377 14.3792 1.56395L14.2522 2.45753C14.8034 2.77473 15.2475 3.23203 15.5516 3.76838L16.4469 3.6483C16.5074 3.64023 16.5688 3.65461 16.6195 3.68871C16.6702 3.72281 16.7066 3.77429 16.722 3.83342L16.992 4.85809C17.0073 4.91714 17.0005 4.97972 16.9728 5.03408C16.9452 5.08844 16.8987 5.13083 16.842 5.15328L16.0057 5.4895C16.0063 6.11628 15.8388 6.73172 15.5206 7.27166L16.0708 7.98713C16.1079 8.03541 16.1262 8.0956 16.1221 8.1564C16.1181 8.2172 16.092 8.27443 16.0487 8.31735L15.2975 9.06283C15.2544 9.10579 15.197 9.13153 15.1362 9.13521C15.0755 9.1389 15.0154 9.12028 14.9674 9.08284L14.2562 8.52448C13.7142 8.83826 13.0978 9.00069 12.4716 8.99479L12.1275 9.83033C12.1043 9.88651 12.0615 9.93232 12.007 9.9592C11.9525 9.98609 11.8901 9.99221 11.8314 9.97643L10.8091 9.69824C10.7501 9.68225 10.6991 9.64523 10.6655 9.59417C10.632 9.54311 10.6183 9.48153 10.627 9.42106L10.7551 8.52748C10.2124 8.2148 9.76366 7.76208 9.45567 7.21663L8.56038 7.33671C8.49984 7.34478 8.43844 7.3304 8.38777 7.2963C8.33709 7.2622 8.30064 7.21072 8.2853 7.15159L8.01521 6.12692C7.99996 6.06787 8.00679 6.00529 8.03442 5.95093C8.06205 5.89657 8.10858 5.85418 8.16526 5.83173L9.00152 5.49551C9.00111 4.86875 9.16864 4.25335 9.48668 3.71335L8.9365 2.99788C8.89934 2.9496 8.88107 2.88941 8.88512 2.82861C8.88917 2.76781 8.91527 2.71058 8.95851 2.66766L9.70975 1.92218C9.7529 1.87922 9.81025 1.85348 9.87102 1.8498C9.93179 1.84611 9.99182 1.86473 10.0399 1.90217L10.7511 2.46053C11.2931 2.14675 11.9094 1.98432 12.5356 1.99022L12.8797 1.15468ZM14.4342 6.01785C14.3653 6.27146 14.247 6.50901 14.0863 6.71692C13.9256 6.92483 13.7255 7.09903 13.4974 7.22958C13.2694 7.36014 13.0179 7.44448 12.7572 7.47779C12.4966 7.51111 12.232 7.49275 11.9785 7.42376C11.7249 7.35477 11.4875 7.23651 11.2796 7.07572C11.0718 6.91492 10.8976 6.71475 10.7671 6.48664C10.5036 6.02594 10.4337 5.47936 10.573 4.96716C10.7123 4.45496 11.0493 4.01909 11.5098 3.75543C11.9704 3.49177 12.5168 3.42192 13.0288 3.56125C13.5408 3.70058 13.9766 4.03767 14.2401 4.49837C14.5037 4.95907 14.5735 5.50565 14.4342 6.01785ZM6.77882 7.21363C6.77151 7.15312 6.74237 7.09737 6.69688 7.05684C6.65139 7.0163 6.59267 6.99377 6.53174 6.99348H5.47241C5.41147 6.9935 5.35263 7.01578 5.30695 7.05613C5.26127 7.09648 5.23189 7.15213 5.22433 7.21263L5.1143 8.0932C4.67324 8.19298 4.25241 8.36726 3.8699 8.60853L3.16968 8.06418C3.12166 8.02675 3.06163 8.00813 3.00085 8.01181C2.94008 8.0155 2.88274 8.04123 2.83958 8.08419L2.09034 8.83368C2.0474 8.87685 2.02167 8.93422 2.01799 8.99501C2.0143 9.0558 2.03292 9.11585 2.07034 9.1639L2.61451 9.86435C2.37331 10.247 2.1991 10.668 2.09935 11.1092L1.21907 11.2192C1.15877 11.2268 1.10327 11.256 1.06296 11.3015C1.02264 11.347 1.00026 11.4056 1 11.4664V12.5251C1.00002 12.586 1.02229 12.6449 1.06263 12.6906C1.10297 12.7363 1.1586 12.7657 1.21907 12.7732L2.09935 12.8833C2.20038 13.3316 2.37743 13.7509 2.61451 14.1281L2.07034 14.8286C2.03292 14.8766 2.0143 14.9367 2.01799 14.9975C2.02167 15.0583 2.0474 15.1156 2.09034 15.1588L2.83958 15.9083C2.88274 15.9513 2.94008 15.977 3.00085 15.9807C3.06163 15.9844 3.12166 15.9657 3.16968 15.9283L3.8699 15.3839C4.24702 15.6211 4.66616 15.7982 5.1143 15.8993L5.22433 16.7799C5.23164 16.8404 5.26078 16.8961 5.30627 16.9366C5.35177 16.9772 5.41049 16.9997 5.47141 17H6.52974C6.59069 17 6.64953 16.9777 6.69521 16.9374C6.74089 16.897 6.77027 16.8414 6.77782 16.7809L6.88786 15.9003C7.32894 15.8006 7.74977 15.6263 8.13225 15.3849L8.83247 15.9293C8.8805 15.9667 8.94053 15.9854 9.0013 15.9817C9.06207 15.978 9.11942 15.9523 9.16257 15.9093L9.91181 15.1598C9.95476 15.1166 9.98048 15.0593 9.98417 14.9985C9.98785 14.9377 9.96924 14.8776 9.93182 14.8296L9.38764 14.1291C9.62472 13.7519 9.80177 13.3326 9.90281 12.8843L10.7831 12.7742C10.8436 12.7669 10.8993 12.7378 10.9398 12.6923C10.9803 12.6468 11.0029 12.588 11.0032 12.5271V11.4684C11.0031 11.4074 10.9809 11.3486 10.9405 11.3029C10.9002 11.2572 10.8446 11.2278 10.7841 11.2202L9.90381 11.1102C9.80406 10.669 9.62984 10.248 9.38865 9.86535L9.93282 9.1649C9.97024 9.11685 9.98885 9.0568 9.98517 8.99601C9.98149 8.93521 9.95576 8.87785 9.91281 8.83468L9.16257 8.08419C9.11942 8.04123 9.06207 8.0155 9.0013 8.01181C8.94053 8.00813 8.8805 8.02675 8.83247 8.06418L8.13225 8.60853C7.74998 8.36771 7.32951 8.19378 6.88886 8.0942L6.77882 7.21363ZM8.50237 11.9967C8.50237 12.6602 8.23889 13.2965 7.7699 13.7657C7.30091 14.2348 6.66483 14.4984 6.00158 14.4984C5.33833 14.4984 4.70224 14.2348 4.23325 13.7657C3.76426 13.2965 3.50079 12.6602 3.50079 11.9967C3.50079 11.3333 3.76426 10.697 4.23325 10.2278C4.70224 9.75868 5.33833 9.49511 6.00158 9.49511C6.66483 9.49511 7.30091 9.75868 7.7699 10.2278C8.23889 10.697 8.50237 11.3333 8.50237 11.9967Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));