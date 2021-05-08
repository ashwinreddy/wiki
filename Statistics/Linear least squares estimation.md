The **linear least squares estimator (LLSE)** estimates a [[random variable]] $Y$ given a correlated random variable $X$ by finding the best affine/linear function of $X$. In other words we're trying to project $Y$ onto $U = \operatorname{span}\\{1, X\\}$.





is the affine function of a [[random variable]] $X$ that is closest to random variable $Y$, i.e. minimizing $\mathbb{E}\left[(Y -a  - bX)^2\right]$. The estimate is

\begin{equation}
\label{eq:lsse}
L[X \mid Y] = \mu_X + \Sigma_{X,Y}\Sigma_Y^{-1}\left(Y - \mu_y\right) \tag{LLSE}
\end{equation}

We have three vectors 1, $X$, and $Y$ -- we want to find $Y$ given the data $X$, it terms of a linear combination of $X$ and 1.

Equation \ref{eq:lsse} projects onto affine functions of $Y$ (c.f. [[minimum mean square error]]).