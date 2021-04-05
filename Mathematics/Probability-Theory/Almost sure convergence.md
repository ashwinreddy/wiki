**Almost sure** is the strongest mode of [[convergence of random variables]] in the sense that

$$
\text{Almost sure convergence} \implies \text{Convergence in probability} \implies \text{Convergence in distribution}
$$

We say $X_n \overset{\text{a.s.}}{\longrightarrow} X$ or $X_n$ converges to $X$ almost[^1] surely if

$$
\Pr \left(\left \\{ \omega: \lim_{n \to \infty} X_n(\omega) = X(\omega) \right\\} \right) = 1,
$$

meaning the set of outcomes $\omega \in \Omega$ for which $X_n(\omega) \longrightarrow X(\omega)$ forms an event of probability 1. That is, all observed realizations of the sequence converge to the limit and $X_n \to X$ converge pointwise. 

$$
\Pr \left( \lim_{n \to \infty} X_n = X \right) = 1. \tag{A.S. Test}
$$


[^1]: We say _almost_ surely because you can imagine an example like a dartboard. Landing a dart on the exact diagonal happens with probability 0, so it almost surely will not happen (part of the sample space, but has probability 0).
