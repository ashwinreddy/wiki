**Orthogonal matching pursuit (OMP)** is an algorithm for finding a sparse vector $\vec{x}$ such that $M\vec{x} = b$ where typically, $M$ is a wide/fat matrix has more columns than rows. In other words, construct $b$ as a linear combination of as few columns of $M$ as possible. 

# Intuition

We'll have to start with $\vec{x}=0$ and then pick one of the columns. Naturally, we'll pick the column that's most correlated with the data by maximizing inner product.

# Algorithm

1. $\vec{e} \leftarrow \vec{b}$
2. For $i = 1, \dots, k$ for sparsity $k$
    1. Find $i$ such that $\vert\langle \vec{m}_i, \vec{e} \rangle\vert$ is maximum
    2. Update $\vec{x}_i = \vec{x}_i + \langle \vec{e}, \vec{m}_i \rangle$.