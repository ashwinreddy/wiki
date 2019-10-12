**Gradient descent** is an iterative optimization algorithm for finding the minimum of a multivariable function $F(\vec{x})$. Repeat the following step until convergence:

\\[
\vec{x}\_{n+1} \leftarrow \vec{x}\_{n} - \alpha \vec\nabla F(\vec{x}_{n})
\\]

The alternative to batch gradient descent is stochastic gradient descent, where we run the gradient descent rule for each training example. This eliminates the need to scan through the entire training set for each step.