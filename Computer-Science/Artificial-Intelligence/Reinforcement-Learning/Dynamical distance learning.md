---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**Dyanmical distance learning (DDL)** is an method for learning a dynamics-aware embedding of a distance function that can be used as a [[reward function]] for goal-reaching. There are two steps:

1. _Distance evaluation_: learn a policy-specific dynamical distance
2. _Policy improvement_: optimize policy to reach goal using distance function as negative reward.

Dynamical distance
: A function $d^\pi(s_i, s_j)$ representing the expected number of time steps for a policy $\pi$ to go from $s_i$ to $s_j$.

# Distance evaluation

We can then learn $d^\pi_\psi(s, s')$ by minimizing 

$$
L_d(\psi) = \frac{1}{2} \mathbb{E}_{\substack{ \tau \sim \pi \\\\\ i \sim [0, T] \\\\\ j \sim [i, T] }} \left[ \left( d^\pi_\psi(s_i, s_j) -  \left(j-i \right) \right)^2 \right]
$$

# Policy improvement

Next, we use $d^\pi_\psi$ to optimize a parameterized policy $\pi_\phi$ with parameters $\phi$ to reach goal $g$.

# Algorithm

Repeat until convergence:

1. Sample trajectory $\tau$ using policy $\pi$ and save it in replay pool $\mathcal{D}$
2. Minimize distance loss
3. Choose a recent goal state from $\mathcal{D}$
4. Minimize policy loss

---