**$k$-means clustering** is [[clustering]]. we have samples $\left\\{x_i \in \RR^d \right\\}_{i=1}^n$ and our job is to assign the points to clusters $C_1, \dots, C_k$, which partition the data.

$$
\begin{aligned}
\min_{C_1, \dots C_k} \sum_{i=1}^k \sum_{x_j \in C_i} \lVert x_j - \mu_i \rVert_2^2
\end{aligned}
$$

There are two problems here:

1. Partitioning the data points
2. Picking the centroid

Suppose we knew the partition. Then the centroid can be found by just taking the average. 

$$
\hat{c}\_k  = \arg\min\_{c_k} \sum_{x \in C_k} \lVert x - c_k \rVert^2 = \frac{1}{N} \sum_{x \in C_k} x \tag{Centroid given Cluster}
$$

Suppose you know the centroids. Then the points are assigned to whichever centroid is closest. 

$$
\hat{C}_k = \\{ x_i \mid k = \arg\min_{j} \lVert x_i - c_j \rVert^2  \\}
$$

The $k$-means algorithm is just to iterate between these steps:

1. Pick the cluster centers $\\{c_k\\}$ by picking $k$ random points from your training data
2. Compute partition $C_1 \cup \dots \cup C_k$ given the $\\{c_k\\}$
3. Compute centers $\\{ c_k \\}$ given $C_1 \cup \dots \cup C_k$