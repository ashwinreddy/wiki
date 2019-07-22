A **value function** is a function that gives the utility of being in a state or being in a state and taking an action.

The on-policy value function is

\\[
V^\pi(s) = \mathbb{E}_{\tau \sim \pi}\left\[R(\tau)\vert s_0 = s\right\]
\\]

The on-policy action-value function is 

\\[
Q^\pi(s, a) = \mathbb{E}_{\tau \sim \pi}\left[R(\tau) \vert s_0 = s, a_0 = a\right]
\\]