The Berlekamp-Welch algorithm protects against general errors in transmissions. Alice wants to send a message $m_1\dots m_n$. Let her find a polynomial $P(x)$ of degree _n-1_ with [[Lagrange interpolation]] that fits her message and then generate off _2k_ more values. She then sends over these values $P(i)$ for $i=1, \dots, n+2k$.

_k_ of those will be corrupted and Bob gets $r_i$'s instead. Let $e_1, \dots, e_k$ represent the locations of the errors. 

Error-locator polynomial
: A degree _k_ polynomial given by $E(x) = \prod_{i=1}^k (x - e_i)$

Knowing the error-locator polynomial means knowing where the errors are. We'll notice that an expansion of $E(x)$ would have $k-1$ unknown coefficients $b_i$:

$$
E(x) = x^k + \sum_{i=1}^{k-1} b_{i} x^{i}
$$

Define a polynomial $Q(x) = P(x)E(x)$. $Q(x)$ is a degree $n+k-1$ polynomial. It holds that

\begin{equation}
\label{eq:berlekamp-welch}
Q(i) = r_i E(i), \qquad i = 1, \dots, n + 2k
\end{equation}

We know that $Q(x)$ could be described with _n+k_ unknown coefficients

$$
Q(x) = \sum_{i=1}^{n+k} a_i x^i
$$

So if we group together the unknown coefficients $a_i$ and $b_i$ we have $n+2k$ values. Yet Equation \ref{eq:berlekamp-welch} provides a linear system with $n+2k$ equations and known values. So simply use Gaussian elimination to recover $E$ and $Q$ and realize

$$
P(x) = \frac{Q(x)}{E(x)} = \frac{\sum_{i=1}^{n+k-1} a_i x^i}{x^k + \sum_{i=1}^{k-1} b_{i} x^{i}}
$$