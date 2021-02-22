**Almost sure** is a mode of [[convergence of random variables]] that says $X_n \overset{\text{a.s.}}{\longrightarrow} X$ almost surely if

$$
\Pr \left(\left \\{ \omega: \lim_{n \to \infty} X_n(\omega) = X(\omega) \right\\} \right) = 1,
$$

meaning the set of outcomes $\omega \in \Omega$ for which $X_n(\omega) \longleftarrow X(\omega)$ forms an event of probability 1. That is, all observed realizations of the sequence converge to the limit.



so that as functions $X_n \to X$ converge pointwise. We say _almost_ surely because you can imagine an example like a dartboard. Landing a dart on the exact diagonal happens with probability 0, so it almost surely will not happen (part of the sample space, but has probability 0).

$$
\text{Almost sure convergence} \implies \text{Convergence in probability} \implies \text{Convergence in distribution}
$$