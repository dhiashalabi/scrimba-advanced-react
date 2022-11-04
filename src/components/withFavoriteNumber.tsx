import React from "react"
/**
 * A function that takes a component as its first argument and returns a new component that wraps
 * the given component, providing extra capabilities to it.
 * 
 * Challenge: Write a higher-order component that passes a new prop to the given component
 * called "favoriteNumber" and includes your own, personal, favorite number
 * 
 * Then, in App.js, render that favorite number to the screen
 */
function withFavoriteNumber(component: any) {
    return function (props: any) {
        const Component = component
        return (
            <Component favoriteNumber={8} {...props} />
        )
    }
}
export default withFavoriteNumber