**Singular value decomposition (SVD)** is a [[matrix decomposition]] that can be applied to any $m \times n$ matrix $A$ of rank $r$. 

$$
A = \sum_{i=1}^r \sigma_i \vec{u}_i \vec{v}_i^\top
$$

# Computation

You may choose to use either $A^\top A$ or $AA^\top$ to find the SVD. In either case, the first step is to find the eigenvalues of your chosen square matrix. Next, you need to find the eigenvectors $\lambda_i$. Collect the non-negative eigenvalues (if you find any negative $\lambda$, you messed up). 


|Step|$A^\top A$|$AA^\top$|
|----|-----------|--------|
|1. Find eigenvalues|||
|2. Find one set of eigenvectors|$\vec{v}_i$|$\vec{u}_i$|
|3. Obtain the other set by computation|$\vec{u}_i = \frac{1}{\sigma_i}A\vec{v})i$|$\vec{v}_i = \frac{1}{\sigma_i}A^\top \vec{u}_i$|

