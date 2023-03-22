import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode
} from 'react';
import Link, { LinkProps } from 'next/link';
import { dataLayerEvent, EventData } from '@util/analytics-config';
import { normalizeStringToId } from '@util/string';

type AnchorTagProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

interface BaseLinkProps extends LinkProps {
  testId: string;
  children?: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  title?: string;
  className?: string;
  analyticsId?: string;
  analyticsData?: EventData;
  anchorProps?: Omit<AnchorTagProps, 'target' | 'title' | 'className'>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/* Base Link Props needed
 *  shallow
 * replace
 * passRef
 * Locale
 * Styles
 * Analytics
 * link title provides more information about the link
 * Test Ids
 * route & query props directly
 * <Link
     href={{
     pathname: '/about',
     query: { name: 'test' },
   }}>
   *
 * */

export function BaseLink(props: BaseLinkProps) {
  const {
    children,
    target,
    title,
    className,
    analyticsId,
    analyticsData,
    anchorProps = {},
    testId,
    onClick,
    ...rest
  } = props;

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (analyticsId) {
      dataLayerEvent({ eventName: analyticsId, data: analyticsData }).then();
    }
    onClick && onClick(e);
  };

  return (
    <Link {...rest} passHref>
      <a
        {...anchorProps}
        data-testid={normalizeStringToId(testId)}
        className={` ${className}`}
        target={target}
        title={title}
        onClick={handleLinkClick}
      >
        {children}
      </a>
    </Link>
  );
}
