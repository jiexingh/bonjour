
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

