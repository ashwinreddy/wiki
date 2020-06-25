The **score** is given by the gradient of the log of the likelihood.

$$
s(\theta) = \pdv{ }{\theta}\log\ell(\theta)
$$

The [[expectation]] of the score is 0.

$$
\mathbb{E}[s | theta] = \int_{\mathcal{X}} f(x; \theta) s(\theta) \dd{x}
$$