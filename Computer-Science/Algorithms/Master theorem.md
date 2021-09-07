The **master theorem** gives us a way to find a [[Big O|Big O notation]] for a [[divide and conquer algorithm]] with [[recurrence relation]].

We assume that the size of the problem is $n$. It branches into $a$ subproblems of size $n / b$. The work at each level is $\order{n^d}$.

\begin{equation}
T(n) = aT(n/b) + \order{n^d}
\end{equation}

The depth of the tree here is $\log_b n$ because we're dividing by $b$ each layer. We also know that at level $k$ we have $a^k$ nodes. So the width of the tree is $a^{\log_b n} = n^{\log_b a}$.

At level $k$ we have $a^k$ doing $\order{n / b^k}\^d$.


$$
T(n) = \begin{cases}\order{n^d} & d > \log_b a \\\\ \order{n^d \log n} & d = \log_b a \\\\ \order{n^{\log_b a}}& d < \log_b a \end{cases}
$$