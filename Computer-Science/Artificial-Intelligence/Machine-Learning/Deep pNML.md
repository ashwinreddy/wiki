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
    2. Add it to the data: $$z^{N+1} =z^N \cup \left\\{ (x, y=i) \right\\}$$
    3. Train again: $$\hat\theta_i = \mathsf{StochasticGradientDescent}\left(\hat\theta_{\text{ERM}}, z^{N+1}, \mathsf{steps}_2\right)$$
    4. Record the probability: $$p_i = p_{\hat\theta_i}\left(y = i \mid x\right)$$
    3. Repeat this for each possible $i$ class it could be. Call the sum of these values $$C = \sum_{i=1}^{ |\mathcal{Y}| }p_i$$.
4. Return the probabilities $p_i$ and the regret $\Gamma = \log C$.


---