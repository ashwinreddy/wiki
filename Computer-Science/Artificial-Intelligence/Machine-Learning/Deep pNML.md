---
bibliography: "./Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Deep pNML (predictive Normalized Maximum Likelihood)** is an algorithm introduced in @bibas2019deep that does [[Normalized Maximum Likelihood]] as a Bayesian classifier with an [[artificial neural network]]. 

# Algorithm

Given a training set $z^N = \\{ (x_i, y_i) \\}^N_{i=1}$,

1. Initialize $\hat\theta_0$ randomly.
2. Initial training: standard supervised learning $$\hat\theta_{\text{ERM}} = \mathsf{StochasticGradientDescent}\left(\hat\theta_0, z^N, \mathsf{steps}_1\right)$$
3. Fine tuning. For each $x$ in the test sample,
    1. Pretend it's part of the $y=i$ example class. 
    2. Add it to the data: $$z^{N+1} =z^N \cup \\{ (x, y=i) \\}$$
    3. Train again: $$\hat\theta = \mathsf{StochasticGradientDescent}(\hat\theta_{\text{ERM}}, z^{N+1}, \mathsf{steps}_2)$$
    4. record the probability.
    3. Repeat this for each possible $i$ class it could be. Call the sum of these values $C$.
    4. Return the normalized distribution using $C$ as a [[normalizing constant]].
4. Return distribution and the regret $\Gamma = \log C$.


---