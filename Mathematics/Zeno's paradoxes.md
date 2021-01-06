**Zeno's paradoxes**

# Achilles and tortoise

\begin{align\*}
x_{A}(t) &= v_A t \\\\
x_T(t) &= h_0 + v_T t
\end{align\*}

By inspection, we can notice that the two will reach each other at 

$$
t = \frac{v_A - v_T}{h_0}
$$

So there can't really be a problem here. The issue is that we have to compute

$$
\text{Distance to catch up} = h_0 \sum_{n=1}^\infty \left(\frac{v_T}{v_A}\right)^n,
$$

but this is a [[geometric series]] where since $v_T < v_A$, we can guarantee convergence with

$$
\text{Distance to catch up} = h_0 \frac{v_T}{v_A - v_T}
$$

<<Warn("Something doesn't add up here")>>