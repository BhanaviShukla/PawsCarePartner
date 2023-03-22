import { isBrowser } from '@util/browser';
import { normalizeStringToId } from '@util/string';

export type EventData = Record<string, unknown> | Record<string, unknown>[];

type DataLayerTrackPageViewType = {
  url: string;
  pageData?: EventData;
};

export async function dataLayerTrackPageView(props: DataLayerTrackPageViewType) {
  // only fire on client side
  if (!isBrowser) {
    return;
  }

  // if no ga found
  const { url, pageData } = props;

  sessionStorage.setItem('last_page_url', url);
  // push to datalayer
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: 'PageView',
    page: {
      path: url,
      data: pageData
    }
  });
}

export type DataLayerEventType = {
  eventName: string;
  data?: EventData;
};

export async function dataLayerEvent(props: DataLayerEventType) {
  // only fire on client side
  if (!isBrowser) {
    return;
  }

  const { eventName = '', data } = props;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    ...data,
    event: normalizeStringToId(eventName)
  });
}
