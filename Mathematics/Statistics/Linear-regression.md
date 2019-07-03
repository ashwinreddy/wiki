In linear regression, the hypothesis $h$ looks like

\\[
h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2
\\]

The $\theta_i$'s are parameters or weights. We can simplify the notation by defining $x_0 = 1$ and then specifying that $\theta$ is a (column) vector:

\\[
h(x) = \theta^\mathsf{T}x
\\]

We need to formalize a notion of $h(x)$ being close to $y$ so that we can determine what the optimal $\theta$ is. The cost function captures the difference between $h(x)$ and $y$. For example, in linear regression it is common to use the [[least squares]] cost function.
