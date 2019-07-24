A **value function** is a function that gives the utility of being in a state or being in a state and taking an action.

\\[
R(\tau) = \sum_{t=0}^\infty \gamma^tr_t
\\]

The on-policy value function is

\\[
V^\pi(s) = \mathbb{E}_{\tau \sim \pi}\left\[R(\tau)\vert s_0 = s\right\]
\\]

The on-policy action-value function is 

\\[
Q^\pi(s, a) = \mathbb{E}_{\tau \sim \pi}\left[R(\tau) \vert s_0 = s, a_0 = a\right]
\\]

The optimal value function and the optimal action-value function are just the max of the respective previous two over all $\pi$.