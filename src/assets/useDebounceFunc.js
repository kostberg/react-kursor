import { useEffect, useState, useRef, useCallback } from 'react';

function useDebounceFunc(func, delay) {
    const args = useRef([])
    const [trigger, setTrigger] = useState(undefined);
    const triggerFunc = useCallback((..._args) => {
        args.current = _args;
        setTrigger(prev => !prev);
    }, [])
    
    useEffect(() => {
        if(typeof(trigger) === "undefined") return;
        
        const handler = setTimeout(() => {
            func(...args.current);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [trigger, delay, func]);
    
    if(!delay) return func;
    return triggerFunc;
}

export default useDebounceFunc;