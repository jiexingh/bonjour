import React from 'react';
import { TrashIcon, LinkIcon } from '@heroicons/react/24/outline';

export type ActionIcon = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // SVG 图标组件类型
  action: string;
  className?: string; // 将 className 设为可选
};

export interface OnActionTapParams {
  actionItem: ActionIcon;
  index: number;
}

interface FixedActionIconsProps {
  actionIcons: ActionIcon[];
  onActionTap?: (params: OnActionTapParams) => void;
}

const FixedActionIcons = (props: FixedActionIconsProps) => {
  return (
    <div className='fixed z-10 bottom-32 right-6 flex flex-col items-center gap-4'>
      {props.actionIcons.map((action, index) => {
        const IconComponent = action.icon;
        return (
          <div 
            onClick={() => props.onActionTap && props.onActionTap({ actionItem: action, index })} 
            key={action.action} 
            className="p-2 border backdrop-blur-sm rounded-full box-border shadow-sm cursor-pointer"
          >
            <IconComponent className={`size-5 font-medium ${action.className || ''}`} />
          </div>
        );
      })}
    </div>
  );
};

export default FixedActionIcons;