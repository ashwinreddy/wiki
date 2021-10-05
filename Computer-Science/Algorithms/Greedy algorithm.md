A **greedy algorithm** is an [[algorithm]] that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.

For example, say that a doctor's office has $n$ patients where customer $i$ takes $t(i)$ minutes and we want to minimize average waiting time. Clearly, we should sort patients by time and take the largest $t(i)$ first. 

We can also use an exchange argument by proving that greedy stays ahead. We take greedy solution $X$ and optimal solution $X^\star$. Then, we show that exchanging a piece of $X^\star$ for $X$ does not increase the cost.

_Example_. Rosa has to tend to $n$. She can only harvest one field a day. For each day field $i$ is not harvested, it requires $\ell_i$ liters of water.

# Examples

* [[Kruskal's algorithm]]
* [[Prim's algorithm]]