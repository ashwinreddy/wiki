The **master theorem** gives us a way to find a [[Big O|Big O notation]] for a [[divide and conquer algorithm]] with [[recurrence relation]].

We assume that the size of the problem is $n$. It branches into $a$ subproblems of size $n / b$. The work at each level is $O(n^d)$.

$$
T(n) = aT(n/b) + O\left(n^d\right)
$$

$$
T(n) = \begin{cases}O(n^d) & d > \log_b a \\\\ O(n^d \log n) & d = \log_b a \\\\ O(n^{\log_b a})& d < \log_b a \end{cases}
$$