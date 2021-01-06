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

So there can't really be a problem here. Let's try to understand Zeno's argument. 

1. It takes $h_0 / v_A$ time for Achilles to cover the headstart.
2. In that time, the tortoise will have covered $v_T h_0 / v_A$.
3. So then Achilles will have to cover $v_T h_0 / v_A^2$
4. So on and so forth

But this process converges:

$$
\sum_{n=1}^\infty \left(\frac{v_T}{v_A}\right)^n
$$