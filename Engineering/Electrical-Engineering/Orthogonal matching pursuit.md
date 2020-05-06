**Orthogonal matching pursuit (OMP)** is an algorithm for finding a sparse vector $\vec{x}$ such that $M\vec{x} = b$ where typically, $M$ is a wide/fat matrix has more columns than rows. In other words, construct $b$ as a linear combination of as few columns of $M$ as possible. 

# Intuition

We'll have to start with $\vec{x}=0$ and then pick one of the columns. Naturally, we'll pick the column that's most correlated with the data by maximizing inner product.
