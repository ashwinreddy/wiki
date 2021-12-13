**Clustering** is an unsupervised learning technique given $\left\\{x_i \in \RR^D \right\\}_{i=1}^N$ to find "clusters" based on similarity with some heuristic. You can think of the problem as reducing $X \in \RR^{N \times D}$ to dimensionality 1. 

# Centroid-based clustering

Each cluster is represented by a point (not necessarily in the training data) $c_k \in \RR^D$. For example, [[k-means clustering]].