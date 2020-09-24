/* eslint-disable prettier/prettier */

import { useEffect } from 'react';
import useDebounceFunc from './useDebounceFunc';

function useEventListener(node, eventName, handler, debouncing = 0){
    handler = useDebounceFunc(handler, debouncing);

    useEffect(() => {
        if(!node) return; // Basic error handling

        // Add event listener
        node.addEventListener(eventName, handler);

        // Remove event listener on cleanup
        return () => {
            node.removeEventListener(eventName, handler);
        };
    }, [node, eventName, handler]);
};

export default useEventListener;