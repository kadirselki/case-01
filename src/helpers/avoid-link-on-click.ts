import { MutableRefObject } from 'react';

export const avoidLinkOnClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    ref: MutableRefObject<any>,
    avoidClass: string,
) => {
    const avoidNodes: HTMLElement[] = [];
    ref.current.querySelectorAll(`.${avoidClass}`).forEach((node: HTMLElement) => avoidNodes.push(node));
    const isHit = avoidNodes.some((n) => event.nativeEvent.composedPath().includes(n));
    if (isHit) event.preventDefault();
};
