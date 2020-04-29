**Lagrange duality** is a kind of [[duality]] where 

$$
\mathscr{L}(\vec{x}, \vec\lambda, \vec\nu) = f(x) + \sum_{i=1}^{} \lambda_i f_i(\vec{x}) + \sum_{i=1}^{} \nu_i h(x)
$$

\begin{align\*}
d^* &= \max_{\vec\nu, \vec{\lambda} \succcurlyeq 0}  g(\vec{\lambda}, \vec\nu) \\\\\
g(\vec\lambda, \vec\nu) &= \min_{\vec{x}} \mathscr{L}(\vec{x}, \vec\lambda, \vec\nu)
\end{align\*}

# Algorithm

1. Write down the Lagrange function.
2. Minimize over the Lagrangian $\mathscr{L}$ w.r.t. the primal variable to get the dual function $g$.
3. Find the arg max for $g$ over the dual variables. 
4. Compute the max $d^*$ of $g$ using the arg max.
5. 