For a curve $\vec\alpha: I \to \RR^n$, we can find arc length by adding up the infinitesimal distances travelled. Remember that distance is the integral of speed, so

$$
s = \int_a^b \left\lVert \dv{\vec\alpha(t)}{t} \right\rVert \dd{t}
$$

The differential form tells us

$$
\vec\alpha(t) = \pdv{\vec\alpha}{x^i}\dd{x^i} \implies \dv{\vec\alpha(t)}{t} = \pdv{\vec\alpha}{x^i}\dv{x^i}{t}
$$

Using the [[metric tensor]], we find that 
$$
\lVert \dv{\vec\alpha(t)}{t} \rVert = {g_{ij}\dv{x^i}{t}\dv{x^j}{t}
$$