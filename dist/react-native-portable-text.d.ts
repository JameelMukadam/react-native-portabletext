import React from 'react';
import type { PortableTextProps } from '@portabletext/react';
import type { TypedObject, PortableTextBlock } from '@portabletext/types';
export declare function PortableText<B extends TypedObject = PortableTextBlock>(props: Omit<PortableTextProps<B>, 'listNestingMode'>): React.JSX.Element;
