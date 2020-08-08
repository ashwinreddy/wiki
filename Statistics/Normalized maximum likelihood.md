**Normalized maximum likelihood** for a [[statistical model]] $M$ is a [[probability distribution]]

$$
p_{\text{NML}} \propto  \max p(x),
$$

where we include a [[normalizing constant]] to make it a proper distribution. 

The NML distribution minimizes regret in the worse case:

$$
p_{\text{NML}} = \arg\min_q \max_{x^n \in \mathcal{X}^n} R(q, \Theta, x^n)
$$

The regret is

$$
R(q, \Theta, x^n) = \log p_{\hat\theta(x^n)}(x^n) - \log q(x^n)
$$