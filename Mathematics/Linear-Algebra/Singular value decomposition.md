**Singular value decomposition (SVD)** is a [[matrix decomposition]] that can be applied to any $m \times n$ matrix $A$ of rank $r$. 

$$
A = \sum_{i=1}^r \sigma_i \vec{u}_i \vec{v}_i^\top
$$

The key equations here are

$$
AA^\top \vec{u}_i = \lambda_i \vec{u}_i, \quad i =1, \dots, m.
$$

$$
A^\top A \vec{v}_i = \lambda_i \vec{v}_i,\quad i=1, \dots, n.
$$

$$
\sigma_i = \sqrt{\lambda_i},\quad i = 1, \dots, r
$$

The straightforward decomposition, known as the **compact SVD**, is

$$
A_{m \times n} = U_{m \times r} \Sigma_{r \times r} V^\top_{r \times n}
$$

The full SVD is

$$
A_{m \times n} = U_{m \times m} \Sigma_{m \times n} V^\top_{n \times n}
$$

# Computation

You may choose to use either $A^\top A$ or $AA^\top$ to find the SVD. In either case, the first step is to find the eigenvalues of your chosen square matrix. Next, you need to find the eigenvectors $\lambda_i$. Collect the non-negative eigenvalues (if you find any negative $\lambda$, you messed up). 


|Step|$A^\top A$|$AA^\top$|
|----|-----------|--------|
|1. Find eigenvalues|||
|2. Find one set of eigenvectors|$\vec{v}_i$|$\vec{u}_i$|
|3. Obtain the other set by computation|$\vec{u}_i = \frac{1}{\sigma_i}A\vec{v}_i$|$\vec{v}_i = \frac{1}{\sigma_i}A^\top \vec{u}_i$|

