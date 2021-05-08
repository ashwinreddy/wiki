The **Neyman-Pearson lemma** tells us how to do inference for [[binary hypothesis testing]]. Our goal is to maximize the probability of correct detection such that the probability of false alarm is less than $\beta$.

1. Observe $Y$
2. Two hypotheses: $H_0$ and $H_1$
3. Formalize some decision rule $r: \RR \to \\{0, 1\\}$ where $\hat{X} = r(Y)$.



says that given $\beta \in [0, 1]$, optimal decision rule is a (randomized) threshold test.

\begin{equation}
L(y) = \frac{P_{Y \mid X}(y \mid x = 1)}{P_{Y \mid X}(y \mid x = 0)} \tag{Likelihood ratio}
\end{equation}

\begin{equation}
\hat{X}_\beta(y) = \begin{cases}  1 & L(y) > \lambda \\\\ 0 & L(y) < \lambda \\\\ \mathsf{Bern}(\gamma) & L(y) = \lambda \end{cases} \tag{Neyman-Pearson Rule}
\end{equation}

where $\lambda, \gamma$ chosen so that

$$
\Pr\left(\hat{X}(Y) = 1 \mid X = 0 \right) \leqslant \beta.
$$

# Strategy

1. Calculate likelihood ratio $L(y)$
