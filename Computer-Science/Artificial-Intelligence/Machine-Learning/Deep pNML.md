---
bibliography: "./Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Deep pNML (predictive Normalized Maximum Likelihood)** is an algorithm introduced in @bibas2019deep that does [[Normalized Maximum Likelihood]] as a Bayesian classifier with an [[artificial neural network]]. 

# Algorithm

Given a training set $z^N = \\{ (x_i, y_i) \\}^N_{i=1}$,

1. Initialize $\hat\theta_0$ randomly.
2. Initial training: standard supervised learning $$\hat\theta_{\text{ERM}} = \mathsf{StochasticGradientDescent}(\hat\theta_0, z^N, \mathsf{steps}_1)$$
3. Fine tuning. For each $x$ in the test sample,
    1. Pretend it's part of the $y=i$ example class, add it to the data, train again, and record the probability.
    2. Repeat this for each possible $i$ class it could be. Call the sum of these values $C$.
    3. Return the normalized distribution using $C$ as a [[normalizing constant]].
4. Return distribution and the regret $\Gamma = \log C$.


---