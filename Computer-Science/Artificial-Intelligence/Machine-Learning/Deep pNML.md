---
bibliography: "./Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Deep pNML** is an algorithm introduced in @bibas2019deep. 

# Algorithm

Given a training set $z^N = \\{ (x_i, y_i) \\}^N_{i=1}$,

1. Initialize $\hat\theta_0$ randomly.
2. Initial training: $\hat\theta_{\text{ERM}} = \mathsf{StochasticGradientDescent}(\hat\theta_0, z^N, \mathsf{steps})$

---