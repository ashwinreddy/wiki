**Policy iteration** is an algorithm for iterating [[policy]].

1. Pick a random/arbitrary policy $\pi$.
1. Policy evaluation: compute $Q^\pi$ by solving for fixed point for [[Bellman operator|Bellman equation#Bellman operator]]. $Q^\pi = \mathcal{B}^\pi Q^\pi$.
2. Policy improvement