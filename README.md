# React useEffect Dependency Warning

This repo demonstrates a common warning encountered when upgrading to React 18 or 19 related to the `useEffect` hook.  The problem stems from improperly handling dependencies within the `useEffect` array.

## Problem

The original `bug.js` demonstrates a functional component that updates a count. The `useEffect` hook logs the count to the console, but omits `count` from its dependency array. This leads to the warning because the effect runs only once, irrespective of count changes.

## Solution

The `bugSolution.js` corrects this by explicitly including `count` in the dependency array. Now the effect correctly fires whenever the count changes.

## How to run

1. Clone the repo
2. `cd` into the repo directory
3. `npm install`
4. `npm start`