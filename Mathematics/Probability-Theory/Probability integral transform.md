The **probability integral transform** says that for a continuous [[random variable]] $X$ with [[cumulative distribution function]] $F_X$, the random variable $Y = F_X(X)$ has a standard [[continuous uniform distribution]]. 

\begin{align\*}
F_Y(y) &= \mathbb{P}(Y \leqslant y) \\\\
&= \mathbb{P}( F_X(X) \leqslant y ) \\\\
&= \mathbb{P}( X \leqslant F_X^{-1}(y) ) \\\\
&= F_X(F_X^{-1}(y)) \\\\
&= y
\end{align\*}