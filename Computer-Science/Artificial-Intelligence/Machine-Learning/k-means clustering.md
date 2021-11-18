In **$k$-means clustering**, we have samples $\left\\{x_i \in \RR^d \right\\}_{i=1}^n$ and our job is to assign the points to clusters $C_1, \dots, C_k$.

$$
\begin{aligned}
\min_{C_1, \dots C_k} \sum_{i=1}^k \sum_{x_j \in C_i} \lVert x_j - \mu_i \rVert_2^2
\end{aligned}
$$