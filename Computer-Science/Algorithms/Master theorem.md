The **master theorem** says

$$
T(n) = aT(n/b) + O\left(n^d\right)
$$

$$
T(n) = \begin{cases}O(n^d) & d > \log_b a \\ O(n^d \log n) & d = \log_b a \\ O(n^{\log_b a})& d < \log_b a \end{cases}
$$