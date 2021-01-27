A **random variable (RV / r.v. / R.V.)** is a [[function]] $X: \Omega \to \RR$ for a sample space $\Omega$ in a [[probability space]]. We require

$$
\forall \alpha \in \RR: \\{ \omega: X(\omega) \leqslant \alpha \\} \in \mathcal{F}
$$


Random variables are the building block of probability. Simply put, they represent a discrete or continuous quantity (more technically, the outcome of an [[experiment]]) whose value is uncertain. Mechanically, the variable annotates each possible outcome with a probability, typically in the form of a [[probability mass function]] (pmf) or [[probability density function]] (pdf). 

Suppose $X$ can take on values $x_1, \dots, x_n$. Then,

\begin{equation}
\Pr(X = x) = \begin{cases} p_1 & x= x_1 \\\\ \vdots & \vdots \\\\ p_n & x = x_n \end{cases}
\end{equation}

Formally, $X$ is a function.
