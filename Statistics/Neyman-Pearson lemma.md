The **Neyman-Pearson lemma** tells us how to do inference for [[binary hypothesis testing]]. In other words, we have a null hypothesis $H_0$ and the alternate $H_1$. We observe $Y$ and our goal is to determine which hypothesis to pick. The lemma says to use the rule for $\beta \in [0,1]$,


\begin{equation}
\hat{X}_\beta(y) = \begin{cases}  1 & L(y) > \lambda \\\\ 0 & L(y) < \lambda \\\\ \mathsf{Bern}(\gamma) & L(y) = \lambda \end{cases} \tag{Neyman-Pearson Rule}
\end{equation}


\begin{equation}
L(y) = \frac{P_{Y \mid X}(y \mid x = 1)}{P_{Y \mid X}(y \mid x = 0)} \tag{Likelihood ratio}
\end{equation}

where $\lambda, \gamma$ chosen so that

$$
\Pr\left(\hat{X}(Y) = 1 \mid X = 0 \right) \leqslant \beta.
$$

# Example

We flip a coin until we see heads. The null hypothesis is that the bias is $p$ and the alternate is that the bias is $q > p$. The likelihood ratio is

$$
L(y) = \frac{\Pr(y \mid X = 1)}{\Pr(y mid X = 0)} = \frac{(1-q)\^{y-1}q}{(1-p)^{y-1}p}
$$