**Normalized maximum likelihood** is a classification algorithm that gives predictions with uncertainty built in. The key idea is this - when given a new point $x$, for each possible label we retrain the model as if it were part of that class and see what probability it outputs. Then, the actual output is normalized:

$$
p_{\text{NML}}( y \mid x) \propto \max_{\theta \in \Theta} p\left(y \mid \mathcal{D}, x, y\right)
$$



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