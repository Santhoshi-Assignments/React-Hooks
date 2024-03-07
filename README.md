In the useStateComponent, the state (count) is updated using setCount, triggering a re-render.

In the useRefComponent, the countRef variable is a mutable reference that persists across renders without causing the component to re-render.

The countRef.current value is directly modified, and the component doesn't re-render when the button is clicked.