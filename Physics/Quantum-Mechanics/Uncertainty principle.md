The **uncertainty principle** says that for [[observables|observable]] $A$ and $B$,

\begin{equation}
\boxed{ \sigma_A^2 \sigma_B^2 \geqslant \left(\frac{1}{2\iota} \langle \left[A,B\right] \rangle\right)^2 } \tag{Uncertainty principle}
\end{equation}

The uncertainty principle is only interesting when the observables do not commute. If $\left[A, B \right] = 0$, we have no information because it is trivially true. When the observables do not commute, they cannot have a complete set of common eigenfunctions.

# Examples

Suppose we consider position and momentum. Then,

$$
\sigma_x^2 \sigma_p^2 \geq \left(\frac{1}{2\cancel{\iota}} \cancel{\iota} \hbar \right)^2
$$




So it is not possible to know both the position and momentum of a particle exactly. Quantitatively, it says


\begin{equation}
\boxed{\sigma_x \sigma_p \geq \frac{\hbar }{2}} \tag{Heisenberg Uncertainty}
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