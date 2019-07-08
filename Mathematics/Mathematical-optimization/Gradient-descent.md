**Gradient descent** is an iterative optimization algorithm for finding the minimum of a function. For a multivariable function $F(x)$, gradient descent tells us to repeat the following step until convergence:

\\[
x_{n+1} \leftarrow x_{n} - \alpha \nabla F(x_{n})
\\]

The alternative to batch gradient descent is stochastic gradient descent, where we run the gradient descent rule for each training example. This eliminates the need to scan through the entire training set for each step.