**Normalized maximum likelihood** is a Bayesian classification algorithm.


for a [[statistical model]] $M$ is a [[probability distribution]]

$$
p_{\text{NML}}(x^n) = { p_{\hat\theta(x\^n)}(\tilde{x}^n)  \over \sum_{\tilde{x}^n \in \mathcal{X}^n} p_{\hat\theta(x\^n)}(\tilde{x}^n) }
$$

The NML distribution minimizes regret in the worse case:

$$
p_{\text{NML}} = \arg\min_q \max_{x^n \in \mathcal{X}^n} R(q, \Theta, x^n)
$$

The regret corresponds to excess number of bits $q$ uses compared to the the maximum likelihood estimator $\hat\theta(x^n)$

$$
R(q, \Theta, x^n) = \log p_{\hat\theta(x\^n)}(x^n) - \log q\left(x^n\right)
$$