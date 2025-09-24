"use client";

import {forwardRef, ReactNode} from 'react'
import { Group } from 'three';

import { BaseWatch } from "./BaseWatch";

interface WatchProps {
    children?: ReactNode;
}

const Watch = forwardRef<Group, WatchProps>((
    {
        children,
        ...props
    },
    ref) => {
  return (
    <group ref={ref} {...props}>
            {children}
            <BaseWatch />
    </group>
  )
}
);

Watch.displayName = 'Watch';

export default Watch