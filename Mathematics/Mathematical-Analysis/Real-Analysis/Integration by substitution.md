**Integration by substitution** is a technique for finding integrals by using the integral form of the chain rule:

$$
\dv{}{x}f(g(x)) = f'(g(x))g'(x) \implies \int f'(g(x)) g'(x) \dd{x} = f(g(x))
$$

If you spot the pattern, you can assign $u = g(x)$ and note that 

$$
\dv{u}{x} = g'(x) \implies \dd{u} = g'(x) \dd{x}
$$