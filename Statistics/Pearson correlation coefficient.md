The **Pearson correlation coefficient** between [[random variables|random variable]] $X$ and $Y$ tells us what kind of linear relationship exists between $X$ and $Y$. Computationally, it normalizes [[covariance]] with [[standard deviation]].

$$
\rho_{X,Y} = \frac{\mathsf{cov}(X, Y)}{\sigma_X \sigma_Y}
$$

Thus, the correlation coefficient is bounded in magnitude by 1 inclusively:

$$
-1 \leqslant \rho_{X,Y} \leqslant 1
$$

If random variables exhibit [[independence]], they will have 0 correlation coefficient.

$$
X \perp Y \implies \rho_{X, Y} = 0.
$$

The converse cannot be inferred generally. Take a look at [this](https://www.stat.cmu.edu/~cshalizi/uADA/13/reminders/uncorrelated-vs-independent.pdf) to distinguish correlation from independence (the relationship is tricky).