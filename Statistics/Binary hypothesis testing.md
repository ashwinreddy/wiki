---
bibliography: "Statistics/stat.bib"
---

**Binary hypothesis testing** is [[hypothesis testing]] where we have $X \in \\{0, 1\\}$ and

\begin{align}
H_0: Y \sim P_{Y \mid X = 0} \tag{Null Hypothesis} \\\\
H_1: Y \sim P_{Y \mid X = 1} \tag{Alternate Hypothesis}
\end{align}

We want a decision rule $\hat{X}: Y \to \\{0, 1\\}$ to get the highest probability of correct detection without setting off too many false alarms:

\begin{equation}
\begin{aligned}
\max \quad & \text{PCD} \\\\
\textrm{s.t.} \quad & \text{PFA} \leqslant \beta \\\\
\end{aligned}
\end{equation}

# Bayesian binary hypothesis testing

Following from @hardtrecht, we want to "optimize over _algorithms_, searching for functions that map data to decisions and predictions." Define the loss function associated with declaring $H_i$ true when $H_j$ is true as $\ell(i, j)$. The risk with our rule $\hat{Y}$ is

$$
\hat{Y} = \mathbb{E}\left[ \ell\left(\hat{Y}(X), Y\right) \right]
$$

By [[law of total expectation]],

\begin{align}
\hat{Y} = \mathbb{E}\left[ \mathbb{E}\left[ \ell\left(\hat{Y}(X), Y\right) \right] \right]
\end{align}

---