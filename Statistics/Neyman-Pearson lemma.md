The **Neyman-Pearson lemma** says that given $\beta \in [0, 1]$, optimal decision rule is a (randomized) threshold test.

$$
L(y) = \frac{P_{Y \mid X}(y \mid 1)}{p_{Y \mid X}(y \mid 0)}
$$

\begin{equation}
\hat{X}_\beta(y) = \begin{cases}  1 & L(y) > \lambda \\\\ 0 & L(y) < \lambda \\\\ \mathsf{Bern}(\gamma) & L(y) = \lambda \end{cases} \tag{Neyman-Pearson Rule}
\end{equation}

where $\lambda, \gamma$ chosen so that

$$
\Pr\left(\hat{X}(Y) = 1 \mid X = 0 \right) = \beta.
$$

