/* eslint-disable prettier/prettier */
import { useRef } from 'react';

export default function useLog(name, value) {
    const previous = useRef(value);
    if (!Object.is(previous.current, value)) {
      console.log(`${name} has changed.`, "Old value:", previous.current, "New value:", value);
      previous.current = value;
    }
}