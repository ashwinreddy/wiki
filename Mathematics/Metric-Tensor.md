
The metric tensor is a function $g: V \times V \to R$.

Properties:

- bilinear
- symmetric
- nondegenerate

In flat space,


\begin{equation}
(\mathrm{d}s)^2 = (\mathrm{d}x)^2+(\mathrm{d}y)^2+(\mathrm{d}z)^2
\end{equation}

However, if the basis vectors are not orthogonal, cross terms appear. Then,

\begin{equation}
(\mathrm{d}s)^2 = g_{ij}\mathrm{d}x^i\mathrm{d}x^j
\end{equation}

So we see that in flat space, we have the special case where $g_{ij} = \delta_{ij}$. In general, arc length is

$\let\sb_$

\begin{align}
L &= \int \,\mathrm{d}s \\\
&= \int \sqrt{g\sb{ij}\mathrm{d}x^i\mathrm{d}x^j} \\\
&= \int\limits_{t\sb{1}}^{t_2} \sqrt{g_{ij}\frac{\mathrm{d}x^i}{\mathrm{d}t}\frac{\mathrm{d}x^j}{\mathrm{d}t}}\,\mathrm{d}t
\end{align}


\begin{equation}
g = J^\mathsf{T}J
\end{equation}