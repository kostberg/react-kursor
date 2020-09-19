/* eslint-disable prettier/prettier */
import React, { useCallback, useLayoutEffect, useMemo, useRef, useReducer, useContext } from 'react';
import useEventListener from './assets/useEventListener';
import useFakeAwait from './assets/useFakeAwait';
import { StyleCacheProvider } from 'react-css-component';
import Style from './assets/style';

const KursorContext = React.createContext();

export const useKursor = () => {
    return useContext(KursorContext);
}

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b
    })

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

const colorToRgbArray = color => {
    const isRGB = /^(rgb|rgba)/.test(color)
    const isHEX = /^(#)/.test(color)
    if (isRGB) {
        const arrayColor = color.replace(/[rgba()]/g, '').split(',')
        return `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`
    } else if (isHEX) {
        const rgb = hexToRgb(color)
        return `${rgb.r},${rgb.g},${rgb.b}`
    }
}

const removeClass = (array, classname) => [...new Set(array.filter(item => item !== classname))];
const addClass = (array, classname) => [...new Set([...array, classname])];

function reducer(state, action) {
    const { target = "kursor", classname } = action.payload;

    switch (action.type) {
        case 'removeClass': {
            const classes = (
                target === "kursor" ? 
                { ...state, kursor: removeClass(state.kursor, classname) } : 
                { ...state, kursorChild: removeClass(state.kursorChild, classname) }
            )
            return { ...state, ...classes };
        }
            
        case 'addClass': {
            const classes = (
                target === "kursor" ? 
                { ...state, kursor: addClass(state.kursor, classname) } : 
                { ...state, kursorChild: addClass(state.kursorChild, classname) }
            )
            return { ...state, ...classes };
        }

        default:
            throw new Error();
    }
}

function Kursor({
    type = 1,
    removeDefaultCursor = true,
    color: _color = "#000000",
    local = false,
    shouldRender = true,
    kursorId: key = "",
    children
} = {}){
    const color = useMemo(() => colorToRgbArray(_color), [_color]);
    const props = useRef({ type, removeDefaultCursor, color, local, shouldRender, key });

    const compare = useCallback(ref => {
        if(!ref) return false;
        return ref;
    }, [])
    const [kursorNode, setKursorNode] = useFakeAwait(compare, []);
    const [kursorChildNode, setKursorChildNode] = useFakeAwait(compare, []);
    const [classes, dispatch] = useReducer(reducer, {
        kursor: [
            `kursor--${props.current.type}`, 
            "kursor", 
            "kursor" + key
        ],
        kursorChild: [
            "kursorChild", 
            "kursorChild" + key
        ]
    });

    // Render effect
    useLayoutEffect(() => {
        if (!shouldRender) return;
    
        if (props.current.removeDefaultCursor){
            document.body.classList.add('notCursor');
        }

        return () => {
            document.body.classList.remove('notCursor');
        }
    }, [shouldRender])

    const mouseMove = useCallback(e => {
        if(!kursorNode || !kursorChildNode) return;

        kursorNode.style.left = `${e.x}px`;
        kursorNode.style.top = `${e.y}px`;

        kursorChildNode.style.left = `${e.x}px`;
        kursorChildNode.style.top = `${e.y}px`;
    }, [kursorNode, kursorChildNode]);

    const mouseEnter = useCallback(() => {
        dispatch({
            type: "removeClass", payload: {
                classname: "kursor--hidden"
            } 
        })
        dispatch({ 
            type: "removeClass", payload: {
                target: "kursorChild",
                classname: "kursorChild--hidden"
            }
        })
    }, []);

    const mouseLeave = useCallback(() => {
        dispatch({
            type: "addClass", payload: {
                classname: "kursor--hidden"
            } 
        })
        dispatch({ 
            type: "addClass", payload: {
                target: "kursorChild",
                classname: "kursorChild--hidden"
            }
        })
    }, []);

    const mouseDown = useCallback(() => {
        dispatch({
            type: "addClass", payload: {
                classname: "kursor--down"
            } 
        })
    }, []);

    const mouseUp = useCallback(() => {
        dispatch({
            type: "removeClass", payload: {
                classname: "kursor--down"
            } 
        })
    }, []);

    const hoverIn = useCallback(() => {
        dispatch({
            type: "addClass", payload: {
                classname: "--hover"
            } 
        })
    }, [])

    const hoverOut = useCallback(() => {
        dispatch({
            type: "removeClass", payload: {
                classname: "--hover"
            } 
        })
    }, [])

    useEventListener(window, 'mousemove', mouseMove);
    useEventListener(document, 'mouseenter', mouseEnter);
    useEventListener(document, 'mouseleave', mouseLeave);
    useEventListener(document, 'mousedown', mouseDown);
    useEventListener(document, 'mouseup', mouseUp);

    return (
        <StyleCacheProvider>
            <Style />
            <div ref={ setKursorNode } style={{ "--k-color": color }} className={ classes.kursor.join(" ") } />
            <div ref={ setKursorChildNode } style={{ "--k-color": color }}  className={ classes.kursorChild.join(" ") } />
            <KursorContext.Provider value={{ hoverOut, hoverIn }}>
                { children }
            </KursorContext.Provider>
        </StyleCacheProvider>
    )
}

export default Kursor;