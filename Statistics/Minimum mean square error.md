**Minimum mean square error (MMSE)** provides [[estimator]] for $Y$ given observations $X_1, \dots, X_n$.

\begin{equation}
\arg\min_{\phi} \mathbb{E}\left[(Y - \phi(X))^2\right] \tag{MMSE objective}
\end{equation}

This translates into 

> $Y-\phi(X)$ is orthogonal to all other functions of $X$.

\begin{equation}
\hat{Y} = \mathbb{E}\left[ Y \mid X\right] \tag{MMSE}
\end{equation}

This is the projection of $X$ onto all functions of $Y$. If this turns out to be a linear (what about affine??) function, then it is also the [[LLSE|Linear least squares estimation]].

The necessary and sufficient condition

$$
\mathbb{E}\left[Y - \phi(X)\mid X\right] = 0.
$$