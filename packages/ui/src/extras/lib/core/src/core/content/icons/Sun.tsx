import React, { memo } from 'react';
import {
  Circle as _Circle,
  Line as _Line,
  Rect as _Rect,
  Svg as _Svg,
} from 'react-native-svg';

import { themed } from './themed';
import { IconProps } from './IconProps';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Circle
        cx="128"
        cy="128"
        r="60"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="128"
        y1="36"
        x2="128"
        y2="16"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="62.9"
        y1="62.9"
        x2="48.8"
        y2="48.8"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="36"
        y1="128"
        x2="16"
        y2="128"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="62.9"
        y1="193.1"
        x2="48.8"
        y2="207.2"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="128"
        y1="220"
        x2="128"
        y2="240"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="193.1"
        y1="193.1"
        x2="207.2"
        y2="207.2"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="220"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="193.1"
        y1="62.9"
        x2="207.2"
        y2="48.8"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  );
};

Icon.displayName = 'SunRegular';

export const SunRegular = memo<IconProps>(themed(Icon));
