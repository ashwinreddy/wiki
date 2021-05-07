**Linear least squares estimation (LLSE)**. The estimate of $Y$ given $X$ is

\begin{equation}
\label{eq:lsse}
L[X \mid Y] = \mu_X + \Sigma_{X,Y}\Sigma_Y^{-1}\left(Y - \mu_y\right) \tag{LLSE}
\end{equation}

Equation \ref{eq:lsse} projects onto affine functions of $Y$ (c.f. [[minimum mean square error]]).