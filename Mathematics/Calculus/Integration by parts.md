**Integration by parts** is a technique for computing an [[integral]] using the product rule in reverse.

$$
\int u(x) v'(x) \dd{x} = u(x)v(x) - \int u'(x) v(x) \dd{x}
$$

$$
uv = \int u \\, \dd{v} + \int v \\, \dd{u}
$$

Then, if you have a complicated integral, the actual technique is

$$
\int u \\, \dd{v}  = uv - \int v \\, \dd{u} 
$$

Of course, the technique can be adapted to include limits.

$$
\int_a^b u \\, \dd{v}  = \left[uv\right]_a^b - \int_a^b v \\, \dd{u} 
$$

# Quantum Mechanics

In quantum mechanics, we often have $f, g \to 0$ at the boundary, so

$$
\int f \dv{g}{x} \dd{x} = - \int \dv{f}{x} g \dd{x}
$$