**$k$-means clustering** is [[clustering]]. we have samples $\left\\{x_i \in \RR^d \right\\}_{i=1}^n$ and our job is to assign the points to clusters $C_1, \dots, C_k$, which partition the data.

$$
\begin{aligned}
\min_{C_1, \dots C_k} \sum_{i=1}^k \sum_{x_j \in C_i} \lVert x_j - \mu_i \rVert_2^2
\end{aligned}
$$

There are two problems here:

1. Partitioning the data points
2. Picking the centroid

Suppose we knew the partition. Then the centroid can be found by just taking the average. Suppose you know the centroids. Then the points are assigned to whichever centroid is closest. 