The **uncertainty principle** says for [[observables|observable]] $A$ and $B$, the [[variance]] $\sigma_A^2$ and $\sigma_B^2$ obey

\begin{equation}
\boxed{ \sigma_A^2 \sigma_B^2 \geqslant \left(\frac{1}{2\iota} \langle \left[A,B\right] \rangle\right)^2 } \tag{Uncertainty principle}
\end{equation}

In other words, when the observables are [[incompatible|compatibility of observables]] (i.e. do not commute), they cannot have a complete set of common eigenfunctions. If $A$ and $B$ have zero [[commutator]], i.e. $\left[A, B\right]=0$, then the uncertainty principle is trivially true; all it says is that the product of variances is non-negative. 

# Examples

Suppose we consider position and momentum. Then,

$$
\sigma_x^2 \sigma_p^2 \geqslant \left(\frac{1}{2\cancel{\iota}} \cancel{\iota} \hbar \right)^2
$$

So it is not possible to know both the position and momentum of a particle exactly. Quantitatively, it says


\begin{equation}
\boxed{\sigma_x \sigma_p \geqslant \frac{\hbar }{2}} \tag{Heisenberg Uncertainty}
\end{equation}

# Proof

For an observable $A$, we note that

$$
\sigma_A^2 = \langle f \mid f \rangle, \qquad f \equiv \left( \widehat{A} - \langle A \rangle \right) \Psi
$$

Therefore, by [[Cauchy-Schwarz inequality]]

$$
\sigma_A^2 \sigma_B^2 = \langle f \mid f \rangle \langle g \mid g \rangle \geq | \langle f \mid g \rangle |^2
$$