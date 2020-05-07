A **multilayer perceptron (MLP)** is basically a vanilla neural network. A simple model has $I$ inputs $x_i$ and $O$ outputs given $H$ hidden units:

\begin{gather}
f_k(x) = b_k + \sum_{j=1}^H v_{jk}h_j(x) \\\\\
h_j(x) =\tanh(a_j + \sum_{i=1}^I u_{ij}x_i)
\end{gather}

# Limits for Gaussian prior

Let's say the weights $v_{jk}$ and biases $b_k$ have zero mean and standard deviation $\sigma_v$ and $\sigma_b$ and similarly for $u_{ij}$ and $a_j$. Each hidden unit contributes nil to the expectation:

$$
\mathbb{E}[v_{jk}h_j(x^{(1)})] \stackrel{\text{ind. r.v.}}{=} \mathbb{E}[v_{jk}]\cdot\mathbb{E}[h_j(x^{(1)})] = 0
$$

The hidden unit's variance contribution is

$$
\mathbb{V} x^{(1)} = \mathbb{E}[h_j(x^{(1)})^2]
$$