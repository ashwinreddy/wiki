A **multilayer perceptron (MLP)** is basically a vanilla neural network. A simple model has $I$ inputs $x_i$ and $O$ outputs given $H$ hidden units:

\begin{gather}
f_k(x) = b_k + \sum_{j=1}^H v_{jk}h_j(x) \\\\\
h_j(x) =\tanh(a_j + \sum_{i=1}^I u_{ij}x_i)
\end{gather}