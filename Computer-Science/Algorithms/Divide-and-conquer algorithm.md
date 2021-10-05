A **divide-and-conquer algorithm** is an [[algorithm]] that divides a problem into pieces and assembles the work of each piece. To do a runtime analysis, we have to go to a [[recurrence relation]]. In some cases, we can use [[Master theorem]].

_Example_. Consider $T(n) = 2T(n/2) + \order{n \log n}$. The total work we do will be

$$
\sum_{i=0}^{\log n} \cancel{2^i} \frac{n}{\cancel{2^i}} \log \left( \frac{n}{2^i}\right)
$$