import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { dataLayerTrackPageView, EventData } from '@util/analytics-config';

export function useTrackPageView(eventData?: EventData) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      dataLayerTrackPageView({ url: window.location.pathname, pageData: eventData }).then();
    };

    handleRouteChange();

    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [eventData, router.events]);
}
