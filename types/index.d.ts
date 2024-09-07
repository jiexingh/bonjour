
declare module '@heroicons/react/outline' {
  import { FunctionComponent, SVGProps } from 'react';

  export const SunIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  export const MoonIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  // 添加其他需要的图标
}

declare type DrawerValueType = 'img' | 'text';

declare interface SocialCardProps {
   socialKey: string;
   icon: string;
   title: string;
   subtitle: string;
   btnText: string;
   iconClassName?: string;
   buttonClassName?: string;
}

declare interface ConcatMeProps {
   socialKey: string;
   src: string;
   alt: string;
   value: string;
   valueType: DrawerValueType
}

declare interface WorkCardCardProps {
   icon: string;
   name: string;
   description: string;
   links: string;
}

declare module 'qrcode.react' {
  import * as React from 'react';

  interface QRCodeProps {
    value: string;
    size?: number;
    fgColor?: string;
    bgColor?: string;
    level?: 'L' | 'M' | 'Q' | 'H';
    includeMargin?: boolean;
    renderAs?: 'canvas' | 'svg';
  }

  export default class QRCode extends React.Component<QRCodeProps> {}
}