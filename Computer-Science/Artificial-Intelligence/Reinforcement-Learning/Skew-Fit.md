---

---

**Skew-Fit** [@pong2020skewfit] is an algorithm to do autonomous learning without rewards.

1. What objective should we use?
2. How do we optimize the objective?

The objective could be to explore. Usually, that's based on state visitation frequency or prediction error. Here, we can try to maximize state [[entropy]] $\mathcal{H}(S)$, but just doing this means a policy that just tries to go everywhere. So the goal is

$$
\max \mathcal{H}(S) - \mathcal{H}(S \mid G)
$$

But the first term is hard to compute, which depends on policy and the potentially unknown environment dynamics. By noting this is an objective of maximizing [[mutual information]] $I(S; G)$, we rewrite to say

$$
\max \mathcal{H}(G) - \mathcal{H}(G \mid S)
$$

In other words, we want diverse goals (first term) and also we'll need to do goal-conditioned RL (so that it is easy to tell what the goal is given the current state).

Ok! So let's just sample from the goal space uniformly. But the more complex the state space, it won't work. We need to sample uniformly from manifold of _valid states_. That's where Skew-Fit comes in.

> It's a method for learning to sample goals uniformly from the manifold of valid states without knowing this manifold ahead of time.

How do we obtain $p(G)$ ? We could collect observations, train a generative model, and sample goals with the model. 

# Algorithm

1. Collect states by sampling goals and running goal conditioned policy.
2. Construct skewed distribution
2. Fit policy to skewed distribution.