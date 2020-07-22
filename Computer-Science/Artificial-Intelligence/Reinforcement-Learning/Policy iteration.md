**Policy iteration** is an algorithm

1. Pick a random/arbitrary policy $pi$.
1. Policy evaluation: compute $Q^\pi$ by solving for fixed point $Q^\pi = \mathcal{B}^\pi Q^\pi$.
2. Policy improvement