**Skew-Fit** is an algorithm to enable robots to discover skills autonomously. This will require exploration, so how do we exploration well? We want to maximize state [[entropy]] $\mathcal{H}(S)$, but just doing this means a policy that just tries to go everywhere. So the goal is

$$
\max \mathcal{H}(S) - \mathcal{H}(S \mid G)
$$

By noting this is an objective of maximizing [[mutual information]] $I(S; G)$, we rewrite to say

$$
\max \mathcal{H}(G) - \mathcal{H}(G \mid S)
$$