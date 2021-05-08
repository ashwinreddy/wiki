The **linear least squares estimator (LLSE)** is the affine function of a [[random variable]] $X$ that is closest to random variable $Y$, i.e. the

$$
L[Y \mid X] = \arg\min_{a, b \in \RR} \mathbb{E}\left[(Y -a  - bX)^2\right]
$$





. The estimate of $Y$ given $X$ is

\begin{equation}
\label{eq:lsse}
L[X \mid Y] = \mu_X + \Sigma_{X,Y}\Sigma_Y^{-1}\left(Y - \mu_y\right) \tag{LLSE}
\end{equation}

We have three vectors 1, $X$, and $Y$ -- we want to find $Y$ given the data $X$, it terms of a linear combination of $X$ and 1.

Equation \ref{eq:lsse} projects onto affine functions of $Y$ (c.f. [[minimum mean square error]]).