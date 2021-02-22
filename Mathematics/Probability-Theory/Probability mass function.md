A **probability mass function (PMF / pmf)** a.k.a **the distribution** of a discrete [[random variable]] $X$ is a [[function]] $p : \mathbb{R} \to [0,1]$ assigns probability.

\begin{equation}
p_X (x) = \Pr(\\{X = x\\}) =  \mathbb{P}(\\{\omega : X(\omega) = x\\})
\end{equation}

The conditions for the function are that

\begin{gather}
p_X(x) \geq 0 \\\\\ \sum_x p_X(x) = 1
\end{gather}

You could imagine the pmf as a vector.

# Example

Suppose $X$ can take on values $x_1, \dots, x_n$. Then,

\begin{equation}
\Pr(X = x) = \begin{cases} p_1 & x= x_1 \\\\ \vdots & \vdots \\\\ p_n & x = x_n \end{cases}
\end{equation}