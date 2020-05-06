# Orthogonal Matching Pursuit

**Orthogonal matching pursuit (OMP)** is an algorithm for finding a sparse vector $\vec{x}$ such that $M\vec{x} = b$ where typically, $M$ is a wide/fat matrix has more columns than rows. In other words, construct $b$ as a linear combination of as few columns of $M$ as possible. 

# Intuition

We'll have to start with $\vec{x}=0$ and then pick one of the columns. Naturally, we'll pick the column that's most correlated with the data by maximizing inner product.


1. Look for the column that has the highest magnitude inner product with the residual.
2. Include that column in a matrix $A$
3. Do a least squares to find the best linear combination of columns of $A$ that gets you to $b$
4. Update the residual by removing your least squares estimate.

# Algorithm
